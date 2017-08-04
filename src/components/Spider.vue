<template>
<div>
  <div class="getbutton">
    <el-button type="primary" @click="spider">获取数据</el-button>
  </div>
  <el-table :data="books" border style="width: 100%" v-loading="loading" element-loading-text="数据加载中" height="800">
    <el-table-column label="序号" type="index" width="65">

    </el-table-column>
    <el-table-column label="日期" width="250">
      <template scope="scope">
        <el-icon name="time"></el-icon>
        <span style="margin-left: 10px">{{ scope.row.publishTime }}</span>
      </template>
    </el-table-column>
    <el-table-column label="姓名" width="250">
      <template scope="scope">
        <el-popover trigger="hover" placement="top">
          <p>姓名: {{ scope.row.name }}</p>
          <p>地址: {{ scope.row.src }}</p>
          <div slot="reference" class="name-wrapper">
            <el-tag>{{ scope.row.name }}</el-tag>
          </div>
        </el-popover>
      </template>
    </el-table-column>
    <el-table-column label="路径" width="500">
      <template scope="scope">
        <el-icon name="src"></el-icon>
        <span style="margin-left: 10px">{{ scope.row.src }}</span>
      </template>
    </el-table-column>
    <el-table-column label="操作">
      <template scope="scope">
        <el-button
          size="small"
          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button
          size="small"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</div>
</template>

<script>
export default {
  name: 'spider',
  data() {
    return {
      books: [],
      loading: false
    }
  },
  created() {
    this.loading = true;
  },
  mounted() {
    this.getlist();
  },
  methods: {
    spider: function() {
      this.loading = true;
      this.$axios.post('https://localhost:8888/fetch', {

        })
        .then(response => {
          console.log(response);
          this.getlist();
        })
        .catch(response => {
          console.log(response);
        })
    },
    getlist: function() {
      this.$axios.get('https://localhost:8888/users', {

        })
        .then(response => {
          this.books = response.data.books;
          this.loading = false;
          console.log(this);
          console.log(response);
        })
        .catch(response => {
          console.log(response);
        })
    }
  }
}
</script>
<style>
  .getbutton{
    margin-top: 10px;
    margin-bottom: 10px;
  }
</style>
