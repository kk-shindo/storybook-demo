import { storiesOf } from '@storybook/vue'

import Video1 from '~/components/2_component/11_video/Video1'

storiesOf('2_component/11_video', module)
  .add(
    'video1',
    () => ({
      components: { Video1 },
      template: '<Video1 />'
    }),
    {
      info: {}
    }
  )
