import { Command, ux, Flags } from "@oclif/core";
import io from "socket.io-client";
import chalk from "chalk";

export default class Join extends Command {
  static description = "Join a room";

  static examples = [`$ msgcli join`, `msgcli join --username=Con --room=Room12`, `msgcli join -u Con -r Room12`];

  static flags = {
    username: Flags.string({ char: "u", description: "Username in chat", required: false }),
    room: Flags.string({ char: "r", description: "Room name", required: false }),
  };

  async run(): Promise<void> {
    const socket = io("http://localhost:3000");
    const { flags } = await this.parse(Join);
    let username: string, room: string;
    if (flags.username) {
      username = flags.username;
    } else {
      username = await ux.prompt(chalk.yellow("Name to use in chat"));
    }
    if (flags.room) {
      room = flags.room;
    } else {
      room = await ux.prompt(chalk.yellow("Room name"));
    }

    if (!username) {
      throw new Error(`Username cannot be empty`);
    } else if (!room) {
      throw new Error(`Room name cannot be empty`);
    }

    socket.emit("join", { username, room });
    socket.on("message", (message: string) => {
      this.log(chalk.cyan(message));
    });

    const waitForInput = async () => {
      const message = await ux.prompt("");
      if (message.toLowerCase() === "exit") {
        socket.disconnect();
        this.log("Disconnected from the chat.");
      } else {
        socket.emit("sendMessage", { message, room });
        waitForInput();
      }
    };

    this.log(`${chalk.blue(`Hello ${username}, you are now in room ${room}`)}`);
    waitForInput();
  }
}
