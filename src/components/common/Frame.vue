<template>
  <div id="frame">
    <div class="frame_header">
      <Heads></Heads>
    </div>
    <div class="frame_left">
      <div class="frame_nav">
        <LeftMenu></LeftMenu>
      </div>
      <div class="frame_right">
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
	import Heads from './Head.vue'
	import LeftMenu from './LeftMenu.vue'
	export default {
		name: 'Frame',
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

  #frame{
    height: 100%;
    margin: 0;
    display: flex;
    flex-flow: column;
  }
  .frame_header{
    position: relative;
    flex: 0 0 auto;
    z-index: 2;

  }
  .frame_header .title{
    margin-left: 16px;
    color: #fff;
  }
  .frame_left{
    flex: 1;
    display: flex;
    flex-flow: row;
  }
  .frame_nav{
    position: relative;
    flex: 0 0 250px;
    background: #324157;
    height: 950px;
  }
  .frame_right{
    flex: 1;
    /*overflow: auto;*/
    padding: 20px;

  }
  .breadcrumb{
    padding-bottom: 20px;
    border-bottom: 1px solid #ddd;
  }
</style>