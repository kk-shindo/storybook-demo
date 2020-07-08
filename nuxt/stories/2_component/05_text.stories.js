import { storiesOf } from '@storybook/vue'

import Text1 from '~/components/2_component/05_text/Text1'

storiesOf('2_component/05_text', module)
  .add(
    'text1',
    () => ({
      components: { Text1 },
      template: '<Text1 />'
    }),
    {
      info: {}
    }
  )
