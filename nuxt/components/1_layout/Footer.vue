<template>
  <footer style="margin-top: 30px;">
    <Breadcrumb
      :pc-only="false"
      :list-items="breadcrumbItems"
    />
    <FooterSitemap />
    <FooterCopy>copyright xxxxxxxx 2018</FooterCopy>
  </footer>
</template>

<script>
import Breadcrumb from './Breadcrumb'
import FooterSitemap from './FooterSitemap'
import FooterCopy from './FooterCopy'

export default {
  components: {
    Breadcrumb,
    FooterSitemap,
    FooterCopy
  },
  props: {
    breadcrumbItems: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss">
</style>
