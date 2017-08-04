<template>
<div>
  <!-- 获取与删除按钮 -->
  <div class="getbutton">
    <el-button size="small" type="primary" @click="spider">获取数据</el-button>
    <el-button size="small" type="primary" @click="batchDel">批量删除</el-button>
  </div>
  <!-- 数据渲染表格 -->
  <el-table :data="books" border style="width: 100%" v-loading="loading" element-loading-text="数据加载中" height="800" ref="multipleTable">
    <el-table-column type="selection" width="65">
    </el-table-column>
    <el-table-column label="序号" type="index" width="65">
    </el-table-column>
    <el-table-column label="日期" width="250">
      <template scope="scope">
        <el-icon name="time"></el-icon>
        <span style="margin-left: 10px">{{ scope.row.publishTime }}</span>
      </template>
    </el-table-column>
    <el-table-column label="名称" width="250">
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
          @click="dialogFormVisible = true">编辑</el-button>
        <el-button
          size="small"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
  <!-- 编辑按钮弹出 -->
  <el-dialog title="编辑" :visible.sync="dialogFormVisible" size="small">
  <el-form :model="form">
    <el-form-item label="名称" :label-width="formLabelWidth">
      <el-input v-model="form.name" auto-complete="off"></el-input>
    </el-form-item>
    <el-form-item label="路径" :label-width="formLabelWidth">
      <el-input v-model="form.src" auto-complete="off"></el-input>
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">取 消</el-button>
    <el-button type="primary" @click="update">确 定</el-button>
  </div>
</el-dialog>
</div>
</template>

<script>
export default {
  name: 'spider',
  data() {
    return {
      books: [],
      loading: false,
      dialogFormVisible: false,
      form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: '',
          src: ''
        },
        formLabelWidth: '50px'
    }
  },
  created() {
    this.loading = true;
  },
  mounted() {
    this.getlist();
  },
  methods: {
    //获取数据
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
    //列表展示
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
    },
    //批量删除
    batchDel: function() {
      console.log(this.$refs.multipleTable.selection);
      // this.loading = true;
      // this.$axios.post('https://localhost:8888/xxx', {
      //
      //   })
      //   .then(response => {
      //     this.getlist();
      //   })
      //   .catch(response => {
      //     console.log(response);
      //   })
    },
    //编辑
    update: function() {
      this.dialogFormVisible = false
      console.log(this);
      // this.loading = true;
      // this.$axios.post('https://localhost:8888/xxx', {
      //
      //   })
      //   .then(response => {
      //     this.getlist();
      //   })
      //   .catch(response => {
      //     console.log(response);
      //   })
    }
  }
}
</script>
<style>
.getbutton {
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>
