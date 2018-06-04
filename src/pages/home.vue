<template>
  <main class="main">
    <button class="btn btn-dark" v-on:click="searchDomain">test</button>
  </main>
</template>

<script>
  import store from '@/store/index'

  export default {
    data () {
      return {

      }
    },
    methods: {
      searchDomain: function () {
        console.log(store)
        store.dispatch('domains/search', { name: 'italianrestaurantintown' })
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
