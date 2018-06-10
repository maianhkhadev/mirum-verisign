<template>
  <section>
    <img class="deco-01" src="~@/assets/images/home/section-01/circle.png" alt=""/>

    <div class="container">
      <div class="row">
        <div class="col-xl-4 ml-auto">
          <img class="img-fluid title d-none d-md-block ml-auto" src="~@/assets/images/home/section-01/title.png" alt=""/>
          <img class="img-fluid title d-block d-md-none ml-auto" src="~@/assets/images/home/section-01/title-mobile.png" alt=""/>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    data () {
      return {

      }
    }
  }
</script>

<style lang="scss" scoped>
  section {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    background-image: url('~@/assets/images/home/section-01/bim.jpg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    height: 45rem;
    overflow: hidden;

    @media screen and (max-width: 600px) {
      background-position: 35% 50%;
      height: calc(100vh - 12rem);
    }

    .title {

      @media screen and (max-width: 350px) {
        width: 12rem;
      }
    }

    .deco-01 {
      position: absolute;
      top: 0;
      right: 0;
      width: auto;
      height: 100%;

      @media screen and (min-width: 600px) and (max-width: 1200px) {
        right: -10rem;
      }
      @media screen and (max-width: 600px) {
        display: none;
      }
    }
  }
</style>
