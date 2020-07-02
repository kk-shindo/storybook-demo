<template>
  <nav class="c-breadcrumb1 c-breadcrumb1--bottomline pc-only">
    <ul>
      <li><a href="">HOME</a></li>
      <li><a href="">タイトル</a></li>
      <li><a href="">タイトル</a></li>
      <li>タイトル</li>
    </ul>
  </nav>
</template>

<script>
export default {}
</script>

<style lang="scss">
/*------------------------------------------------------------
breadcrumb
------------------------------------------------------------*/
/*
------------------------------------------------------------*/
.c-breadcrumb1{
  padding: 10px 10px;

  //-------------------------------------------------------
  ul{
    @include center;
    display: flex;
  }

  //-------------------------------------------------------
  li{
    line-height: 1;
    font-size: 1.2rem;
    @include sp{
      font-size: 1.0rem;
    }

    &:after{
      content:"›";
      display: inline-block;
      margin: 0 7px;
    }
    &:last-child{
      &:after{
        content:""
      }
    }
  }

  //-------------------------------------------------------
  a{
    color: #333;
  }

  //-------------------------------------------------------
    &--topline{
      border-top:1px solid #CCC;
    }

  //-------------------------------------------------------
    &--bottomline{
      border-bottom:1px solid #CCC;
    }
}
</style>
