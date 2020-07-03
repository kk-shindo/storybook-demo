<template>
  <div :class="className ? 'l-btn1 '+className : ''">
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    className: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss">
.l-btn1{
  //-------------------------------------------------------
  &--center{
    text-align: center;
  }

  //-------------------------------------------------------
  &--right{
    text-align: right;
  }

  //-------------------------------------------------------
  &--2btnCenter{
    display: flex;
    justify-content: center;
    @include sp{
      padding-left: 10px;
      padding-right: 10px;
    }

    //---------------------------------------------------
    div{
      @include sp{
        width: 48%;
      }
      &:last-child{
        margin-left: 30px;
        @include sp{
          margin-left: 2%;
        }
      }
    }

    //---------------------------------------------------
    .c-btn1 a{
      @include sp{
        min-width: 100%;
      }
    }
  }

  //-------------------------------------------------------
  &--2btnBetween{
    display: flex;
    justify-content: space-between;
    @include sp{
      padding-left: 10px;
      padding-right: 10px;
      justify-content: center;
    }

    //---------------------------------------------------
    div{
      @include sp{
        width: 48%;
      }
      &:last-child{
        @include sp{
          margin-left: 2%;
        }
      }
    }
    //---------------------------------------------------
    .c-btn1 a{
      @include sp{
        min-width: 100%;
      }
    }
  }
}
</style>
