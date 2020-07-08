import { storiesOf } from '@storybook/vue'

import Line1 from '~/components/2_component/10_line/Line1'

storiesOf('2_component/10_line', module)
  .add(
    'line1',
    () => ({
      components: { Line1 },
      template: '<Line1 />'
    }),
    {
      info: {}
    }
  )
