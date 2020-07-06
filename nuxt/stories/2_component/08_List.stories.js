import { storiesOf } from '@storybook/vue'

import List1 from '../../components/2_component/08_list/List1'
import List2 from '../../components/2_component/08_list/List2'

storiesOf('2_component/08_list', module)
.add(
  'list1',
  () => ({
    components: { List1 },
    template: `<List1 :list-items="listItems" />`,
    data () {
      return {
        listItems: [
          {
            img: 'https://placehold.jp/185x180.png',
            thumb: 'https://placehold.jp/50x50.png',
            title: 'titletitle',
            text: 'Dummy Dummy Dummy',
          },
          {
            img: 'https://placehold.jp/185x180.png',
            thumb: 'https://placehold.jp/50x50.png',
            title: 'titletitle',
            text: 'Dummy Dummy Dummy',
          },
          {
            img: 'https://placehold.jp/185x180.png',
            thumb: 'https://placehold.jp/50x50.png',
            title: 'titletitle',
            text: 'Dummy Dummy Dummy',
          },
          {
            img: 'https://placehold.jp/185x180.png',
            thumb: 'https://placehold.jp/50x50.png',
            title: 'titletitle',
            text: 'Dummy Dummy Dummy',
          }
        ]
      }
    }
  }),
  {
    info: {}
  }
)
.add(
  'list2',
  () => ({
    components: { List2 },
    template: `<List2 :list-items="listItems" />`,
    data () {
      return {
        listItems: [
          {
            name: 'component',
            href: '/component/'
          },
          {
            name: 'top',
            href: '/top/'
          },
          {
            name: 'company',
            href: '/company/'
          },
          {
            name: 'service',
            href: '/service/'
          }
        ]
      }
    }
  }),
  {
    info: {}
  }
)