/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  'env': {
    'browser': true,
    'es6': true,
    'node': true
  },
  'extends': [
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  'rules': {
    'no-plusplus': 'off',
    'eol-last': 'off',
    'max-len': 'off',
    'quotes': ['error', 'single'],
    'semi': ['error', 'always'],
    'no-alert': 'off',
    'linebreak-style': 'off',
    'radix': 'off',
    'eqeqeq': ['error', 'always'],
    'import/no-extraneous-dependencies': 'off',
    'no-extra-boolean-cast': 'off',
    'no-param-reassign': 'off',
    'no-shadow': 'off',
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'vue/multi-word-component-names': 'off',
    'import/prefer-default-export': 'off',
    'no-restricted-globals': 'off',
    'vue/first-attribute-linebreak': 'off',
    'vue/component-name-in-template-casing': ['error', 'kebab-case'],
  },
  parserOptions: {
    ecmaVersion: 'latest'
  }
};
