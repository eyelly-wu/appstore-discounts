import React, { TableOfContents } from 'jsx-to-md'
import initI18n from '../i18n'
import Top from './Top'
import Vision from './Vision'
import Feature from './Feature'
import Subscription from './Subscription'
import Focus from './Focus'
import Principle from './Principle'
import Contribution from './Contribution'
import StarHistory from './StarHistory'
import License from './License'

export default function Doc(props) {
  initI18n(props.locale)

  // const Top = require('./Top').default
  // const Vision = require('./Vision').default
  // const Feature = require('./Feature').default
  // const Principle = require('./Principle').default
  // const License = require('./License').default
  // const Subscription = require('./Subscription').default
  // const Focus = require('./Focus').default
  // const StarHistory = require('./StarHistory').default
  // const Contribution = require('./Contribution').default

  return (
    <>
      <Top />
      <TableOfContents text={t('目录')} open={false} />
      <Vision />
      <Feature />
      <Subscription />
      <Focus />
      <Principle />
      <Contribution />
      <StarHistory />
      <License />
    </>
  )
}
