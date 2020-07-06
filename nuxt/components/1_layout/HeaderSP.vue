<template>
  <div class="sp-only">
    <header class="c-headSP">
      <div class="c-headSP_inner">
        <h1><a href=""><img src="https://placehold.jp/150x40.png"></a></h1>
        <HeaderSPBtn @toggle="toggleMenu" />
        <HeaderSPNav :is-open="navOpen" :list-items="menuItems" />
      </div>
    </header>
  </div>
</template>

<script>
import HeaderSPNav from '~/components/1_layout/HeaderSPNav'
import HeaderSPBtn from '~/components/1_layout/HeaderSPBtn'

export default {
  components: {
    HeaderSPNav,
    HeaderSPBtn
  },
  data () {
    return {
      navOpen: false,
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
  methods: {
    toggleMenu () {
      this.navOpen = !this.navOpen
    }
  }
}
</script>

<style lang="scss">
/*------------------------------------------------------------
header
------------------------------------------------------------*/

/* SP
------------------------------------------------------------*/
.c-headSP{
  border-bottom: 1px solid #CCC;
  background: #FFF;
  height: 60px;
  padding-left: 10px;
  position: fixed;
  width: 100%;
  top: 0;
  padding-top: 10px;

  //-------------------------------------------------------
  &__inner{
      position: relative;
    display: flex;
      justify-content: space-between;
      align-items: center;
  }
}
</style>
