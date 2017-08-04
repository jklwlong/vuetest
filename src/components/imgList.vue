<template>
<div>
    <ul id ="imgs">
      <li class="fl ml" v-for="book in books">
        <div><img class="imgsize" :src="book.src"></div>
        <div class="al mtm"><a href="javascript:void(0);">{{book.name}}</a></div>
      </li>
    </ul>
</div>
</template>

<script>
export default {
  name: 'imgList',
  data() {
    return {
      books: [],
      loading: false,
      currentPage: 1,
      total: 0
    }
  },
  created() {
    this.loading = true;
  },
  mounted() {
    this.getlist();
  },
  methods: {
    getlist: function() {
      this.$axios.get('https://localhost:8888/users', {

        })
        .then(response => {
          this.books = response.data.books;
          this.total = response.data.books.length;
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
		li {
			list-style-type:none;
		}
		a {
			color: #4c4c4c;
			text-decoration: none;
		}
		.fl{
			float: left;
		}
		.imgsize{
			width: 142px;
			height: 190px;
		}
		.ml{
			margin-left: 80px;
		}
		.mt{
			margin-top: 30px;
		}
		.mtm{
			margin-top: 10px;
		}
		.al{
			width: 142px;
			text-align:left;
			text-overflow: ellipsis;
			white-space: nowrap;
			overflow: hidden;
		}
    #imgs{
      margin-left: -90px;
    }
	</style>
