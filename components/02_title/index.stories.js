import { withKnobs, text, select } from '@storybook/addon-knobs'
import copyCodeBlock from '@pickra/copy-code-block'

import HTML_C_Title3 from './c-title3.html'
import HTML_C_Title4 from './c-title4.html'

import README from './README.md' 

export default {
  title: '02_Title',
  decorators: [withKnobs],
  parameters: {
    notes: { README }
  }
}

/* knobsで変更するパターン */
export const C_Title1 = () => {
  const tempText = text('Text', 'DummyDummy')
  const tempColor = select('Color', {
    base: '',
    color1: 'c-title1--color1',
    color2: 'c-title1--color2',
    textColor1: 'c-title1--textcolor1',
    textColor2: 'c-title1--textcolor2',
  }, '')
  const template = (`
    <div class="c-title1 ${tempColor}">
      <h1>${tempText}</h1>
    </div>
  `)
  return (template + copyCodeBlock(template))
}

/* knobsで変更するパターン */
export const C_Title2 = () => {
  const tempText = text('Text', 'DummyDummy')
  const tempColor = select('Color', {
    base: '',
    color1: 'c-title2--color1'
  }, '')
  const template = (`
    <div class="c-title2 ${tempColor}">
      <h1>${tempText}</h1>
    </div>
  `)
  return (template + copyCodeBlock(template))
}

/* htmlファイルから読み込むパターン */
export const C_Title3 = () => {
  const template = HTML_C_Title3
  return (template + copyCodeBlock(template))
}

/* htmlファイルから読み込むパターン */
export const C_Title4 = () => {
  const template = HTML_C_Title4
  return (template + copyCodeBlock(template))
}