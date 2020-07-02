import { storiesOf } from '@storybook/vue'

import Breadcrumb from '../components/1_layout/Breadcrumb'
import Content from '../components/1_layout/Content'
import Footer from '../components/1_layout/Footer'
import Header from '../components/1_layout/Header'
import Main from '../components/1_layout/Main'
import Side from '../components/1_layout/Side'

storiesOf('1_Layout', module)
.add('breadcrumb', () => ({
  components: { Breadcrumb },
  template: `<Breadcrumb />`
}))
.add('content', () => ({
  components: { Content },
  template: `<Content />`
}))
.add('footer', () => ({
  components: { Footer },
  template: `<Footer />`
}))
.add('header', () => ({
  components: { Header },
  template: `<Header />`
}))
.add('main', () => ({
  components: { Main },
  template: `<Main />`
}))
.add('aside', () => ({
  components: { Side },
  template: `<Side />`
}))
