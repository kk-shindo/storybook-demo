<template>
  <div class="c-list5">
    <ul>
      <li v-for="(listItem, key) in listItems" :key="key">
        <nuxt-link :to="listItem.href">
          <img :src="listItem.src">
        </nuxt-link>
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
.c-list5{
  li{
    margin-top: 15px;
    &:first-child{
      margin-top: 0;
    }
  }
}
</style>
