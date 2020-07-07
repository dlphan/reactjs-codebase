module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: [
    'plugin:react/recommended',
    'eslint:recommended',
    'standard',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  // parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module',
    allowImportExportEverywhere: true
  },
  plugins: [
    'react',
    'react-hooks',
  ],
  rules: {
    'react/prop-types': 0,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'eol-last': 0,
    'jsx-quotes': ['error', 'prefer-single'],
    "quotes": [
      2,
      "single"
    ]
  }
}
