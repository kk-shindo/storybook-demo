import { configure, addParameters, addDecorator } from '@storybook/html'
import { withKnobs } from '@storybook/addon-knobs'
import { withA11y } from '@storybook/addon-a11y'
import { themes } from '@storybook/theming'

import '../assets/css/style.css'

addDecorator(withKnobs)
addDecorator(withA11y)

const customViewports = {
  iPhone5: {
    name: 'iPhone5',
    styles: {
      width: '320px',
      height: '568px',
    },
  },
  iPhone6: {
    name: 'iPhone6,7,8',
    styles: {
      width: '375px',
      height: '667px',
    },
  },
  iPhoneX: {
    name: 'iPhoneX',
    styles: {
      width: '375px',
      height: '812px',
    },
  },
  iPhoneXsMax: {
    name: 'iPhoneXsMax',
    styles: {
      width: '414px',
      height: '896px',
    },
  },
}

addParameters({
  viewport: { viewports: customViewports },
  backgrounds: [
    { name: 'white', value: '#fff', default: true },
    { name: 'black', value: '#333' },
    { name: 'facebook', value: '#3b5998' },
    { name: 'twitter', value: '#00aced' },
  ],
  darkMode: {
    dark: { ...themes.dark, appBg: 'black' },
    light: { ...themes.normal, appBg: 'white' }
  }
})
