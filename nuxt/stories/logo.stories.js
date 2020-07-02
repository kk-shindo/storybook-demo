import { storiesOf } from '@storybook/vue'

import Logo from '../components/Logo.vue'

storiesOf('Logo', module)
.add('logo', () => ({
  components: { Logo },
  template: `<Logo />`
}))