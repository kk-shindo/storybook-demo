<template>
  <div class="c-list1">
    <div v-for="(listItem, key) in listItems" :key="key" class="c-list1__card">
      <div v-if="listItem.img" class="c-list1__img1">
        <img :src="listItem.img">
      </div>
      <div v-if="listItem.thumb && listItem.title && listItem.text" class="c-list1__info">
        <div v-if="listItem.thumb" class="c-list1__img2">
          <img :src="listItem.thumb">
        </div>
        <div class="c-list1__text">
          <h3>{{ listItem.title }}</h3>
          <p>{{ listItem.text }}</p>
        </div>
      </div>
    </div>
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
.c-list1{
  $root:&;
  display: flex;
  flex-wrap: wrap;

  //-------------------------------------------------------
  &--col3{

    #{$root}__card{
      width: 253px;
      @include sp{
        width: 49%;
        margin-left: 2%;
      }

      //-----------------------------------------------
      &:nth-child(4n+1){
        margin-left: 20px;
        @include sp{
          margin-left: 2%;
        }
      }

      //-----------------------------------------------
      &:nth-child(3n+1){
        margin-left: 0px;
        @include sp{
          margin-left: 2%;
        }
      }

      //-----------------------------------------------
      &:nth-child(2n+1){
        @include sp{
          margin-left: 0;
        }
      }
    }
  }


  //-------------------------------------------------------
  &__card{
    width: 185px;
    margin-bottom: 20px;
    margin-left: 20px;
    @include sp{
      width: 49%;
      margin-left: 2%;
    }

    //----------------------------------------------------
    &:nth-child(4n+1){
      margin-left: 0px;
    }

    //----------------------------------------------------
    &:nth-child(2n+1){
      @include sp{
        margin-left: 0;
      }
    }
  }

  //-------------------------------------------------------
  &__img1{
    img{
      @include sp{
        width: 100%;
        height: auto;
      }
    }
  }

  //-------------------------------------------------------
  &__info{
    margin-top: 10px;
    display: flex;
  }

  //-------------------------------------------------------
  &__img2{
    width: 50px;
    margin-right: 10px;
  }

  //-------------------------------------------------------
  &__text{
      flex: 1;
    h3{
      font-size: 1.4rem;
    }
    p{
      font-size: 1.2rem;
    }
  }
}
</style>
