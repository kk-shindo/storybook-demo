import { storiesOf } from '@storybook/vue'

import Form1 from '~/components/2_component/04_form/Form1'

storiesOf('2_component/04_form', module)
  .add(
    'form1',
    () => ({
      components: { Form1 },
      template: '<Form1 />'
    }),
    {
      info: {}
    }
  )
