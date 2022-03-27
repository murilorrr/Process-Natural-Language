module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "prettier"],
  parserOptions: {
    tsconfigRootDit: __dirname,
    project: ["./tsconfig.json", "./src/index"],
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
  ],
};
