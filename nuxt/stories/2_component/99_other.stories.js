import { storiesOf } from '@storybook/vue'
import { text, select } from '@storybook/addon-knobs'

import Other1 from '~/components/2_component/99_other/Other1'
import Message1 from '~/components/2_component/99_other/Message1'

storiesOf('2_component/99_other', module)
  .add(
    'message1',
    () => ({
      components: { Message1 },
      template: '<Message1 :class-name="className" v-html="tempHtml" />',
      props: {
        className: {
          default: select('Class', {
            base: '',
            color1: 'c-message1--color1'
          }, '')
        },
        tempHtml: {
          default: text('Html', '<p>MessageMessageMessageMessageMessageMessage</p>')
        }
      }
    }),
    {
      info: {},
      knobs: {
        escapeHTML: false
      }
    }
  )
  .add(
    'other1',
    () => ({
      components: { Other1 },
      template: '<Other1 />'
    }),
    {
      info: {}
    }
  )
