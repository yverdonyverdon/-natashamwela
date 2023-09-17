module.exports = {
  // ...other ESLint configuration...
  extends: ['next'],
},
  extends: ["plugin:react/recommended", "standard", "prettier"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "simple-import-sort", "import", "unused-imports"],
  rules: {
    "react/prop-types": "off", // js 사용시 missing in props validation 에러 제거
    "simple-import-sort/imports": "error", // importのsortルールを設定
    "simple-import-sort/exports": "error", // exportのsortルールを設定
    "import/first": "error", // すべてのimportがファイルの先頭にあることを確認
    "import/newline-after-import": "error", // import後に改行があることを確認
    "import/no-duplicates": "error", // 同じファイルのimportをマージ
    "unused-imports/no-unused-imports": "error", // 未使用のimport文を削除
    camelcase: "off", // camelcase 에러 무시
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};

