<template>
  <div class="c-footCopy">
    <p><slot /></p>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
/* Copyright
------------------------------------------------------------*/
.c-footCopy{
  padding: 20px 0;
  border-top: 1px solid #CCC;
  @include sp{
    padding: 10px 0;
  }

  p{
    text-align: center;
    font-size: 1.2rem;
    line-height: 1;
    @include sp{
      font-size: 1.0rem;
    }
  }
}
</style>
