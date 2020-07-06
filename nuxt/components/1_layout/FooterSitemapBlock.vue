<template>
  <div class="c-footSitemap__block">
    <p>{{ title }}</p>
    <ul>
      <li v-for="(listItem, key) in listItems" :key="key">
        <a :href="listItem.href">{{ listItem.text }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    listItems: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss">
/* Sitemap
------------------------------------------------------------*/
.c-footSitemap{
  //-------------------------------------------------------
  &__block{
    @include sp{
      width: 48%;
      margin-bottom: 20px;
      &:first-child{
        margin-top: 0;
      }
    }

    //-------------------------------------------------------
    p{
      font-weight: bold;
      font-size: 1.4rem;
    }

    //-------------------------------------------------------
    ul{}

    //-------------------------------------------------------
    li{
      margin-top: 6px;
    }

    //-------------------------------------------------------
    a{
      text-decoration: none;
      color: #000;
    }
  }
}
</style>
