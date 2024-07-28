const path = require('path')
const join = path.join
const package = require('./package.json')

const codeNameMap = package.codeNameMap

const readme = {
  entry: 'docs/src/readme',
  out: '',
  name: 'README',
}

function getSource({ entry, out, name }) {
  const source = Object.entries(codeNameMap).reduce(
    (res, [locale, langName]) => {
      res.push({
        entry: join(__dirname, entry),
        output: join(
          __dirname,
          out,
          `${name}${langName ? `_${langName}` : ''}.md`,
        ),
        params: {
          locale,
        },
      })

      return res
    },
    [],
  )

  return source
}

module.exports = {
  source: [...getSource(readme)],
}
