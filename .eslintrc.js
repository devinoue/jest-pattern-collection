module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "standard-with-typescript",
    "plugin:prettier/recommended"
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
    project: "./tsconfig.json"
  },
  rules: {
    "no-var": "error",
    "prettier/prettier": [
      "error",
      {
        trailingComma: "all",
        endOfLine: "lf",
        semi: false,
        singleQuote: true,
        printWidth: 80,
        tabWidth: 2
      }
    ]
  }
}