import { storiesOf } from '@storybook/vue'
import { select } from '@storybook/addon-knobs'

import Side from '~/components/1_layout/Side'
import SideFrame from '~/components/1_layout/SideFrame'
import List4 from '~/components/2_component/08_list/List4'
import List5 from '~/components/2_component/08_list/List5'

storiesOf('1_layout/side', module)
  .add(
    'side',
    () => ({
      components: { Side },
      template: '<Side />'
    }),
    {
      info: {}
    }
  )
  .add(
    'sideFrame',
    () => ({
      components: {
        SideFrame,
        List4,
        List5
      },
      template: `
        <SideFrame :title="tempPattern">
          <List4 v-if="tempPattern === 'Link'" :list-items="linkItems" />
          <List5 v-if="tempPattern === 'Banner'" :list-items="bannerItems" />
        </SideFrame>
      `,
      props: {
        tempPattern: {
          default: select('Pattern', {
            Link: 'Link',
            Banner: 'Banner'
          }, 'Link')
        }
      },
      data () {
        return {
          linkItems: [
            {
              href: '#',
              text: 'link'
            },
            {
              href: '#',
              text: 'link'
            },
            {
              href: '#',
              text: 'link'
            },
            {
              href: '#',
              text: 'link'
            }
          ],
          bannerItems: [
            {
              href: '#',
              src: 'https://placehold.jp/200x60.png'
            },
            {
              href: '#',
              src: 'https://placehold.jp/200x60.png'
            },
            {
              href: '#',
              src: 'https://placehold.jp/200x60.png'
            },
            {
              href: '#',
              src: 'https://placehold.jp/200x60.png'
            }
          ]
        }
      }
    }),
    {
      info: {}
    }
  )
