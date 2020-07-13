<template>
  <nav :class="'c-breadcrumb1 '+className+(pcOnly ? ' pc-only' : '')">
    <ul>
      <li v-for="(listItem, key) in listItems" :key="key">
        <nuxt-link v-if="listItem.href" :to="listItem.href">
          {{ listItem.text }}
        </nuxt-link>
        <span v-else>{{ listItem.text }}</span>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    pcOnly: {
      type: Boolean,
      default: false
    },
    listItems: {
      type: Array,
      default: () => []
    },
    className: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss">
/*------------------------------------------------------------
breadcrumb
------------------------------------------------------------*/
/*
------------------------------------------------------------*/
.c-breadcrumb1{
  padding: 10px 10px;

  //-------------------------------------------------------
  ul{
    @include center;
    display: flex;
  }

  //-------------------------------------------------------
  li{
    font-size: 1.2rem;
    line-height: 1;
    @include sp{
      font-size: 1.0rem;
    }

    &:after{
      margin: 0 7px;
      display: inline-block;
      content:"›";
    }
    &:last-child{
      &:after{
        content:""
      }
    }
  }

  //-------------------------------------------------------
  a{
    color: #333;
  }

  //-------------------------------------------------------
    &--topline{
      border-top:1px solid #CCC;
    }

  //-------------------------------------------------------
    &--bottomline{
      border-bottom:1px solid #CCC;
    }
}
</style>
