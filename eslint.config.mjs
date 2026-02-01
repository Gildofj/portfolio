import js from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import prettierPlugin from "eslint-plugin-prettier";
import importPlugin from "eslint-plugin-import-x";
import globals from "globals";

export default [
  {
    ignores: ["**/node_modules/**", "**/dist/**", "**/.next/**", "**/build/**"],
  },
  {
    files: ["**/*.js", "**/*.jsx", "**/*.ts", "**/*.tsx"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      "@typescript-eslint": tseslint,
      react: reactPlugin,
      "react-hooks": reactHooksPlugin,
      prettier: prettierPlugin,
      "import-x": importPlugin,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...tseslint.configs.recommended.rules,
      ...reactPlugin.configs.recommended.rules,

      // Regras personalizadas
      "react/react-in-jsx-scope": "off",
      "no-console": "warn",
      "prettier/prettier": "error",
      "prefer-const": "warn",
      "linebreak-style": ["error", "unix"],
      quotes: ["error", "double"],
      semi: ["error", "always"],
      "react/prop-types": "off",
      "space-before-function-paren": "off",

      // import-x
      "import-x/order": [
        "warn",
        {
          "newlines-between": "always", // usar kebab-case
          groups: [
            "builtin", // Node.js built-in modules (fs, path)
            "external", // Pacotes externos (react, lodash)
            "internal", // Código interno do projeto (se configurado)
            "parent", // Imports de pasta pai (../)
            "sibling", // Imports da mesma pasta (./sibling)
            "index", // Import da própria pasta (./)
          ],
          pathGroups: [
            {
              pattern: "@**/",
              group: "internal",
              position: "before",
            },
          ],
          alphabetize: {
            order: "asc",
            caseInsensitive: true,
            orderImportKind: "ignore",
          },
          distinctGroup: true,
          sortTypesGroup: false,
          named: false,
          warnOnUnassignedImports: false,
        },
      ],
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
];
