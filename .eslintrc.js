module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: [
    "airbnb-base",
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:functional/external-recommended",
    "plugin:functional/recommended",
    "plugin:prettier/recommended"
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
    project: "./tsconfig.json"
  },
  plugins: ["prettier", "@typescript-eslint", "functional", "immutable"],
  rules: {
    "immutable/no-mutation": 2,
    quotes: [2, "double", { avoidEscape: true }],
    "comma-dangle": ["error", "never"],
    "prettier/prettier": "error"
  }
};
