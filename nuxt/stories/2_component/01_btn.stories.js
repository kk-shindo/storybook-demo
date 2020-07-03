import { storiesOf } from '@storybook/vue'
import { text, select, number } from '@storybook/addon-knobs'
import copyCodeBlock from '@pickra/copy-code-block'

import Btn1 from '../../components/2_component/01_btn/Btn1'
import Btn1Layout from '../../components/2_component/01_btn/Btn1Layout'

storiesOf('01_btn', module)
.add('btn1', () => ({
  components: { Btn1 },
  template: `<Btn1 :class="tempClass">{{ tempText }}</Btn1>`,
  props: {
    tempText: {
      default: text('text', 'DummyDummyDummy')
    },
    tempClass: {
      default: select('Color', {
        base: '',
        color1: 'c-btn1--color1',
        color2: 'c-btn1--color2',
      }, '')
    }
  }
}))
.add('btn1Layout', () => ({
  components: { Btn1Layout, Btn1 },
  template: `
    <Btn1Layout :class="tempClass">
      <Btn1 :class="''">DummyDummyDummy</Btn1>
    </Btn1Layout>
  `,
  props: {
    tempClass: {
      default: select('Layout', {
        base: '',
        center: 'l-btn1--center',
        right: 'l-btn1--right',
      }, '')
    }
  }
}))
