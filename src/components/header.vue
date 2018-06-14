<template>
  <header>
    <nav class="navbar navbar-expand-xl">
      <div class="container">
        <a class="navbar-brand" href="#">
          <img class="img-fluid" src="~@/assets/images/logo.png" alt="" />
        </a>

        <div class="collapse navbar-collapse">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link" href="#" v-on:click.prevent="scrollToSection('block-search-domain')">Tìm tên miền</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" v-on:click.prevent="scrollToSection('section-03')">Tìm hiểu thêm</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" v-on:click.prevent="scrollToSection('section-05')">Cách hoạt động</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" v-on:click.prevent="scrollToSection('section-07')">Lấy cảm hứng</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
  export default {
    methods: {
      scrollToSection: function (id) {
        let section = document.querySelector(`.${id}`)
        $('html, body').animate({ scrollTop: section.offsetTop }, 500)
      }
    }
  }
</script>

<style lang="scss" scoped>
  header {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1080;
    padding-top: 1.25rem;
    padding-bottom: 1.25rem;

    @media screen and (max-width: 600px) {
      padding-top: 1rem;
      padding-bottom: 1rem;
    }

    .navbar {
      padding: 0 15px;
    }

    img {
      width: 7.25rem;

      @media screen and (max-width: 600px) {
        width: 3rem;
      }
    }

    .navbar-nav {

      @media only screen and (min-width: 1400px) {
        margin-right: -5rem;
      }
      @media only screen and (max-width: 1200px) {
        margin-top: 1.25rem;
      }

      .nav-item {

        .nav-link {
          color: #ffffff;
          font-size: 0.875rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.25rem;
          padding: 2.25rem;

          @media only screen and (max-width: 1200px) {
            padding: 1rem 0.5rem;
          }

          &:hover {
            text-decoration: underline;
          }

          &:last-child {
            padding-right: 0;
          }
        }
      }
    }
  }
</style>
