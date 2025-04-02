module.exports = {
  extends: [
    'eslint:recommended',
    'standard',
    'plugin:@typescript-eslint/recommended'
  ],
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint'
  ],
  rules: {
    semi: ['error', 'always'], // 强制使用分号
    quotes: ['error', 'single'], // 强制使用单引号
    'no-unused-vars': ['warn', { vars: 'all', args: 'after-used', ignoreRestSiblings: false }], // 不允许未使用的变量
    eqeqeq: ['error', 'always'], // 强制使用全等
    'no-trailing-spaces': 'error', // 不允许有尾随空格
    indent: ['error', 2], // 强制使用2个空格的缩进
    'brace-style': ['error', '1tbs', { allowSingleLine: true }], // 强制使用一种大括号风格
    curly: ['error', 'all'] // 强制所有控制语句使用一致的大括号风格
  },
  ignorePatterns: [
    'node_modules/',
    'dist/',
    'build/',
    '.pnpm-store/',
    '*.min.js'
  ]
};
