import { storiesOf } from '@storybook/vue'

import Other1 from '~/components/2_component/99_other/Other1'

storiesOf('2_component/99_other', module)
  .add(
    'other1',
    () => ({
      components: { Other1 },
      template: '<Other1 />'
    }),
    {
      info: {}
    }
  )
