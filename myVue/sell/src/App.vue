<template>
  <div id="app">
    <v-header></v-header>
    <div class="tabs" border-1px>
      <p class="goods">
        <router-link to='/foods'>商品</router-link>
      </p>
      <p class="ratings">
        <router-link to='/ratings'>评价</router-link>
      </p>
      <p class="seller">
        <router-link to='/seller'>商家</router-link>
      </p>
    </div>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  import header from 'components/header/header.vue'

  const ERR_OK = 0
  export default {
    name: 'app',
    components: {
      'v-header': header
    },
    data() {
      return {
        seller: {}
      }
    },
    created() {
      this.$http.get('/api/seller').then((response) => {
        response = response.json()
        if (response.errno === ERR_OK) {
          this.seller = response.data
          console.log(this.seller)
        }
      })
    }
  }
</script>

<style rel="stylesheet/stylus" lang="stylus">
  @import "common/stylus/mixim.styl";
  *
    margin: 0
    padding: 0
  #app
    font-family: 'Avenir', Helvetica, Arial, sans-serif
    -webkit-font-smoothing: antialiased
    -moz-osx-font-smoothing: grayscale
    color: #2c3e50
    font-size: .14rem
  .tabs
    display:flex
    flex:3
    border-1px(rgba(7,17,27,.1))
    line-height:.8rem
    p
      flex:1
      text-align: center
      font-size:.26rem
      &>a
        display:block
        &.active
          color:red
</style>
