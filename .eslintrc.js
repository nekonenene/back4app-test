module.exports = {
  env: {
    browser: true,
    es2022: true,
  },
  parserOptions: {
    project: './tsconfig.json',
  },
  extends: [
    'airbnb',
    'airbnb-typescript',
  ],
  rules: { // コンパイルが通るよう、開発中に何度も発生するものはエラーレベルを warn に落としてある
    'max-len': ['warn', { code: 160, ignoreComments: true }],
    'object-curly-newline': 'warn',
    'prefer-const': 'warn',
    '@typescript-eslint/comma-dangle': 'warn',
    '@typescript-eslint/no-unused-vars': 'warn',
  }
};
