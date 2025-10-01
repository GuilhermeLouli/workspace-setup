import stylistic from "@stylistic/eslint-plugin";

import parser from "@typescript-eslint/parser";
import tsPlugin from "@typescript-eslint/eslint-plugin";

import importPlugin from "eslint-plugin-import";

export default [
    {
        files: ["**/*.{ts,tsx}"],
        languageOptions: {
            parser,
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
            "@typescript-eslint": tsPlugin,
            "@stylistic": stylistic,
        },
        rules: {
            // ---------------------------------------------------------------------
            // 🔹 Import Restrictions (enforce project architecture boundaries)
            // ---------------------------------------------------------------------
            "no-restricted-imports": [
                "error",
                {
                    patterns: [ //This is an example, you should add your own
                        {
                            group: ["src/domain/repositories"], //example
                            message: "Use @repositories instead", //example
                        },
                    ],
                },
            ],

            // ---------------------------------------------------------------------
            // 🔹 Stylistic / Formatting (editor & code style rules)
            // ---------------------------------------------------------------------
            "@stylistic/eol-last": ["error", "always"], // require newline at end of file
            "@stylistic/semi": ["error", "always"], // enforce semicolons
            "@stylistic/indent": ["error", 2], // 2-space indentation
            "@stylistic/quotes": ["error", "double", { avoidEscape: true }], // double quotes
            "@stylistic/comma-dangle": ["error", "always-multiline"], // trailing commas
            "@stylistic/object-curly-spacing": ["error", "always"], // spaces inside { }
            "@stylistic/no-multiple-empty-lines": ["error", { max: 1 }], // max 1 empty line
            "@stylistic/no-trailing-spaces": "error", // no whitespace at line end
            "@stylistic/spaced-comment": ["error", "always"], // space after //
            "@stylistic/block-spacing": ["error", "always"], // space inside {}
            "@stylistic/space-before-function-paren": ["error", "never"], // no space before ()
            "@stylistic/member-delimiter-style": [
                "error",
                {
                    multiline: { delimiter: "semi", requireLast: true },
                    singleline: { delimiter: "semi", requireLast: false },
                },
            ],
            "lines-between-class-members": [
                "error",
                "always",
                { exceptAfterSingleLine: true },
            ],
            "space-infix-ops": "error",
            "no-multi-spaces": ["error"],

            // ---------------------------------------------------------------------
            // 🔹 TypeScript-Specific Rules (type safety & clarity)
            // ---------------------------------------------------------------------
            "@typescript-eslint/consistent-type-definitions": ["error", "type"], // use `type` instead of `interface`
            "@typescript-eslint/explicit-function-return-type": ["error"], // explicit return types
            "@typescript-eslint/prefer-readonly": "error", // readonly properties
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
                { fixToUnknown: true, ignoreRestArgs: false },
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

            // Use ESLint rule for unused vars instead of TS
            "no-unused-vars": "off",
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

            // Shadowing & use-before-define (use TS plugin)
            "no-shadow": "off",
            "@typescript-eslint/no-shadow": ["error"],
            "no-use-before-define": "off",
            "@typescript-eslint/no-use-before-define": ["error"],

            // ---------------------------------------------------------------------
            // 🔹 General JavaScript Best Practices
            // ---------------------------------------------------------------------
            "prefer-const": "error",
            eqeqeq: ["error", "always"],
            "no-console": "warn",
            "arrow-body-style": ["error", "as-needed"],
            complexity: ["error", 20],
            "no-await-in-loop": "warn",
            "no-eval": "error",
            "no-implied-eval": "error",
            "prefer-promise-reject-errors": "warn",

            // ---------------------------------------------------------------------
            // ⚠️ Removed / disabled rules handled by TS compiler
            // ---------------------------------------------------------------------
            // TS already checks:
            // - noFallthroughCasesInSwitch
            // - forceConsistentCasingInFileNames
            // - strict, noImplicitAny, strictNullChecks
            // These are only in tsconfig.json; no need to duplicate in ESLint
        },
    },
];
