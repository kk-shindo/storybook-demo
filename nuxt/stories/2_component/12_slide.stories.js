import { storiesOf } from '@storybook/vue'

import Slide1 from '~/components/2_component/12_slide/Slide1'

storiesOf('2_component/12_slide', module)
  .add(
    'slide1',
    () => ({
      components: { Slide1 },
      template: '<Slide1 />'
    }),
    {
      info: {}
    }
  )
