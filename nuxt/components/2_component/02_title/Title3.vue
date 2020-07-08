<template>
  <div :class="'c-title3 '+className">
    <h1 v-if="level === 'h1'">
      <slot />
    </h1>
    <h2 v-if="level === 'h2'">
      <slot />
    </h2>
    <h3 v-if="level === 'h3'">
      <slot />
    </h3>
    <h4 v-if="level === 'h4'">
      <slot />
    </h4>
    <h5 v-if="level === 'h5'">
      <slot />
    </h5>
    <h6 v-if="level === 'h6'">
      <slot />
    </h6>
  </div>
</template>

<script>
export default {
  props: {
    className: {
      type: String,
      default: ''
    },
    level: {
      type: String,
      default: 'h1'
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
