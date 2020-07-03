<template>
  <div :class="'c-title4 '+className">
    <div class="c-title4__inner">
      <h2><slot /></h2>
      <p v-if="subTitle">{{ subTitle }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    className: {
      type: String,
      default: ''
    },
    subTitle: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss">
.c-title4{
  line-height: 1;
  border-bottom: 1px solid #CCC;
  
  &__inner{
    @include center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100px;
    @include sp{
      padding: 0 10px;
      height: 70px;
    }
  }

  h2{
    font-size: 2.2rem;
    @include sp{
      font-size: 1.6rem;
    }
  }

  p{
    margin-top: 8px;
    font-size: 1.4rem;
    @include sp{
      font-size: 1.0rem;
    }
  }
}
</style>
