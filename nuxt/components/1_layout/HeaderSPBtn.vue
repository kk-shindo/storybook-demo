<template>
  <div :class="'c-menuSP'+(isOpen ? ' is-open' : '')" @click="toggleIcon">
    <div class="c-menuSP__1" />
    <div class="c-menuSP__2" />
    <div class="c-menuSP__3" />
  </div>
</template>

<script>
export default {
  data () {
    return {
      isOpen: false
    }
  },
  methods: {
    toggleIcon () {
      this.$emit('toggle')
      this.isOpen = !this.isOpen
    }
  }
}
</script>

<style lang="scss">
/*
------------------------------------------------------------*/
.c-menuSP {
  $root:&;
  width: 30px;
  height: 30px;
  top: 11px;
  right: 10px;
  cursor: pointer;
  position: absolute;

  //-------------------------------------------------------
  &__1,
  &__2,
  &__3{
    width: 100%;
    height: 5px;
    background: #000;
    margin: 6px auto;
    backface-visibility: hidden;
  }

  //-------------------------------------------------------
  &.is-open {
    #{$root}__1 {
      transform:rotate(45deg) translate(7px, 7px);
    }

    #{$root}__2 {
      opacity: 0;
    }

    #{$root}__3 {
      transform:rotate(-45deg) translate(8px, -8px);
    }
  }
}
</style>
