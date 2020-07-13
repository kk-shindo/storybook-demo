import { storiesOf } from '@storybook/vue'
import { select } from '@storybook/addon-knobs'

import List1 from '~/components/2_component/08_list/List1'
import List2 from '~/components/2_component/08_list/List2'
import List3 from '~/components/2_component/08_list/List3'
import List4 from '~/components/2_component/08_list/List4'
import List5 from '~/components/2_component/08_list/List5'

storiesOf('2_component/08_list', module)
  .add(
    'list1',
    () => ({
      components: { List1 },
      template: '<List1 :list-items="(!className ? baseItems : col3Items)" :className="className" />',
      props: {
        className: {
          default: select('ColLength', {
            base: '',
            3: 'c-list1--col3'
          }, '')
        }
      },
      data () {
        return {
          baseItems: [
            {
              main: {
                src: 'https://placehold.jp/185x180.png',
                alt: 'Dummy'
              },
              thumb: {
                src: 'https://placehold.jp/50x50.png',
                alt: 'Dummy'
              },
              title: 'title title',
              text: 'Dummy Dummy Dummy'
            },
            {
              main: {
                src: 'https://placehold.jp/185x180.png',
                alt: 'Dummy'
              },
              thumb: {
                src: 'https://placehold.jp/50x50.png',
                alt: 'Dummy'
              },
              title: 'title title',
              text: 'Dummy Dummy Dummy'
            },
            {
              main: {
                src: 'https://placehold.jp/185x180.png',
                alt: 'Dummy'
              },
              thumb: {
                src: 'https://placehold.jp/50x50.png',
                alt: 'Dummy'
              },
              title: 'title title',
              text: 'Dummy Dummy Dummy'
            },
            {
              main: {
                src: 'https://placehold.jp/185x180.png',
                alt: 'Dummy'
              },
              thumb: {
                src: 'https://placehold.jp/50x50.png',
                alt: 'Dummy'
              },
              title: 'title title',
              text: 'Dummy Dummy Dummy'
            }
          ],
          col3Items: [
            {
              main: {
                src: 'https://placehold.jp/253x180.png',
                alt: 'Dummy'
              },
              thumb: {
                src: 'https://placehold.jp/50x50.png',
                alt: 'Dummy'
              },
              title: 'title title',
              text: 'Dummy Dummy Dummy'
            },
            {
              main: {
                src: 'https://placehold.jp/253x180.png',
                alt: 'Dummy'
              },
              thumb: {
                src: 'https://placehold.jp/50x50.png',
                alt: 'Dummy'
              },
              alt: 'Dummy',
              title: 'title title',
              text: 'Dummy Dummy Dummy'
            },
            {
              main: {
                src: 'https://placehold.jp/253x180.png',
                alt: 'Dummy'
              },
              thumb: {
                src: 'https://placehold.jp/50x50.png',
                alt: 'Dummy'
              },
              alt: 'Dummy',
              title: 'title title',
              text: 'Dummy Dummy Dummy'
            },
            {
              main: {
                src: 'https://placehold.jp/253x180.png',
                alt: 'Dummy'
              },
              thumb: {
                src: 'https://placehold.jp/50x50.png',
                alt: 'Dummy'
              },
              alt: 'Dummy',
              title: 'title title',
              text: 'Dummy Dummy Dummy'
            },
            {
              main: {
                src: 'https://placehold.jp/253x180.png',
                alt: 'Dummy'
              },
              thumb: {
                src: 'https://placehold.jp/50x50.png',
                alt: 'Dummy'
              },
              alt: 'Dummy',
              title: 'title title',
              text: 'Dummy Dummy Dummy'
            },
            {
              main: {
                src: 'https://placehold.jp/253x180.png',
                alt: 'Dummy'
              },
              thumb: {
                src: 'https://placehold.jp/50x50.png',
                alt: 'Dummy'
              },
              alt: 'Dummy',
              title: 'title title',
              text: 'Dummy Dummy Dummy'
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
      template: '<List2 :list-items="listItems" />',
      data () {
        return {
          listItems: [
            {
              href: '/component/',
              text: 'component'
            },
            {
              href: '/top/',
              text: 'top'
            },
            {
              href: '/company/',
              text: 'company'
            },
            {
              href: '/service/',
              text: 'service'
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
    'list3',
    () => ({
      components: { List3 },
      template: '<List3 :list-items="listItems" />',
      data () {
        return {
          listItems: [
            {
              text: 'texttexttext'
            },
            {
              text: 'texttexttext'
            },
            {
              text: 'texttexttext'
            },
            {
              text: 'texttexttext'
            },
            {
              text: 'texttexttexttexttexttext<br>texttexttexttexttexttext'
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
    'list4',
    () => ({
      components: { List4 },
      template: '<List4 :list-items="listItems" />',
      data () {
        return {
          listItems: [
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
          ]
        }
      }
    }),
    {
      info: {}
    }
  )
  .add(
    'list5',
    () => ({
      components: { List5 },
      template: '<List5 :list-items="listItems" />',
      data () {
        return {
          listItems: [
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
