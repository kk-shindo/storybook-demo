import { storiesOf } from '@storybook/vue'

import Content from '~/components/1_layout/Content'
import Main from '~/components/1_layout/Main'

storiesOf('1_layout/layout', module)
  .add('content', () => ({
    components: { Content },
    template: '<Content />'
  }),
  {
    info: {}
  })
  .add('main', () => ({
    components: { Main },
    template: '<Main />'
  }),
  {
    info: {}
  })
