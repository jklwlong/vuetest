<template>
  <div class="header-wraper">
      <el-menu default-active="1" class="el-menu-demo" mode="horizontal" @select="handleSelect">
          <li class="title">
              <img src="./logo.svg" alt="logo" class="header-logo">
          </li>
          <li class="user">
              <el-dropdown trigger="click">
                  <span class="el-dropdown-link">
                  monster1935<i class="el-icon-caret-bottom el-icon--right"></i>
                </span>
                  <el-dropdown-menu slot="dropdown">
                      <el-dropdown-item>退出</el-dropdown-item>
                  </el-dropdown-menu>
              </el-dropdown>
          </li>
      </el-menu>
  </div>
</template>


<script>
export default {
    name: 'Head',
    methods: {
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        }
    }
}
</script>


<style media="screen">
.header-wraper li {
    float: left;
    margin-right: 20px;
    margin-top: 5px;
}
.title {
    padding: 1em .2em;
    color: #fff;
    margin-left: 16px;
}
.title span {
    font-size: 1.4em;
    margin-left: 5px;
}
.el-select-dropdown__list{
  max-height: 187px !important;
}
.option {
    padding-top: 10px;
}
.user .el-dropdown {
    position: absolute;
    right: 20px;
    padding-top: 20px;
    color: #fff !important;
}
.el-menu {
    border-radius: 0px;
}
.header-wraper .el-menu{
  background-color: #252726;
}
</style>
