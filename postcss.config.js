module.exports = {
  plugins: {
    autoprefixer: {
      overrideBrowserslist: ["Android >= 4.0", "iOS >= 7"],
    },
    "postcss-pxtorem": {
      // 非 375px设计稿
      // rootValue({ file }) {
      //   return file.indexOf('vant') !== -1 ? 37.5 : 75;
      // },
      // 375px设计稿
      rootValue: 37.5,
      propList: ["*"],
    },
  },
};
