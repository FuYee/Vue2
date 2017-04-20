<template>
  <div class="head">
    <p class="head-logo"></p>
    <div class="head-right">
      <h3>在线支付满</h3>
      <p class="title-info">峰鸟专送/38分钟送到</p>
      <p class="title-bo">在线支付满28减5，满50减10</p>
      <a class="head-num">5个&nbsp;&nbsp;></a>
    </div>
  </div>

</template>

<script>

  export default{
    props: {
      seller: {
        type: Object
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style rel="stylesheet/stylus" lang="stylus">

  .head
      background: rgba(0, 0, 0, .5)
      width: 100%
      padding: .2rem
      display: flex
     .head-num
         position: absolute
         top: 1rem
         right: .2rem
         width: 1rem
         height: .6rem
         line-height:.6rem
         -webkit-border-radius: .8rem
         -moz-border-radius:  .8rem
         border-radius:  .8rem
         color: #fff
         text-align: center
         background: rgba(0,0,0,.3)
      .head-logo
          width: 1.4rem
          height: 1.4rem
          background: url("headlogo.png") no-repeat center
          -webkit-border-radius:3px
          -moz-border-radius: 3px
          border-radius: 3px
      .head-right
          margin-left: .4rem
          color: #fff
          padding-top:.1rem
          h3
              background: url("brand@2x.png") no-repeat left
              background-size: .6rem .4rem
              padding-left: 0.7rem
              font-size: 0.3rem
          .title-info
              line-height: .6rem
              font-size: 0.24rem
          .title-bo
              font-size: 0.24rem
              background: url("decrease_1@2x.png") no-repeat left
              background-size: .4rem .3rem
              padding-left: 0.5rem
</style>
