<template>
  <div class="container">
    <Header />
    <Breadcrumb
      :pc-only="true"
      :list-items="breadcrumbItems"
    />
    <Content>
      <Main>
        <Title2>Sample pages</Title2>
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
          name: 'component',
          href: '/component/'
        },
        {
          name: 'top',
          href: '/top/'
        },
        {
          name: 'company',
          href: '/company/'
        },
        {
          name: 'service',
          href: '/service/'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
</style>
