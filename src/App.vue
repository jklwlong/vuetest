<template>
  <div id="app">

      <router-view></router-view>
    </transition>

  </div>
</template>

<script>

  export default {
    name: 'app',
    components: {
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
</style>
</script>
