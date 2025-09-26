# typescript

A simple and complete setup to start using Typescript with preset configurations.

If you only want the __ESLint configuration__, you can skip to [here](eslint.md).

<br/>

## Step 0: If you do not have a project started

Run the following in an empty folder:

```bash
npm init -y
```

<br/>

## Step 1: Change type commonjs to module

This setup uses "import" and "export" statements, instead of the previous "require". 

```js
import example from 'example'; // <- ✅ module

const example = require('example'); // <- ❌ commonjs
```

In your __package.json__ file, add the following:

```jsonc
{
  "name": "example",
  "version": "example",
  "description": "example",
  "main": "example",
  "type": "module",  // <- new line added
  "scripts": { ... }
}
```

<br/>

## Step 2: Initializing Typescript
First, install Typescript as a development dependency:

```bash
npm install --save-dev typescript
```

Then, depending on your project, you may want to install specific type definitions, for example:

A __Node.js__ project uses a __"@types/node"__ type definition.
```bash
npm install --save-dev @types/node
```

A __React.js__ project uses a __"@types/react"__ type definition.
```bash
npm install --save-dev @types/react
```

If you are missing a __@type__ dependency, vscode will warn you about it.

<br/>

## Step 3: Add the file [`tsconfig.json`](tsconfig.json) in your root folder

This is the file containing all configurations for Typescript. For a detailed explanation of each configuration, check the [Typescript configuration guide](tsconfig-rules.md).

If you have trouble saving the file without losing its formatting, check the [vscode-shortcut](vscode-shortcuts.md) that enables __save without formatting__.

If you want the default __tsconfig.json__ file, you can run the following to generate one for you:

```bash
npx tsc --init
```

<br/>

### Step 4: Add ESLint to your project.

If you want ESLint, follow this [step by step](eslint.md).