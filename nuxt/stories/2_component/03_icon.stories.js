import { storiesOf } from '@storybook/vue'

import Icon1 from '~/components/2_component/03_icon/Icon1'

storiesOf('2_component/03_icon', module)
  .add(
    'icon1',
    () => ({
      components: { Icon1 },
      template: '<Icon1 />'
    }),
    {
      info: {}
    }
  )
