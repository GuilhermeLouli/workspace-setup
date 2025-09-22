# workspace-setup
__A step by step guide for:__

UI changes to vscode to remove bloat;

Additional shortcuts to vscode;

Eslint rule list for typescript;

# Step 0: If you do __not__ have a project started

Run the following in an empty folder:

```bash
npm init -y
```

# Step 1: Change type commonjs to module

This setup uses "import" and "export" statements, instead of the previous "require". 

```js
import any from 'any'; // <- ✅ module

const any = require('any'); // <- ❌ commonjs
```

In your package.json file, add the following:

```jsonc
{
  "name": "any",
  "version": "any",
  "description": "any",
  "main": "any",
  "type": "module",  // <-- new line added
  "scripts": { }
}
```

# Step 2: Install Dev Dependencies

This setup uses both [ESLint](https://eslint.org) and [ESLint Stylistic](https://eslint.style), since each covers a different set of rules.

Install the required dev dependencies for linting and TypeScript:

### Using npm
```bash
npm install --save-dev @eslint/js@latest @typescript-eslint/eslint-plugin@latest @typescript-eslint/parser@latest eslint@latest globals@latest typescript@latest typescript-eslint@latest @stylistic/eslint-plugin@latest eslint-plugin-import@latest
```
### Using yarn
```bash
Copiar código
yarn add --dev @eslint/js@latest @typescript-eslint/eslint-plugin@latest @typescript-eslint/parser@latest eslint@latest globals@latest typescript@latest typescript-eslint@latest @stylistic/eslint-plugin@latest eslint-plugin-import@latest
```

# Step 3: Add the file `eslint.config.js` in your root folder

This is the file containing all the rules for linting. For a detailed explanation of each rule, check [the ESLint rules guide](eslint-rules.md).

Alternatively, you can check [ESLint](https://eslint.org/docs/latest/rules/) and [ESLint Stylistic](https://eslint.style/rules) directly.
