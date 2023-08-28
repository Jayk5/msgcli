<!-- toc -->

- [Usage](#usage)
- [Commands](#commands)
<!-- tocstop -->

# Usage

<!-- usage -->

```sh-session
$ npm install -g msgcli
$ msgcli COMMAND
running command...
$ msgcli (--version)
msgcli/0.0.0 linux-x64 node-v20.5.0
$ msgcli --help [COMMAND]
USAGE
  $ msgcli COMMAND
...
```

<!-- usagestop -->

# Commands

<!-- commands -->

- [`msgcli help [COMMANDS]`](#msgcli-help-commands)
- [`msgcli join`](#msgcli-join)

## `msgcli help [COMMANDS]`

Display help for msgcli.

```
USAGE
  $ msgcli help [COMMANDS] [-n]

ARGUMENTS
  COMMANDS  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for msgcli.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.2.15/src/commands/help.ts)_

## `msgcli join`

Join a room

```
USAGE
  $ msgcli join [-u <value>] [-r <value>]

FLAGS
  -r, --room=<value>      Room name
  -u, --username=<value>  Username in chat

DESCRIPTION
  Join a room

EXAMPLES
  $ msgcli join

  $ msgcli join --username=Con --room=Room12

  $ msgcli join -u Con -r Room12
```

_See code: [dist/commands/join/index.ts](https://github.com/Jayk5/msgcli/blob/v0.0.0/dist/commands/join/index.ts)_

<!-- commandsstop -->

# Local Setup

<!-- local -->

## Requirements

- Node.js (tested on Node v20.5.0)
- npm (tested on npm v9.8.0)

## Steps

- Run `npm install` in both cli and server folders.
- In server, use `node index.js` for starting backend.
- In cli, use `npm run transpile` or `npm run build` to compile.
- Use `./bin/run` or `./bin/dev` in cli for testing.
