import { withKnobs } from '@storybook/addon-knobs'
import copyCodeBlock from '@pickra/copy-code-block'

import README from './01_btn.md' 

export default {
  title: '01_Button',
  decorators: [withKnobs],
  parameters: {
    notes: { README }
  }
}

export const C_Button1 = () => {
  const template = (`
    <div class="c-btn1">
      <a href="">DummyDummy</a>
    </div>
  `)
  return (template + copyCodeBlock(template))
}

export const C_Button1_Color1 = () => {
  const template = (`
    <div class="c-btn1 c-btn1--color1">
      <a href="">DummyDummy</a>
    </div>
  `)
  return (template + copyCodeBlock(template))
}

export const C_Button1_Color2 = () => {
  const template = (`
    <div class="c-btn1 c-btn1--color2">
      <a href="">DummyDummy</a>
    </div>
  `)
  return (template + copyCodeBlock(template))
}

export const L_Button1_Center = () => {
  const template = (`
    <div class="l-btn1 l-btn1--center">
      <div class="c-btn1">
        <a href="">DummyDummy</a>
      </div>
    </div>
  `)
  return (template + copyCodeBlock(template))
}

export const L_Button1_Right = () => {
  const template = (`
    <div class="l-btn1 l-btn1--right">
      <div class="c-btn1">
        <a href="">DummyDummy</a>
      </div>
    </div>
  `)
  return (template + copyCodeBlock(template))
}

export const L_Button1_2BtnCenter = () => {
  const template = (`
    <div class="l-btn1 l-btn1--2btnCenter">
      <div class="c-btn1">
        <a href="">DummyDummy</a>
      </div>
      <div class="c-btn1 c-btn1--color1">
        <a href="">DummyDummy</a>
      </div>
    </div>
  `)
  return (template + copyCodeBlock(template))
}

export const LButton1_2BtnBetween = () => {
  const template = (`
    <div class="l-btn1 l-btn1--2btnBetween">
      <div class="c-btn1">
        <a href="">DummyDummy</a>
      </div>
      <div class="c-btn1 c-btn1--color1">
        <a href="">DummyDummy</a>
      </div>
    </div>
  `)
  return (template + copyCodeBlock(template))
}
