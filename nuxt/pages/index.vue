<template>
  <Content>
    <Main>
      <Title2 :level="'h2'">
        Sample pages
      </Title2>
      <List2 :list-items="list2Items" />
    </Main>
    <Side />
  </Content>
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
  },
  mounted () {
    this.updateBreadcrumbHandler()
  },
  methods: {
    updateBreadcrumbHandler () {
      this.$nuxt.$emit('updateBreadcrumbHandler', this.breadcrumbItems)
    }
  }
}
</script>

<style lang="scss">
</style>
