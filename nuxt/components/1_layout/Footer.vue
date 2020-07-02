<template>
  <footer style="margin-top: 30px;">
    <nav class="c-breadcrumb1 c-breadcrumb1--topline">
      <ul>
        <li><a href="">HOME</a></li>
        <li><a href="">タイトル</a></li>
        <li><a href="">タイトル</a></li>
        <li>タイトル</li>
      </ul>
    </nav>
    <div class="c-footSitemap">
      <div class="c-footSitemap__inner">
        <div class="c-footSitemap__block">
          <p>Category1</p>
          <ul>
            <li><a href="">LinkLinkLinkLinkLink</a></li>
            <li><a href="">LinkLinkLinkLinkLink</a></li>
            <li><a href="">LinkLinkLinkLinkLink</a></li>
            <li><a href="">LinkLinkLinkLinkLink</a></li>
          </ul>
        </div>
        <div class="c-footSitemap__block">
          <p>Category2</p>
          <ul>
            <li><a href="">LinkLinkLinkLinkLink</a></li>
            <li><a href="">LinkLinkLinkLinkLink</a></li>
            <li><a href="">LinkLinkLinkLinkLink</a></li>
            <li><a href="">LinkLinkLinkLinkLink</a></li>
          </ul>
        </div>
        <div class="c-footSitemap__block">
          <p>Category3</p>
          <ul>
            <li><a href="">LinkLinkLinkLinkLink</a></li>
            <li><a href="">LinkLinkLinkLinkLink</a></li>
            <li><a href="">LinkLinkLinkLinkLink</a></li>
            <li><a href="">LinkLinkLinkLinkLink</a></li>
          </ul>
        </div>
        <div class="c-footSitemap__block">
          <p>Category4</p>
          <ul>
            <li><a href="">LinkLinkLinkLinkLink</a></li>
            <li><a href="">LinkLinkLinkLinkLink</a></li>
            <li><a href="">LinkLinkLinkLinkLink</a></li>
            <li><a href="">LinkLinkLinkLinkLink</a></li>
          </ul>
        </div>
        <div class="c-footSitemap__block">
          <p>Category5</p>
          <ul>
            <li><a href="">LinkLinkLinkLinkLink</a></li>
            <li><a href="">LinkLinkLinkLinkLink</a></li>
            <li><a href="">LinkLinkLinkLinkLink</a></li>
            <li><a href="">LinkLinkLinkLinkLink</a></li>
          </ul>
        </div>
      </div>
    </div>

    <div class="c-footCopy">
      <p>copyright xxxxxxxx 2018</p>
    </div>
  </footer>
</template>

<script>
export default {}
</script>

<style lang="scss">
/* Sitemap
------------------------------------------------------------*/
.c-footSitemap{
  border-top: 1px solid #CCC;
  background: #EFEFEE;
  padding: 30px 0;
  @include sp{
    padding: 15px 10px 5px 10px;
  }

  //-------------------------------------------------------
  &__inner{
    @include center;
    display: flex;
    justify-content: space-between;
    @include sp{
      flex-wrap: wrap;
    }
  }

  //-------------------------------------------------------
  &__block{
    @include sp{
      width: 48%;
      margin-bottom: 20px;
      &:first-child{
        margin-top: 0;
      }
    }
  }

  //-------------------------------------------------------
  p{
    font-weight: bold;
    font-size: 1.4rem;
  }

  //-------------------------------------------------------
  ul{}

  //-------------------------------------------------------
  li{
    margin-top: 6px;
  }

  //-------------------------------------------------------
  a{
    text-decoration: none;
    color: #000;
  }
}

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
