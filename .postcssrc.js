// https://github.com/michael-ciniawsky/postcss-load-config
module.exports = {
  "plugins": {
    // to edit target browsers: use "browserslist" field in package.json
    "postcss-import": {},
    "autoprefixer": {
      browsers: ['iOS >= 7', 'Android >= 4.0', 'ie >= 9', "Firefox >= 20"]
    }
  }
}
