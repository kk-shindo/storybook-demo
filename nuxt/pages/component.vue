<template>
  <div>
    <div id="breadcrumb">
      <DevTitle1>breadcrumb</DevTitle1>
      <DevTitle2>c-breadcrumb1</DevTitle2>
      <DevTitle3>base</DevTitle3>
      <Breadcrumb
        :pc-only="true"
        :list-items="sampleBreadcrumbItems"
      />
      <DevTitle3>--topline</DevTitle3>
      <Breadcrumb
        :pc-only="true"
        :list-items="sampleBreadcrumbItems"
        :class-name="'c-breadcrumb1--topline'"
      />
      <DevTitle3>--bottomline</DevTitle3>
      <Breadcrumb
        :pc-only="true"
        :list-items="sampleBreadcrumbItems"
        :class-name="'c-breadcrumb1--bottomline'"
      />
    </div>
    <div id="btn">
      <DevTitle1>btn</DevTitle1>
      <DevTitle2>c-btn1</DevTitle2>
      <DevTitle3>base</DevTitle3>
      <Btn1>
        DummyDummy
      </Btn1>
      <DevTitle3>--color1</DevTitle3>
      <Btn1 :class="'c-btn1--color1'">
        DummyDummy
      </Btn1>
      <DevTitle3>--color2</DevTitle3>
      <Btn1 :class="'c-btn1--color2'">
        DummyDummy
      </Btn1>
      <DevTitle2>l-btn1</DevTitle2>
      <DevTitle3>base</DevTitle3>
      <Btn1Layout>
        <Btn1>
          DummyDummy
        </Btn1>
      </Btn1Layout>
      <DevTitle3>--right</DevTitle3>
      <Btn1Layout :class="'l-btn1--right'">
        <Btn1>
          DummyDummy
        </Btn1>
      </Btn1Layout>
      <DevTitle3>--center</DevTitle3>
      <Btn1Layout :class="'l-btn1--center'">
        <Btn1>
          DummyDummy
        </Btn1>
        <Btn1 :class="'c-btn1--color1'">
          DummyDummy
        </Btn1>
      </Btn1Layout>
      <DevTitle3>--between</DevTitle3>
      <Btn1Layout :class="'l-btn1--between'">
        <Btn1 :class="'c-btn1--color1'">
          DummyDummy
        </Btn1>
        <Btn1>
          DummyDummy
        </Btn1>
      </Btn1Layout>
    </div>
    <Content>
      <Main />
      <Side />
    </Content>
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
          href: '',
          text: 'component'
        }
      ],
      sampleBreadcrumbItems: [
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
