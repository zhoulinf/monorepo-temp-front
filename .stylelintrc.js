module.exports = {
  extends: [
    'stylelint-config-standard', // 配置stylelint拓展插件
    'stylelint-config-standard-scss', // 配置stylelint scss插件
  ],
  overrides: [
    {
      files: ['**/*.(scss|css|vue|html)'],
      customSyntax: 'postcss-scss'
    },
  ],
  ignoreFiles: [
    '**/*.js',
    '**/*.jsx',
    '**/*.tsx',
    '**/*.ts',
    '**/*.json',
    '**/*.md',
    '**/*.yaml'
  ],
  rules: {
    'selector-pseudo-element-no-unknown': [
      true,
      {
        ignorePseudoElements: ['v-deep']
      }
    ],
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global', 'export', 'deep']
      }
    ],
    'unit-no-unknown': [
      true,
      {
        ignoreUnits: ['rpx'] // uniapp需要配置
      }
    ],
    'font-family-no-missing-generic-family-keyword': null,
    'value-keyword-case': null, // 在css中使用 v-bind，不报错
    'no-descending-specificity': null, // 关闭禁止在具有较高优先级的选择器后出现被其覆盖的较低优先级的选择器
    'selector-class-pattern': null, // 关闭强制选择器类名的格式
    'property-no-unknown': null, // 禁止未知的属性(true 为不允许)
    'value-no-vendor-prefix': null, // 允许属性值前缀 --webkit-box
    'property-no-vendor-prefix': null, // 允许属性前缀 -webkit-mask
    'scss/dollar-variable-pattern': null,
    'scss/at-mixin-pattern': null,
    'color-function-notation': null,
    'alpha-value-notation': null
  }
};
