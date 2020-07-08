<template>
  <div class="c-list4">
    <ul>
      <li v-for="(listItem, key) in listItems" :key="key">
        <a :href="listItem.href" v-html="listItem.text"></a>
      </li>
    </ul>
  </div>
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
.c-list4{
  ul{
    border-top: 1px solid #CCC;
  }
  li{
    border-bottom: 1px solid #CCC;
  }
  a{
    text-decoration: none;
    display: block;
    padding: 12px 10px;
    font-size: 1.3rem;
  }
}
</style>
