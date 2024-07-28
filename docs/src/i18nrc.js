const { join } = require('path')

module.exports = {
  funcName: 't',
  input: ['**/appinfo.config.ts', 'docs/src/**/*.{ts,tsx}'],
  output: {
    path: join(__dirname, 'i18n'),
  },
  translator: 'googlex',
  googlexConfig: {
    from: 'zh-CN',
    to: ['en'],
    proxy: 'http://127.0.0.1:7997',
  },
}
