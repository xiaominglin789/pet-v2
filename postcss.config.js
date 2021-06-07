module.exports = {
  plugins: {
    autoprefixer: {
      overrideBrowserslist: ['Android >= 4.0', 'iOS >= 7'],
    },
    'postcss-pxtorem': {
      rootValue({ file }) {
        return file.indexOf('vant') !== -1 ? 37.5 : 75;
      },
      propList: ['*'],
    },
  },
}
