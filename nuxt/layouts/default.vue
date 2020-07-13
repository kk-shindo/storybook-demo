<template>
  <div class="container">
    <Header :breadcrumb-items="breadcrumbItems" />
    <Nuxt />
    <Footer :breadcrumb-items="breadcrumbItems" />
  </div>
</template>

<script>
import Header from '~/components/1_layout/Header'
import Footer from '~/components/1_layout/Footer'

export default {
  components: {
    Header,
    Footer
  },
  data () {
    return {
      breadcrumbItems: []
    }
  },
  created () {
    this.setBreadcrumbListener()
  },
  methods: {
    setBreadcrumbListener () {
      this.$nuxt.$on('updateBreadcrumbHandler', this.setBreadcrumbHandler)
    },
    setBreadcrumbHandler (breadcrumbItems) {
      this.breadcrumbItems = breadcrumbItems || []
    }
  }
}
</script>

<style lang="scss">
</style>
