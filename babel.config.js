module.exports = {
  plugins: [
    '@babel/transform-runtime',
  ],
  presets: [
    ['@babel/env', { modules: false }],
    '@babel/react',
    '@babel/typescript',
  ],
};
