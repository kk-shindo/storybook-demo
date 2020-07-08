import { storiesOf } from '@storybook/vue'

import Navi1 from '~/components/2_component/06_navi/Navi1'

storiesOf('2_component/06_navi', module)
  .add(
    'navi1',
    () => ({
      components: { Navi1 },
      template: '<Navi1 :list-items="listItems" />',
      data () {
        return {
          listItems: [
            {
              href: '#',
              text: 'LocalNavi1'
            },
            {
              href: '#',
              text: 'LocalNavi2'
            },
            {
              href: '#',
              text: 'LocalNavi3'
            },
            {
              href: '#',
              text: 'LocalNavi4'
            }
          ]
        }
      }
    }),
    {
      info: {}
    }
  )
