<template>
  <div class="c-line1">
    <hr>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.c-line1{
  position: relative;

  hr{
    height: 0;
    border: 0;
    border-top: 1px solid #CCC;
    text-align: center;
    &:after {
      content: '§';
      display: inline-block;
      position: absolute;
      padding: 0 10px;
      background: #FFF;
      color: #bbb;
      font-size: 1.4rem;
      left: 50%;
      top: 50%;
      line-height: 1;
      margin-top: -0.7rem;
      margin-left: -0.7rem;
    }
  }
}
</style>
