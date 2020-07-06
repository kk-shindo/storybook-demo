import { storiesOf } from '@storybook/vue'
import { text } from '@storybook/addon-knobs'

import Breadcrumb from '../components/1_layout/Breadcrumb'
import Content from '../components/1_layout/Content'
import Footer from '../components/1_layout/Footer'
import FooterSitemap from '../components/1_layout/FooterSitemap'
import FooterSitemapBlock from '../components/1_layout/FooterSitemapBlock'
import FooterCopy from '../components/1_layout/FooterCopy'
import Header from '../components/1_layout/Header'
import Main from '../components/1_layout/Main'
import Side from '../components/1_layout/Side'

storiesOf('1_Layout', module)
.add('breadcrumb', () => ({
  components: { Breadcrumb },
  template: `
    <Breadcrumb 
      :pc-only="true"
      :list-items="listItems"
    />
  `,
  data () {
    return {
      listItems:
      [
        {
          href: '/',
          text: 'HOME'
        },
        {
          href: '/',
          text: 'タイトル'
        },
        {
          href: '/',
          text: 'タイトル'
        },
        {
          href: '',
          text: 'タイトル'
        }
      ]
    }
  }
}))
.add('content', () => ({
  components: { Content },
  template: `<Content />`
}))
.add('footer', () => ({
  components: { Footer },
  template: `<Footer />`
}))
.add('footerSitemap', () => ({
  components: { FooterSitemap },
  template: `<FooterSitemap />`
}))
.add('footerSitemapBlock', () => ({
  components: { FooterSitemapBlock },
  template: `<FooterSitemapBlock :title="blockData.title" :list-items="blockData.listItems" />`,
  data () {
    return {
      blockData: {
        title: 'Category1',
        listItems: [
          {
            href: '#',
            text: 'LinkLinkLinkLinkLink'
          },
          {
            href: '#',
            text: 'LinkLinkLinkLinkLink'
          },
          {
            href: '#',
            text: 'LinkLinkLinkLinkLink'
          },
          {
            href: '#',
            text: 'LinkLinkLinkLinkLink'
          }
        ]
      }
    }
  }
}))
.add('footerCopy', () => ({
  components: { FooterCopy },
  template: `<FooterCopy>{{ tempText }}</FooterCopy>`,
  props: {
    tempText: {
      default: text('Text', 'copyright xxxxxxxx 2018')
    }
  }
}))
.add('header', () => ({
  components: { Header },
  template: `<Header />`
}))
.add('main', () => ({
  components: { Main },
  template: `<Main />`
}))
.add('side', () => ({
  components: { Side },
  template: `<Side />`
}))
