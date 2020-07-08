<template>
  <div :class="'c-title2 u-mt20 '+className">
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
