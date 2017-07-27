<template>
  <div id="app">
    <Top></Top>
    <Left></Left>
    <router-view></router-view>
  </div>
</template>

<script>

import Top from './components/common/Top.vue'
import Left from './components/common/Left.vue'

export default {
  name: 'app',
  components: {
    Top,
    Left
  }
}
</script>