<template>
  <div :class="'c-title4 '+className">
    <div class="c-title4__inner">
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
      <p v-if="subTitle">
        {{ subTitle }}
      </p>
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
    },
    level: {
      type: String,
      default: 'h1'
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
