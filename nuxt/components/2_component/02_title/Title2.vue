<template>
  <div :class="'c-title2 u-mt20 '+className">
    <h2><slot /></h2>
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
.c-title2 {
  border-bottom: 1px solid #333;
  padding-bottom: 12px;
  margin-bottom: 20px;

  h1,h2,h3,h4,h5,h6{
    font-size: 1.8rem;
    font-weight: bold;
    @include sp{
      font-size: 1.4rem;
    }
  }

  //-------------------------------------------------------
  &--color1 {
    border-bottom-color:#8CC152;
    h1,h2,h3,h4,h5,h6{
      color: #8CC152;
    }
  }
}
</style>
