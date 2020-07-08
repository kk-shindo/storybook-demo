import { storiesOf } from '@storybook/vue'

import Table1 from '~/components/2_component/09_table/Table1'

storiesOf('2_component/09_table', module)
  .add(
    'table1',
    () => ({
      components: { Table1 },
      template: '<Table1 />'
    }),
    {
      info: {}
    }
  )
