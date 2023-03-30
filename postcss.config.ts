// @ts-ignore
module.exports = {
  syntax: 'postcss-scss',
  parser: 'postcss-scss',
  plugins: [
    require('postcss-easy-import')({
      extensions: ['.pcss', '.postcss'],
    }),
    require('autoprefixer')({
      cascade: false,
    }),
    require('postcss-mixins'),
    require('postcss-simple-vars'),
    require('postcss-each'),
    require('postcss-nested'),
    require('postcss-inline-svg')({
      removeFill: true,
      paths: ['./src/images/icons'],
    }),
    require('cssnano'),
    require('postcss-pxtorem')({
      rootValue: 16,
      propList: ['*', '!*border*'],
      selectorBlackList: [/^html$/],
    }),
  ],
};
