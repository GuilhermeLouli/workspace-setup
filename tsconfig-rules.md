# Language and Environment

### target: "ES2020"
✅ Correct (using optional chaining, supported in ES2020):

```typescript
const user = { profile: { name: "Ana" } };
console.log(user?.profile?.name);
```

❌ Wrong (using features only from ES2022+, e.g., at() which ES2020 target doesn’t include):

```typescript
const arr = [1, 2, 3];
console.log(arr.at(-1)); // ❌ Not available in ES2020 target
```

### lib: ["ES2020", "DOM"]
✅ Correct:

```typescript
document.querySelector("#app"); // DOM API allowed
Promise.allSettled([]); // ES2020 API allowed
```

❌ Wrong (using an API not in ES2020 + DOM, e.g., BigInt64Array.prototype.toSorted from ES2023):

```typescript
const arr = new BigInt64Array([1n, 2n]);
arr.toSorted(); // ❌ Not part of ES2020 lib
```

### module: "ESNext"
✅ Correct:

```typescript
// modern ESM
import { readFile } from "fs/promises";
```

❌ Wrong (CommonJS style with require):

```typescript
const fs = require("fs"); // ❌ Invalid in ESNext modules
```

### moduleResolution: "Node"
✅ Correct (Node.js style):

```typescript
import express from "express"; // Resolved via node_modules
```

❌ Wrong (expecting browser-style resolution, no file extension mismatch):

```typescript
import x from "./utils"; // ❌ Needs "./utils.ts" or "./utils/index.ts"
```

### esModuleInterop: true
✅ Correct:

```typescript
import express from "express"; // Works with default import
```

❌ Wrong (without interop, needs import * as express):

```typescript
import express from "express"; // ❌ Would fail if interop = false
```

### allowSyntheticDefaultImports: true
✅ Correct:

```typescript
import fs from "fs"; // CJS but allowed with synthetic default
```

❌ Wrong:

```typescript
import fs from "fs"; // ❌ Would error if this option = false
```

### resolveJsonModule: true
✅ Correct:

```typescript
import data from "./config.json";
console.log(data.name);
```

❌ Wrong:

```typescript
import data from "./config.json"; // ❌ Error if resolveJsonModule = false
```

# Type Checking

### strict: true
✅ Correct:

```typescript
function greet(name: string) {
  return "Hello " + name;
}
```

❌ Wrong:

```typescript
function greet(name) { // ❌ Implicit any
  return "Hello " + name;
}
```

### noImplicitAny: true
✅ Correct:

```typescript
function sum(a: number, b: number): number {
  return a + b;
}
```

❌ Wrong:

```typescript
function sum(a, b) { // ❌ a, b implicitly any
  return a + b;
}
```

### strictNullChecks: true
✅ Correct:

```typescript
let value: string | null = null;
if (value !== null) {
  console.log(value.length);
}
```

❌ Wrong:

```typescript
let value: string | null = null;
console.log(value.length); // ❌ Cannot read length of null
```

### noUnusedLocals: true
✅ Correct:

```typescript
const activeUsers = 10;
console.log(activeUsers);
```

❌ Wrong:

```typescript
const activeUsers = 10; // ❌ never used
```

### noUnusedParameters: true
✅ Correct:

```typescript
function greet(name: string) {
  console.log("Hi " + name);
}
```

❌ Wrong:

```typescript
function greet(name: string) { // ❌ parameter not used
  console.log("Hello!");
}
```

### noFallthroughCasesInSwitch: true
✅ Correct:

```typescript
switch (value) {
  case 1:
    console.log("one");
    break;
  case 2:
    console.log("two");
    break;
}
```

❌ Wrong:

```typescript
switch (value) {
  case 1:
    console.log("one");
  case 2: // ❌ fallthrough to here
    console.log("two");
}
```

### forceConsistentCasingInFileNames: true
✅ Correct:

```typescript
import helper from "./utils/Helper"; // matches file name exactly
```

❌ Wrong:

```typescript
import helper from "./utils/helper"; // ❌ inconsistent casing
```

# Output

### outDir: "./dist"

✅ Correct:

Compile → src/index.ts → outputs to dist/index.js.

❌ Wrong:

Code compiles but user imports from src/index.js directly instead of dist.

# skipLibCheck: true

✅ Correct:

Project compiles even if node_modules types have internal issues.
❌ Wrong:

Without this, TypeScript may throw errors inside libraries you don’t control.

# Project Options

### baseUrl: "./"
✅ Correct:

```typescript
import helper from "src/utils/helper"; // resolves from baseUrl
```

❌ Wrong:

```typescript
import helper from "../../src/utils/helper"; // ❌ without baseUrl
```
