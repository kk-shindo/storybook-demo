import { storiesOf } from '@storybook/vue'
import { text, select } from '@storybook/addon-knobs'

import Img1 from '~/components/2_component/07_img/Img1'

storiesOf('2_component/07_img', module)
  .add(
    'img1',
    () => ({
      components: { Img1 },
      template: '<Img1 :src="tempSrc" :html="decodeURIComponent(tempHtml)" :class-name="className" />',
      props: {
        tempSrc: {
          default: text('Src', 'https://placehold.jp/150x150.png')
        },
        tempHtml: {
          default: text('Html', '<p>Dummy Dummy Dummy Dummy Dummy Dummy Dummy Dummy Dummy Dummy Dummy Dummy Dummy Dummy Dummy Dummy Dummy Dummy Dummy Dummy Dummy </p>')
        },
        className: {
          default: select('Class', {
            base: '',
            bg1: 'c-imgtext1--bg1',
            round: 'c-imgtext1--round',
            imgright: 'c-imgtext1--imgright'
          }, '')
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
