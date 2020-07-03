<template>
  <div :class="'c-title3 '+className">
    <h3><slot /></h3>
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
.c-title3{
  h1,h2,h3,h4,h5,h6{
    font-size: 1.4rem;
    font-weight: bold;
  }
}
</style>
