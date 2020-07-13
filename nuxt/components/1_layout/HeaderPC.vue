<template>
  <div class="pc-only">
    <header class="c-headPC">
      <div class="c-headPC__inner">
        <h1>
          <nuxt-link to="/">
            <img src="https://placehold.jp/250x50.png">
          </nuxt-link>
        </h1>
        <ul>
          <li>
            <nuxt-link to="#">
              Link1
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="#">
              Link2
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="#">
              Link3
            </nuxt-link>
          </li>
        </ul>
      </div>
    </header>
    <headerPCNav :list-items="navItems" />
  </div>
</template>

<script>
import headerPCNav from '~/components/1_layout/HeaderPCNav'

export default {
  components: {
    headerPCNav
  },
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
          href: '/storybook-static',
          text: 'storybook'
        },
        {
          href: '/component',
          text: 'component'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
/*------------------------------------------------------------
header
------------------------------------------------------------*/

/* PC
------------------------------------------------------------*/
.c-headPC{
  border-bottom: 1px solid #CCC;

  //-------------------------------------------------------
  &__inner{
    height: 80px;
    @include center;
    display: flex;
        justify-content: space-between;
        align-items: center;
  }

  //-------------------------------------------------------
  h1{}

  //-------------------------------------------------------
  ul{
    display: inline-flex;
  }

  //-------------------------------------------------------
  li{
    margin-left: 20px;
    a{
      text-decoration: none;
      font-size: 1.6rem;
      color: #333;
    }
  }
}
</style>
