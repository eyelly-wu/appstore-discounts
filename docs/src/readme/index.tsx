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
import Sponsors from './Sponsors'

export default function Doc(props) {
  initI18n(props.locale)

  return (
    <>
      <Top />
      <TableOfContents text={t('目录')} open={false} />
      <Vision />
      <Feature />
      <Sponsors />
      <Subscription />
      <Focus />
      <Principle />
      <Contribution />
      <StarHistory />
      <License />
    </>
  )
}
