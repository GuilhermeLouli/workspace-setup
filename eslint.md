# Eslint configuration

A simple and complete setup to start using ESLint with preset configurations.

## Step 1: Install Dev Dependencies

This setup uses both [ESLint](https://eslint.org) and [ESLint Stylistic](https://eslint.style), since each covers a different set of rules.

Install the required dev dependencies for linting and TypeScript:

```bash
npm install --save-dev eslint@latest typescript@latest @typescript-eslint/parser@latest @typescript-eslint/eslint-plugin@latest @stylistic/eslint-plugin@latest eslint-plugin-import@latest globals@latest
```

<br/>

## Step 2: Add the file [`eslint.config.js`](eslint.config.js) in your root folder

This is the file containing all the rules for linting. For a detailed explanation of each rule, check [the ESLint rules guide](eslint-rules.md).

Alternatively, you can check [ESLint](https://eslint.org/docs/latest/rules/) and [ESLint Stylistic](https://eslint.style/rules) rules directly.

<br/>

## Step 3: Add the VSCode ESLint extension

Go to VSCode extensions and install [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) (by Dirk Baeumer).

<br/>

## Step 4: Enable format-on-save

Open VSCode settings (__Ctrl+,__), search "Editor: Format on save" and mark the checkbox.

Press __Ctrl+Shift+P__, then type "Open User Settings (JSON)" to open your __settings.json__ file, then add the following:

```jsonc
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "eslint.validate": ["javascript", "typescript"]
```