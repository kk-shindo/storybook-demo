<template>
  <div class="c-list2">
    <ul>
      <li v-for="(listItem, key) in listItems" :key="key">
        <a :href="listItem.href">{{ listItem.name }}</a>
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

<style lang="scss" scoped>
.c-list2{
  ul{
    margin-left: 1.7rem;
  }
  li{
    list-style-type: disc;
    font-size: 1.4rem;
  }
}
</style>
