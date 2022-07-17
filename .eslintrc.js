module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    sourceType: "module",
    tsconfigRootDir: __dirname,
    project: [
      "./tsconfig.json"
    ],
  },
  plugins: [
    "@typescript-eslint/eslint-plugin",
    "no-loops",
    "no-use-extend-native",
    "promise",
    "@darraghor/nestjs-typed",
  ],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:no-use-extend-native/recommended",
    "plugin:promise/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "plugin:node/recommended",
    "plugin:@darraghor/nestjs-typed/recommended",
  ],
  root: true,
  env: {
    "node": true,
    "jest": true,
    "es2021": true
  },
  ignorePatterns: [
    "test",
    "dist",
    "public",
    "/**/node_modules/*",
    ".eslintrc.js",
  ],
  rules: {
    "@typescript-eslint/indent": ["error", 2, {
      "ignoredNodes": [
        "PropertyDefinition[decorators]",
        "TSUnionType"
      ]
    }],
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/quotes": [
      "error",
      "double",
      {
        "avoidEscape": true,
        "allowTemplateLiterals": true
      }
    ],
    "object-curly-spacing": "off",
    "@typescript-eslint/object-curly-spacing": ["error", "always"],
    "semi": "off",
    "@typescript-eslint/semi": ["error"],
    "@typescript-eslint/consistent-type-definitions": ["error", "type"],
    "node/no-missing-import": [
      "error",
      {
        "allowModules": [],
        "resolvePaths": [
          "./src"
        ],
        "tryExtensions": [
          ".js",
          ".ts",
        ]
      }
    ],
    "node/no-unsupported-features/es-syntax": "off",
    "node/no-process-exit": "error",
    "node/no-path-concat": "error",
    "node/no-new-require": "error",
    "node/no-callback-literal": "error",
    "node/handle-callback-err": "error",
    "no-loops/no-loops": "error",
    "node/no-sync": "error",
    "no-async-promise-executor": "error",
    "no-await-in-loop": "error",
    "no-promise-executor-return": "error",
    "require-atomic-updates": "error",
    "max-nested-callbacks": ["error", 3],
    "no-return-await": "error",
    "prefer-promise-reject-errors": "error",
    "@typescript-eslint/await-thenable": "error",
    "@typescript-eslint/no-floating-promises": "error",
    "@typescript-eslint/no-misused-promises": "error",
    "@typescript-eslint/promise-function-async": "error",
  },
  settings: {
    "import/resolver": {
      "node": {
        "extensions": [
          ".js",
          ".ts",
        ],
        "paths": [
          "src"
        ]
      }
    },
    "import/extensions": [
      ".js",
      ".ts",
    ],
    "import/parsers": {
      "@typescript-eslint/parser": [
        ".js",
        ".ts",
      ]
    }
  },
};
