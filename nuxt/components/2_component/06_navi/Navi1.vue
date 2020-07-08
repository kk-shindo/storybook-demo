<template>
  <nav class="c-navi1">
    <ul>
      <li v-for="(listItem, key) in listItems" :key="key">
        <a :href="listItem.href" v-html="listItem.text"></a>
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
.c-navi1{
  //-------------------------------------------------------
  ul{
    display: flex;
        justify-content: space-between;
    @include sp{
          flex-wrap: wrap;
    }
  }

  //-------------------------------------------------------
  li{
    width: 180px;
    @include sp{
      width: 49%;
      margin-left: 2%;
      margin-bottom: 10px;
      &:nth-child(2n+1){
        margin-left: 0;
      }
    }
  }

  //-------------------------------------------------------
  a{
    text-decoration: none;
    background: #4FC1E9;
        color: #FFF;
    line-height: 1;
    display: flex;
        align-items: center;
        justify-content: center;
        height: 38px;
        border-radius: 5px;
        font-size: 1.2rem;
        &:hover{
          opacity: 1;
          background: #3BAFDA;
        }
        &:before{
          content:"";
          width: 5px;
          height: 5px;
          border-right: 2px solid #FFF;
          border-bottom: 2px solid #FFF;
          margin-right: 7px;
            transform: rotate(45deg);
            margin-top: -4px;
        }
  }
}
</style>
