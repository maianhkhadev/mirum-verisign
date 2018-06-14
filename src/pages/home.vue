<template>
  <main class="main">
    <section-01></section-01>

    <div class="container block-search-domain">
      <search-domain class="d-none d-md-block"></search-domain>
      <search-domain-mobile class="d-block d-md-none"></search-domain-mobile>
    </div>

    <section-02 class="section-02"></section-02>

    <section-03 class="section-03"></section-03>

    <section-04 class="section-04"></section-04>

    <section-05 class="section-05"></section-05>

    <section-06 class="section-06"></section-06>

    <section-07 class="section-07"></section-07>
  </main>
</template>

<script>
  import store from '@/store/index'
  import Section01 from '@/sections/home/section-01'
  import Section02 from '@/sections/home/section-02'
  import Section03 from '@/sections/home/section-03'
  import Section04 from '@/sections/home/section-04'
  import Section05 from '@/sections/home/section-05'
  import Section06 from '@/sections/home/section-06'
  import Section07 from '@/sections/home/section-07'
  import SearchDomain from '@/components/search-domain'
  import SearchDomainMobile from '@/components/search-domain-mobile'

  export default {
    data () {
      return {

      }
    },
    components: {
      'section-01': Section01,
      'section-02': Section02,
      'section-03': Section03,
      'section-04': Section04,
      'section-05': Section05,
      'section-06': Section06,
      'section-07': Section07,
      'search-domain': SearchDomain,
      'search-domain-mobile': SearchDomainMobile
    }
  }
</script>

<style lang="scss" scoped>

</style>
