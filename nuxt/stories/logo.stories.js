import { storiesOf } from '@storybook/vue'

import Logo from '../components/Logo.vue'

storiesOf('MyButton', module)
.add('logo', () => ({
  components: { Logo },
  template: `<Logo />`
}))