<template>
  <div>
    <HeaderPC />
    <HeaderSP />
    <Breadcrumb
      :pc-only="true"
      :list-items="breadcrumbItems"
      :class-name="'c-breadcrumb1--bottomline'"
    />
  </div>
</template>

<script>
import HeaderPC from '~/components/1_layout/HeaderPC'
import HeaderSP from '~/components/1_layout/HeaderSP'

export default {
  components: {
    HeaderPC,
    HeaderSP
  },
  props: {
    breadcrumbItems: {
      type: Array,
      default: () => {}
    }
  }
}
</script>

<style lang="scss">
</style>
