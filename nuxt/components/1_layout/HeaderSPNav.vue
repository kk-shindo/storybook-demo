<template>
  <nav :class="'c-menulistSP'+(isOpen ? ' is-open' : '')">
    <ul>
      <li v-for="(listItem, key) in listItems" :key="key">
        <a :href="listItem.href">{{ listItem.text }}</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    isOpen: {
      type: Boolean,
      default: false
    },
    listItems: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss">
/*
------------------------------------------------------------*/
.c-menulistSP {
  width: 100%;
  max-height: 0;
  position: absolute;
  top: 60px;
  left: 0;
  overflow: hidden;
  transition: all .2s;

  //-------------------------------------------------------
  &.is-open {
      max-height: 9999px;
  }

  //-------------------------------------------------------
  ul{
    background: #FFF;
  }

  //-------------------------------------------------------
  li{
    border-bottom:1px solid #CCC;
  }

  //-------------------------------------------------------
  a{
    text-decoration: none;
    display: block;
    color: #333;
    padding: 10px 10px;
  }
}
</style>
