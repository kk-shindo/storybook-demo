<template>
  <div :class="'c-imgtext1 '+className">
    <div class="c-imgtext1__img">
      <img :src="src">
    </div>
    <div class="c-imgtext1__text" v-html="html" />
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      default: ''
    },
    html: {
      type: String,
      default: ''
    },
    className: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss">
.c-imgtext1{

  $root:&;
  border: 1px solid #CCC;
  padding: 15px;
  display: flex;

  //-------------------------------------------------------
  &__img{
    width: 150px;
    margin-right: 10px;
  }

  //-------------------------------------------------------
  &__text{
        flex: 1;
        h3{
          font-size: 2.0rem;
            font-weight: normal;
        }
        p{
          font-size: 1.2rem;
        }

  }

  //-------------------------------------------------------
  &--bg1{
    background: #F5F7FA;
  }

  //-------------------------------------------------------
  &--round{
        border-radius: 10px;
  }

  //-------------------------------------------------------
  &--imgright{
        flex-direction: row-reverse;
        #{$root}__img{
          margin-right: 0;
          margin-left: 10px;
        }
  }
}
</style>
