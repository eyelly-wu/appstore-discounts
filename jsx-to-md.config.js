const path = require('path')
const join = path.join
const package = require('./package.json')

const codeNameMap = package.codeNameMap

const readme = {
  entry: 'docs/src/readme',
  out: '',
  name: 'README',
}

const focus = {
  entry: 'docs/src/focus',
  out: 'docs/dist/',
  name: 'FOCUS',
}

const contributionGuidelines = {
  entry: 'docs/src/contribution-guidelines',
  out: 'docs/dist/',
  name: 'CONTRIBUTION_GUIDELINES',
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
  source: [
    ...getSource(readme),
    ...getSource(focus),
    ...getSource(contributionGuidelines),
  ],
}
