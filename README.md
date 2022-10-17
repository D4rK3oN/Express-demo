# Animals API - GraphQL, TypeScript, Node.js & Express

## Create new project

```console
npm init -y

npn install -D typescript

npx tsc --init

npm install -E express express-graphql graphql

npm install -D @types/express
```

## GraphQL Codegen

```console
npm install -D @graphql-codegen/cli graphql
```

<br/>Launch a wizard to create your new codegen configuration.

```console
npx graphql-codegen init
```

<br/>**[codegen.yml]** - GraphQL Codegen config file:

```yml
overwrite: true

schema: 'src/resources/graphql/schemas/**/*.graphql'

config:
  scalars:
    AWSDate: string
    AWSDateTime: string
    AWSEmail: string
    AWSIPAddress: string
    AWSJSON: string
    AWSPhone: string
    AWSTime: string
    AWSTimestamp: number
    AWSURL: string
  declarationKind: 'interface'
  immutableTypes: true

generates:
  build/resources/graphql/generated/graphql.ts:
    plugins:
      - 'typescript'
      - 'typescript-resolvers'
```

## ESLint & Prettier

Install dependencies and init ESLint configuration.

```console
npm install -D eslint prettier eslint-config-prettier eslint-plugin-prettier @graphql-eslint/eslint-plugin

npx eslint --init
```

- **eslint-config-prettier:**<br/>
  Turns off all ESLint rules that have the potential to interfere with Prettier rules.

- **eslint-plugin-prettier:**<br/>
  Turns Prettier rules into ESLint rules.

- **@graphql-eslint/eslint-plugin:**<br/>
  With graphql-eslint you can easily validate and lint your GraphQL schema and your GraphQL operations, enforce coding-style, best practices, and avoid runtime issues.

<br/>**[.eslintrc.json]** - ESLint config file:

```json
{
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended"
  ],
  "ignorePatterns": ["build/"],
  "overrides": [
    {
      "files": ["*.js"],
      "processor": "@graphql-eslint/graphql",
      "extends": ["plugin:prettier/recommended"]
    },
    {
      "files": ["*.graphql"],
      "parser": "@graphql-eslint/eslint-plugin",
      "plugins": ["@graphql-eslint"],
      "rules": {
        "prettier/prettier": ["error"]
      }
    }
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "project": ["./tsconfig.json"]
  },
  "plugins": ["@typescript-eslint", "prettier"],
  "root": true,
  "rules": {
    "no-console": ["warn"],
    "prettier/prettier": ["error"]
  }
}
```

<br/>**[.prettierrc]** - Prettier config file:

```json
{
  "arrowParens": "avoid",
  "semi": false,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "none"
}
```

<br/>

```console
npm run lint
```

### Visual Studio Code extensions:

- **ESLint** _[by Microsoft]_
- **Error Lens** _[by Alexander]_ (Optional)
- **Prettier - Code formatter** _[by Prettier]_
- **Prettier-Standard - JavaScript formatter** _[by numso]_
- **GraphQL: Language Feature Support by GraphQL Foundation** _[by GraphQL Foundation]_

## Build - TSC

You can edit the output path in the 'tsconfig.json' file

```json
    /* Emit */
    "outDir": "./build",      /* Specify an output folder for all emitted files. */
```

## Run server on localhost - DEV

Tweaked version of node-dev that uses ts-node under the hood.<br/>

It restarts target node process when any of required files changes (as standard node-dev ) but shares Typescript compilation process between restarts.<br/>

```console
npm install ts-node-dev -D
```

## Project scripts (package.json)

```json
  "scripts": {
    "build": "tsc",
    "codegen": "graphql-codegen --config codegen.yml",
    "dev": "ts-node-dev src/main/com/bff/express-demo/app.ts",
    "lint": "eslint .",
    "start": "node build/main/com/bff/express-demo/app.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  }
```
