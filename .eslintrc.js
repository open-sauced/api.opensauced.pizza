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
    "promise"
  ],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:no-use-extend-native/recommended",
    "plugin:promise/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "plugin:node/recommended",
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
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/no-unused-vars": "error",
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
    "no-loops/no-loops": "error"
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
