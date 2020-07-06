<template>
  <nav class="c-gnavi">
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
.c-gnavi{
  border-bottom: 1px solid #CCC;

  //-------------------------------------------------------
  ul{
    @include center;
    display: flex;
        justify-content: space-between;
    border-left: 1px solid #CCC;
  }

  //-------------------------------------------------------
  li{
    width: 25%;
    border-right: 1px solid #CCC;
  }

  //-------------------------------------------------------
  a{
    display: flex;
    text-decoration: none;
    height: 40px;
    font-size: 1.4rem;
        align-items: center;
        background: #EFEFEF;
        justify-content: center;
        color: #333;
  }
}
</style>
