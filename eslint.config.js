import tseslint from "typescript-eslint";
import stylistic from "@stylistic/eslint-plugin";
import importPlugin from "eslint-plugin-import";

export default [
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
        project: "./tsconfig.json",
      },
    },
    settings: {
      "import/resolver": {
        typescript: {
          alwaysTryTypes: true,
          project: "./tsconfig.json",
        },
      },
    },
    plugins: {
      import: importPlugin,
      "@typescript-eslint": tseslint.plugin,
      "@stylistic": stylistic,
    },
    rules: {
      "no-restricted-imports": ["error",
        {
          "patterns": [{
            "group": ["src/domain/repositories"],
            "message": "Use @repositories instead"
          }]
        }],

      "@stylistic/eol-last": ["error", "always"],
      "@stylistic/semi": ["error", "always"],

      "@stylistic/indent": ["error", 2],
      "@stylistic/quotes": ["error", "double", { avoidEscape: true }],
      "@stylistic/comma-dangle": ["error", "always-multiline"],
      "@stylistic/object-curly-spacing": ["error", "always"],
      "@stylistic/no-multiple-empty-lines": ["error", { max: 1 }],
      "@stylistic/no-trailing-spaces": "error",
      "@stylistic/spaced-comment": ["error", "always"],
      "@stylistic/block-spacing": ["error", "always"],
      "@stylistic/space-before-function-paren": ["error", "never"],
      "@stylistic/member-delimiter-style": [
        "error",
        {
          multiline: {
            delimiter: "semi",
            requireLast: true,
          },
          singleline: {
            delimiter: "semi",
            requireLast: false,
          },
        },
      ],

      "lines-between-class-members": [
        "error",
        "always",
        { exceptAfterSingleLine: true },
      ],
      "@typescript-eslint/consistent-type-definitions": ["error", "type"],
      "@typescript-eslint/explicit-function-return-type": ["error"],
      "@typescript-eslint/prefer-readonly": "error",
      "@typescript-eslint/explicit-member-accessibility": [
        "error",
        {
          accessibility: "explicit",
          overrides: {
            accessors: "off",
            constructors: "no-public",
            methods: "explicit",
            properties: "explicit",
            parameterProperties: "explicit",
          },
        },
      ],
      "@typescript-eslint/no-explicit-any": [
        "error",
        {
          fixToUnknown: true,
          ignoreRestArgs: false,
        },
      ],
      "@typescript-eslint/member-ordering": [
        "error",
        {
          default: [
            "public-static-field",
            "protected-static-field",
            "private-static-field",
            "public-instance-field",
            "protected-instance-field",
            "private-instance-field",
            "constructor",
            "public-instance-method",
            "protected-instance-method",
            "private-instance-method",
          ],
        },
      ],
      "space-infix-ops": "error",
      "prefer-const": "error",
      "no-multi-spaces": ["error"],
      eqeqeq: ["error", "always"],
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          caughtErrors: "all",
          caughtErrorsIgnorePattern: "^_",
          destructuredArrayIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],
      "no-console": "warn",
      "arrow-body-style": ["error", "as-needed"],

      "no-shadow": "off",
      "@typescript-eslint/no-shadow": ["error"],
      "no-use-before-define": "off",
      "@typescript-eslint/no-use-before-define": ["error"],
      complexity: ["error", 20],
      "no-await-in-loop": "warn",
      "no-eval": "error",
      "no-implied-eval": "error",
      "prefer-promise-reject-errors": "warn",
    },
  },
];
