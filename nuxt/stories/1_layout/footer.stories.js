import { storiesOf } from '@storybook/vue'
import { text } from '@storybook/addon-knobs'

import Footer from '~/components/1_layout/Footer'
import FooterSitemap from '~/components/1_layout/FooterSitemap'
import FooterSitemapBlock from '~/components/1_layout/FooterSitemapBlock'
import FooterCopy from '~/components/1_layout/FooterCopy'

storiesOf('1_layout/footer', module)
  .add('footer', () => ({
    components: { Footer },
    template: '<Footer />'
  }),
  {
    info: {}
  })
  .add('footerSitemap', () => ({
    components: { FooterSitemap },
    template: '<FooterSitemap />'
  }),
  {
    info: {}
  })
  .add('footerSitemapBlock', () => ({
    components: { FooterSitemapBlock },
    template: '<FooterSitemapBlock :title="blockData.title" :list-items="blockData.listItems" />',
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
  }),
  {
    info: {}
  })
  .add('footerCopy', () => ({
    components: { FooterCopy },
    template: '<FooterCopy>{{ tempText }}</FooterCopy>',
    props: {
      tempText: {
        default: text('Text', 'copyright xxxxxxxx 2018')
      }
    }
  }),
  {
    info: {}
  })
