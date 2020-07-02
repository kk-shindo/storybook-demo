<template>
  <div class="container">
    <Header />
    <Breadcrumb />
    <Nuxt />
    <Footer />
  </div>
</template>

<style lang="scss">
@media (min-width: 768px) {
  .sp-only {
    display: none;
  }
}

@include sp {
  .pc-only {
    display: none;
  }
  img{
    max-width: 100%;
    height: auto;
  }
}

.container {
  font-size: 1.4rem;
  line-height: 1.6;
  @include sp {
    padding-top: 60px;
    font-size: 1.2rem;
  }
}
</style>
