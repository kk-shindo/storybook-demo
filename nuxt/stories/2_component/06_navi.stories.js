import { storiesOf } from '@storybook/vue'

import Navi1 from '~/components/2_component/06_navi/Navi1'

storiesOf('2_component/06_navi', module)
  .add(
    'navi1',
    () => ({
      components: { Navi1 },
      template: '<Navi1 />'
    }),
    {
      info: {}
    }
  )
