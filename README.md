# Animals API - GraphQL, TypeScript, Node.js & Express

## Let's start

### Create new project

```
npm init -y

npn install typescript -D

npx tsc --init

npm install express -E
npm install @types/express -D
```

### Init GraphQL Codegen

This command is going to start a wizard to create your new codegen configuration.

```
npm install -D @graphql-codegen/cli graphql

npx graphql-codegen init
```

Visual Studio Code extensions:
 - GraphQL: Language Feature Support by GraphQL Foundation

### Project scripts (package.json)

```
  "scripts": {
    "build": "tsc",
    "codegen": "graphql-codegen --config codegen.yml",
    "dev": "ts-node-dev src/main/com/bff/express-demo/app.ts",
    "lint": "ts-standard",
    "start": "node build/main/com/bff/express-demo/app.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  }
```

## ESLint

```
npm install ts-standard -D

npm install -D @graphql-eslint/eslint-plugin
```

Add in package.json file:

```
  "eslintConfig": {
    "parserOptions": {
      "project": "./tsconfig.json"
    },
    "extends": [
      "./node_modules/ts-standard/eslintrc.json"
    ]
  }
```

```
npm run lint
```

Visual Studio Code extensions:
  - ESLint by Microsoft
  - (Optional) Error Lens by Alexander
  - (Optional) Markdown All in One by Yu Zhang

## Build - TSC

You can edit the output path in the 'tsconfig.json' file

```
    /* Emit */
    "outDir": "./build",      /* Specify an output folder for all emitted files. */
```

Run the TypeScript compiler:

```
npm run build
```

## Generate GraphQL schema

```
npm run codegen
```

## Run server on localhost - DEV

Tweaked version of node-dev that uses ts-node under the hood.

It restarts target node process when any of required files changes (as standard node-dev ) but shares Typescript compilation process between restarts.

```
npm install ts-node-dev -D
```

```
npm run dev
```

## Start server

```
npm run start
```

## Test

```
npm run test
```
