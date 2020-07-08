<template>
  <div class="c-sideFrame1">
    <div class="c-sideFrame1__head">
      <p>{{ title }}</p>
    </div>
    <div class="c-sideFrame1__body">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss">
.c-sideFrame1{
  border-radius: 5px;
  border:1px solid #CCC;
  margin-bottom: 30px;

  //-------------------------------------------------------
  &__head{
    border-bottom:1px solid #CCC;
    padding: 12px 10px;
    background: #E6E9ED;
    p{
      font-size: 1.4rem;
      line-height: 1;
    }
  }

  //-------------------------------------------------------
  &__body{
    padding: 13px 10px;
  }
}
</style>
