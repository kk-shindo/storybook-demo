<template>
  <div class="pc-only">
    <header class="c-headPC">
      <div class="c-headPC__inner">
        <h1><a href=""><img src="https://placehold.jp/250x50.png"></a></h1>
        <ul>
          <li><a href="">Link1</a></li>
          <li><a href="">Link2</a></li>
          <li><a href="">Link3</a></li>
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
