<template>
  <main class="l-main">
    <slot />
  </main>
</template>

<script>
export default {}
</script>

<style lang="scss">
.l-main{
  width: 800px;
  margin-top: 50px;
  @include sp{
    width: auto;
    margin-top: 20px;
    padding-left: 10px;
    padding-right: 10px;
  }
}
</style>
