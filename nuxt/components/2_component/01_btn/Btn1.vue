<template>
  <div :class="'c-btn1 '+className">
    <a href=""><slot /></a>
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
.c-btn1{
  display: inline-block;

  a{
    color: #FFF;
    background: #FC6E51;
    border-radius: 30px;
    line-height: 1;
    text-align: center;
    min-width: 200px;
    padding: 13px 0;
    font-size: 1.3rem;
    display: inline-block;
    text-decoration: none;
    &:hover{
      text-decoration: underline;
    }
  }

  //-------------------------------------------------------
  &--color1{
    a{
      background: #37BC9B;
    }
  }

  //-------------------------------------------------------
  &--color2{
    a{
      background: #3BAFDA;
    }
  }
}
</style>
