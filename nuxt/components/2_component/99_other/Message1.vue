<template>
  <div :class="'c-message1 '+className">
    <slot />
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
.c-message1{
  border: 1px solid #CCC;
  border-radius: 5px;
  padding: 30px 10px;

  //-------------------------------------------------------
  p{
    text-align: center;
    font-size: 1.4rem;
  }

  //-------------------------------------------------------
  &--color1{
    border-color:#37BC9B;
    background: #48CFAD;
    p{
      color: #FFF;
    }
  }
}
</style>
