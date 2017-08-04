<template>
  <div id="app">
    <div class="app_header">
      <Heads></Heads>
    </div>
    <div class="app_left">
      <div class="app_nav">
        <LeftMenu></LeftMenu>
      </div>
      <div class="app_right">
        <div class="breadcrumb">
          <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>{{pathName}}</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <router-view></router-view>
      </div>
    </div>

  </div>
</template>

<script>

import Heads from './components/common/Head.vue'
import LeftMenu from './components/common/LeftMenu.vue'

export default {
  name: 'app',
  data () {
    return {
      pathName: this.$route.name,
    }
  },
  components:{
    Heads,
    LeftMenu
  },
  watch: {
    '$route': function(){
      this.pathName = this.$route.name;

    }
  }
}
</script>

<style>

  #app{
    height: 100%;
    margin: 0;
    display: flex;
    flex-flow: column;
  }
  .app_header{
    position: relative;
    flex: 0 0 auto;
    z-index: 2;

  }
  .app_header .title{
    margin-left: 16px;
    color: #fff;
  }
  .app_left{
    flex: 1;
    display: flex;
    flex-flow: row;
  }
  .app_nav{
    position: relative;
    flex: 0 0 250px;
    background: #324157;
    height: 950px;
  }
  .app_right{
    flex: 1;
    /*overflow: auto;*/
    padding: 20px;

  }
  .breadcrumb{
    padding-bottom: 20px;
    border-bottom: 1px solid #ddd;
  }
</style>
</script>
