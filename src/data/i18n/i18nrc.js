const { join } = require('path')

module.exports = {
  funcName: 't',
  entry: join(__dirname, '../'),
  fileRegExp: /\.[jt]sx?$/,
  output: {
    path: __dirname,
  },
  translator: 'googlex',
  googlexConfig: {
    from: 'zh-CN',
    to: ['en'],
    proxy: 'http://127.0.0.1:7997',
  },
}
