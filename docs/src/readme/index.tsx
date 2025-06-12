import React, { TableOfContents } from 'jsx-to-md'
import initI18n from '../i18n'
import Top from './Top'
import Vision from './Vision'
import Feature from './Feature'
import Subscription from './Subscription'
import Principle from './Principle'
import StarHistory from './StarHistory'
import License from './License'
import Sponsors from './Sponsors'
import RelateDoc from './RelateDoc'

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
      <Principle />
      <RelateDoc />
      <StarHistory />
      <License />
    </>
  )
}
