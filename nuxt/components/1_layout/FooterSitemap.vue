<template>
  <div class="c-footSitemap">
    <div class="c-footSitemap__inner">
      <FooterSitemapBlock v-for="(block, key) in blocks" :key="key" :title="block.title" :list-items="block.listItems" />
    </div>
  </div>
</template>

<script>
import FooterSitemapBlock from './FooterSitemapBlock'

const blockData = [
  {
    title: 'Category1',
    listItems: [
      {
        href: '',
        text: 'LinkLinkLinkLinkLink'
      },
      {
        href: '',
        text: 'LinkLinkLinkLinkLink'
      },
      {
        href: '',
        text: 'LinkLinkLinkLinkLink'
      },
      {
        href: '',
        text: 'LinkLinkLinkLinkLink'
      }
    ]
  },
  {
    title: 'Category2',
    listItems: [
      {
        href: '',
        text: 'LinkLinkLinkLinkLink'
      },
      {
        href: '',
        text: 'LinkLinkLinkLinkLink'
      },
      {
        href: '',
        text: 'LinkLinkLinkLinkLink'
      },
      {
        href: '',
        text: 'LinkLinkLinkLinkLink'
      }
    ]
  },
  {
    title: 'Category3',
    listItems: [
      {
        href: '',
        text: 'LinkLinkLinkLinkLink'
      },
      {
        href: '',
        text: 'LinkLinkLinkLinkLink'
      },
      {
        href: '',
        text: 'LinkLinkLinkLinkLink'
      },
      {
        href: '',
        text: 'LinkLinkLinkLinkLink'
      }
    ]
  },
  {
    title: 'Category4',
    listItems: [
      {
        href: '',
        text: 'LinkLinkLinkLinkLink'
      },
      {
        href: '',
        text: 'LinkLinkLinkLinkLink'
      },
      {
        href: '',
        text: 'LinkLinkLinkLinkLink'
      },
      {
        href: '',
        text: 'LinkLinkLinkLinkLink'
      }
    ]
  },
  {
    title: 'Category5',
    listItems: [
      {
        href: '',
        text: 'LinkLinkLinkLinkLink'
      },
      {
        href: '',
        text: 'LinkLinkLinkLinkLink'
      },
      {
        href: '',
        text: 'LinkLinkLinkLinkLink'
      },
      {
        href: '',
        text: 'LinkLinkLinkLinkLink'
      }
    ]
  }
]

export default {
  components: {
    FooterSitemapBlock
  },
  data () {
    return {
      blocks: blockData
    }
  }
}
</script>

<style lang="scss">
/* Sitemap
------------------------------------------------------------*/
.c-footSitemap{
  border-top: 1px solid #CCC;
  background: #EFEFEE;
  padding: 30px 0;
  @include sp{
    padding: 15px 10px 5px 10px;
  }

  //-------------------------------------------------------
  &__inner{
    @include center;
    display: flex;
    justify-content: space-between;
    @include sp{
      flex-wrap: wrap;
    }
  }
}
</style>
