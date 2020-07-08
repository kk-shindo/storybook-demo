import { storiesOf } from '@storybook/vue'
import { select } from '@storybook/addon-knobs'

import Breadcrumb from '~/components/1_layout/Breadcrumb'

storiesOf('1_layout/breadcrumb', module)
  .add('breadcrumb', () => ({
    components: { Breadcrumb },
    template: `
      <Breadcrumb
        :pc-only="true"
        :list-items="listItems"
        :class-name="tempClassName"
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
    },
    props: {
      tempClassName: {
        default: select('Border', {
          base: '',
          top: 'c-breadcrumb1--topline',
          bottom: 'c-breadcrumb1--bottomline'
        }, '')
      }
    }
  }),
  {
    info: {}
  })
