import { storiesOf } from '@storybook/vue'
import { boolean } from '@storybook/addon-knobs'

import Header from '~/components/1_layout/Header'
import HeaderPCNav from '~/components/1_layout/HeaderPCNav'
import HeaderSPBtn from '~/components/1_layout/HeaderSPBtn'
import HeaderSPNav from '~/components/1_layout/HeaderSPNav'

storiesOf('1_Layout/header', module)
  .add('header', () => ({
    components: { Header },
    template: '<Header />'
  }),
  {
    info: {}
  })
  .add('headerPCNav', () => ({
    components: { HeaderPCNav },
    template: '<HeaderPCNav :list-items="navItems" />',
    data () {
      return {
        navItems: [
          {
            href: '#',
            text: 'navi'
          },
          {
            href: '#',
            text: 'navi'
          },
          {
            href: '#',
            text: 'navi'
          },
          {
            href: '#',
            text: 'navi'
          },
          {
            href: '#',
            text: 'navi'
          }
        ]
      }
    }
  }),
  {
    info: {}
  })
  .add('headerSPBbtn', () => ({
    components: { HeaderSPBtn },
    template: '<HeaderSPBtn />'
  }),
  {
    info: {}
  })
  .add('headerSPNav', () => ({
    components: { HeaderSPNav },
    template: '<HeaderSPNav :is-open="navOpen" :list-items="menuItems" />',
    data () {
      return {
        menuItems: [
          {
            href: '#',
            text: 'navi'
          },
          {
            href: '#',
            text: 'navi'
          },
          {
            href: '#',
            text: 'navi'
          },
          {
            href: '#',
            text: 'navi'
          },
          {
            href: '#',
            text: 'navi'
          }
        ]
      }
    },
    props: {
      navOpen: {
        type: boolean,
        default: boolean('Toggle', true)
      }
    }
  }),
  {
    info: {}
  })
