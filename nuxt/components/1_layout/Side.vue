<template>
  <aside class="l-side">
    <SideFrame :title="'Link'">
      <List4 :list-items="linkItems" />
    </SideFrame>
    <SideFrame :title="'Banner'">
      <List5 :list-items="bannerItems" />
    </SideFrame>
    <slot />
  </aside>
</template>

<script>
export default {
  data () {
    return {
      linkItems: [
        {
          href: '#',
          text: 'link'
        },
        {
          href: '#',
          text: 'link'
        },
        {
          href: '#',
          text: 'link'
        },
        {
          href: '#',
          text: 'link'
        }
      ],
      bannerItems: [
        {
          href: '#',
          src: 'https://placehold.jp/200x60.png'
        },
        {
          href: '#',
          src: 'https://placehold.jp/200x60.png'
        },
        {
          href: '#',
          src: 'https://placehold.jp/200x60.png'
        },
        {
          href: '#',
          src: 'https://placehold.jp/200x60.png'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
</style>
