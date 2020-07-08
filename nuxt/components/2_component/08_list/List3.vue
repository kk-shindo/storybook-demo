<template>
  <div class="c-list3">
    <ol>
      <li v-for="(listItem, key) in listItems" :key="key" v-html="listItem.text" />
    </ol>
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
.c-list3{
  ol{
    margin-left: 1.7rem;
  }
  li{
    list-style-type: decimal;
    font-size: 1.4rem;
  }
}
</style>
