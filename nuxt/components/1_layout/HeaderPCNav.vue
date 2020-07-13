<template>
  <nav class="c-gnavi">
    <ul>
      <li v-for="(listItem, key) in listItems" :key="key">
        <nuxt-link :to="listItem.href">
          {{ listItem.text }}
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    listItems: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss">
.c-gnavi{
  border-bottom: 1px solid #CCC;

  //-------------------------------------------------------
  ul{
    @include center;
    border-left: 1px solid #CCC;
    display: flex;
    justify-content: space-between;
  }

  //-------------------------------------------------------
  li{
    width: 20%;
    border-right: 1px solid #CCC;
  }

  //-------------------------------------------------------
  a{
    height: 40px;
    background: #EFEFEF;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #333;
    font-size: 1.4rem;
    text-decoration: none;
  }
}
</style>
