<template>
  <div>
    <h1>welcome</h1>
    User:{{username}}
    Query:{{q}}
    <router-view></router-view>
    <router-view name='body'></router-view>
  </div>
</template>

<script>
export default {
  props: ['username', 'q'],
  name: 'User',
  beforeRouteEnter(to, from, next) {
    console.log(`beforeRouteEnter: ${to.params.username}`)
    next()
  },
  beforeRouteUpdate(to, from, next) {
    console.log(`beforeRouteUpdate: ${to.params.username}`)
    next()
  },
  beforeRouteLeave(to, from, next) {
    console.log(`beforeRouteLeave: ${from.params.username}`)
    next()
  },
}
</script>

<style lang="less" scoped>
</style>