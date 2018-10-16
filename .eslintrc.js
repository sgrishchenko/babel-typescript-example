module.exports = {
  env: {
    browser: true,
    jest: true,
  },
  extends: 'airbnb',
  parser: 'babel-eslint',
  rules: {
    'react/jsx-filename-extension': [
      'error',
      { extensions: ['.tsx'] },
    ],
    'import/no-extraneous-dependencies': [
      'error',
      { devDependencies: ['**/*.test.{ts,tsx}', 'src/setupTests.ts'] },
    ],
  },
  settings: {
    'import/resolver': 'webpack',
  },
};
