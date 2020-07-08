<template>
  <nav :class="'c-breadcrumb1 '+className+(pcOnly ? ' pc-only' : '')">
    <ul>
      <li v-for="(listItem, key) in listItems" :key="key">
        <a v-if="listItem.href" :href="listItem.href">{{ listItem.text }}</a>
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
    line-height: 1;
    font-size: 1.2rem;
    @include sp{
      font-size: 1.0rem;
    }

    &:after{
      content:"›";
      display: inline-block;
      margin: 0 7px;
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
