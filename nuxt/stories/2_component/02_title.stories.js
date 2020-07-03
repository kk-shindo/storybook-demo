import { storiesOf } from '@storybook/vue'
import { text, select } from '@storybook/addon-knobs'
import copyCodeBlock from '@pickra/copy-code-block'

import Title1 from '../../components/2_component/02_title/Title1'
import Title2 from '../../components/2_component/02_title/Title2'
import Title3 from '../../components/2_component/02_title/Title3'
import Title4 from '../../components/2_component/02_title/Title4'

storiesOf('02_title', module)
.add('title1', () => ({
  components: { Title1 },
  template: `<Title1 :class="tempClass">{{tempText}}</Title1>`,
  props: {
    tempText: {
      default: text('text', 'DummyDummyDummy')
    },
    tempClass: {
      default: select('Color', {
        base: '',
        color1: 'c-title1--color1',
        color2: 'c-title1--color2',
        textColor1: 'c-title1--textcolor1',
        textColor2: 'c-title1--textcolor2',
      }, '')
    }
  }
}))
.add('title2', () => ({
  components: { Title2 },
  template: `<Title2>{{tempText}}</Title2>`,
  props: {
    tempText: {
      default: text('text', 'DummyDummyDummy')
    }
  }
}))
.add('title3', () => ({
  components: { Title3 },
  template: `<Title3>{{tempText}}</Title3>`,
  props: {
    tempText: {
      default: text('text', 'DummyDummyDummy')
    }
  }
}))
.add('title4', () => ({
  components: { Title4 },
  template: `<Title4 :subTitle="subText">{{tempText}}</Title4>`,
  props: {
    tempText: {
      default: text('text', 'DummyDummyDummy')
    },
    subText: {
      default: text('subText', 'SubTitleSubTitle')
    }
  }
}))
