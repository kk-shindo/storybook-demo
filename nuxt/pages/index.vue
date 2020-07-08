<template>
  <div class="container">
    <Header />
    <Breadcrumb
      :pc-only="true"
      :list-items="breadcrumbItems"
      :class-name="'c-breadcrumb1--bottomline'"
    />
    <Content>
      <Main>
        <Title2 :level="'h2'">
          Sample pages
        </Title2>
        <List2 :list-items="list2Items" />
      </Main>
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
