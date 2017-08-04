<template>
  <!-- <el-row class="tac"> -->
  <!-- <el-col :span="16"> -->
    <el-menu default-active="1" class="el-menu-vertical-demo" theme="dark" :router=true >

      <el-submenu index="1">
        <template slot="title"><i class="el-icon-menu"></i>数据抓取管理</template>
          <el-menu-item index="/spider"><i class="el-icon-share"></i>获取数据</el-menu-item>
          <el-menu-item index="/imgList"><i class="el-icon-document"></i>图表</el-menu-item>
      </el-submenu>

      <el-submenu index="2">
        <template slot="title"><i class="el-icon-edit"></i>导航二</template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>

      <el-menu-item index="3"><i class="el-icon-setting"></i>导航三</el-menu-item>
    </el-menu>
<!-- </el-row> -->
</template>
<script>

export default {
  name: 'LeftMenu'
}
</script>
