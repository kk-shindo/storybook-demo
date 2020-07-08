import { storiesOf } from '@storybook/vue'

import Img1 from '~/components/2_component/07_img/Img1'

storiesOf('2_component/07_img', module)
  .add(
    'img1',
    () => ({
      components: { Img1 },
      template: '<Img1 />'
    }),
    {
      info: {}
    }
  )
