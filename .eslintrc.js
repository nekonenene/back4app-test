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
  rules: {
    'object-curly-newline': 'warn',
    '@typescript-eslint/comma-dangle': 'warn',
    '@typescript-eslint/no-unused-vars': 'warn',
  }
};
