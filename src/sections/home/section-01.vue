<template>
  <section>
    <img class="deco-01" src="~@/assets/images/home/section-01/circle.png" alt=""/>

    <div class="container">
      <div class="row">
        <div class="col-xl-4 ml-auto">
          <img class="img-fluid d-block" src="~@/assets/images/home/section-01/title.png" alt=""/>
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

    .deco-01 {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
    }
  }
</style>
