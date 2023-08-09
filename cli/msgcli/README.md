oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![GitHub license](https://img.shields.io/github/license/oclif/hello-world)](https://github.com/oclif/hello-world/blob/main/LICENSE)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
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
* [`msgcli hello PERSON`](#msgcli-hello-person)
* [`msgcli hello world`](#msgcli-hello-world)
* [`msgcli help [COMMANDS]`](#msgcli-help-commands)
* [`msgcli plugins`](#msgcli-plugins)
* [`msgcli plugins:install PLUGIN...`](#msgcli-pluginsinstall-plugin)
* [`msgcli plugins:inspect PLUGIN...`](#msgcli-pluginsinspect-plugin)
* [`msgcli plugins:install PLUGIN...`](#msgcli-pluginsinstall-plugin-1)
* [`msgcli plugins:link PLUGIN`](#msgcli-pluginslink-plugin)
* [`msgcli plugins:uninstall PLUGIN...`](#msgcli-pluginsuninstall-plugin)
* [`msgcli plugins:uninstall PLUGIN...`](#msgcli-pluginsuninstall-plugin-1)
* [`msgcli plugins:uninstall PLUGIN...`](#msgcli-pluginsuninstall-plugin-2)
* [`msgcli plugins update`](#msgcli-plugins-update)

## `msgcli hello PERSON`

Say hello

```
USAGE
  $ msgcli hello PERSON -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [dist/commands/hello/index.ts](https://github.com/Jayk5/msgcli/blob/v0.0.0/dist/commands/hello/index.ts)_

## `msgcli hello world`

Say hello world

```
USAGE
  $ msgcli hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ msgcli hello world
  hello world! (./src/commands/hello/world.ts)
```

_See code: [dist/commands/hello/world.ts](https://github.com/Jayk5/msgcli/blob/v0.0.0/dist/commands/hello/world.ts)_

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

## `msgcli plugins`

List installed plugins.

```
USAGE
  $ msgcli plugins [--json] [--core]

FLAGS
  --core  Show core plugins.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ msgcli plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v3.2.0/src/commands/plugins/index.ts)_

## `msgcli plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ msgcli plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ msgcli plugins add

EXAMPLES
  $ msgcli plugins:install myplugin 

  $ msgcli plugins:install https://github.com/someuser/someplugin

  $ msgcli plugins:install someuser/someplugin
```

## `msgcli plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ msgcli plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ msgcli plugins:inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v3.2.0/src/commands/plugins/inspect.ts)_

## `msgcli plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ msgcli plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ msgcli plugins add

EXAMPLES
  $ msgcli plugins:install myplugin 

  $ msgcli plugins:install https://github.com/someuser/someplugin

  $ msgcli plugins:install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v3.2.0/src/commands/plugins/install.ts)_

## `msgcli plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ msgcli plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ msgcli plugins:link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v3.2.0/src/commands/plugins/link.ts)_

## `msgcli plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ msgcli plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ msgcli plugins unlink
  $ msgcli plugins remove
```

## `msgcli plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ msgcli plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ msgcli plugins unlink
  $ msgcli plugins remove
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v3.2.0/src/commands/plugins/uninstall.ts)_

## `msgcli plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ msgcli plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ msgcli plugins unlink
  $ msgcli plugins remove
```

## `msgcli plugins update`

Update installed plugins.

```
USAGE
  $ msgcli plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v3.2.0/src/commands/plugins/update.ts)_
<!-- commandsstop -->
