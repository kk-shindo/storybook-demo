<template>
  <div class="l-content">
    <slot />
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.l-content{
  @include center;
  display: flex;
    justify-content: space-between;
    @include sp{
      display: block;
    }
}
</style>
