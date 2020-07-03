<template>
  <div :class="'c-title1 '+className">
    <h1><slot /></h1>
  </div>
</template>

<script>
export default {
  props: {
    className: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss">
.c-title1{
  border-left: 8px solid #8CC152;
  margin-bottom: 10px;

  //-------------------------------------------------------
  h1,h2,h3,h4,h5,h6{
    font-size: 1.6rem;
    padding-left: 15px;
    @include sp{
      font-size: 1.4rem;
    }
  }

  //-------------------------------------------------------
  &--color1{
    border-left-color:#F6BB42;
  }

  //-------------------------------------------------------
  &--color2{
    border-left-color:#E9573F;
  }

  //-------------------------------------------------------
  &--textcolor1{
    h1,h2,h3,h4,h5,h6{
      color:#DA4453;
    }
  }

  //-------------------------------------------------------
  &--textcolor2{
    h1,h2,h3,h4,h5,h6{
      color:#3BAFDA;
    }
  }

  //-------------------------------------------------------
  &--underline1{
    border-bottom: 1px solid #CCC;
  }

  //-------------------------------------------------------
  &--topline1{
    border-top: 1px solid #CCC;
  }
}
</style>
