<template>
  <div class="container">
    <Header />
    <Breadcrumb
      :pc-only="true"
      :list-items="breadcrumbItems"
      :class-name="'c-breadcrumb1--bottomline'"
    />
    <div>
      <DevTitle1>breadcrumb</DevTitle1>
      <DevTitle2>c-breadcrumb1</DevTitle2>
      <DevTitle3>base</DevTitle3>
      <Breadcrumb
        :pc-only="true"
        :list-items="breadcrumbItems"
        :class-name="''"
      />
      <DevTitle3>--topline</DevTitle3>
      <Breadcrumb
        :pc-only="true"
        :list-items="breadcrumbItems"
        :class-name="'c-breadcrumb1--topline'"
      />
      <DevTitle3>--bottomline</DevTitle3>
      <Breadcrumb
        :pc-only="true"
        :list-items="breadcrumbItems"
        :class-name="'c-breadcrumb1--bottomline'"
      />
    </div>
    <Content>
      <Main />
      <Side />
    </Content>
    <Footer :breadcrumb-items="breadcrumbItems" />
  </div>
</template>

<script>
export default {
  data () {
    return {
      breadcrumbItems: [
        {
          href: '/',
          text: 'HOME'
        },
        {
          href: '/',
          text: 'タイトル'
        },
        {
          href: '/',
          text: 'タイトル'
        },
        {
          href: '',
          text: 'タイトル'
        }
      ],
      list2Items: [
        {
          href: '/component/',
          text: 'component'
        },
        {
          href: '/top/',
          text: 'top'
        },
        {
          href: '/company/',
          text: 'company'
        },
        {
          href: '/service/',
          text: 'service'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
</style>
