<template>
  <Content>
    <Main>
      <Title2>Sample pages</Title2>
      <List2 :list-items="list2Items" />
    </Main>
    <Side />
  </Content>
</template>

<script>
export default {
  data () {
    return {
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
