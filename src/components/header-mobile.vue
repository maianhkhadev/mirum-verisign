<template>
  <header>
    <nav class="navbar">
      <div class="container">
        <a class="navbar-brand" href="#">
          <img class="img-fluid" src="~@/assets/images/logo.png" alt="" />
        </a>

        <div ref="icon" class="nav-icon">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>

    <div ref="nav" class="navbar-fixed">
      <ul class="navbar-nav">
        <li class="nav-item">
          <img class="brand" src="~@/assets/images/logo.png" alt="" />
        </li>
        <li class="nav-item">
          <a class="nav-link underline" href="#" v-on:click.prevent="scrollToSection('block-search-domain')">Tìm tên miền</a>
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
        <li class="nav-item">
          <div ref="close" class="nav-icon close">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
  export default {
    methods: {
      scrollToSection: function (id) {
        let self = this
        
        let section = document.querySelector(`.${id}`)
        $('html, body').animate({ scrollTop: section.offsetTop }, 500)

        document.querySelector('body').classList.remove('no-scroll')
        self.$refs.nav.classList.remove('show')
      }
    },
    mounted () {
      let self = this

      self.$refs.icon.addEventListener('click', function () {
        document.querySelector('body').classList.add('no-scroll')
        self.$refs.nav.classList.add('show')
      })
      self.$refs.close.addEventListener('click', function () {
        document.querySelector('body').classList.remove('no-scroll')
        self.$refs.nav.classList.remove('show')
      })
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
      width: 5rem;
    }

    .nav-icon {
      position: relative;
      width: 1.75rem;
      height: 1.25rem;
      transform: rotate(0deg);
      transition: 0.5s ease-in-out;
      margin-left: auto;
      cursor: pointer;

      span {
        display: block;
        position: absolute;
        left: 0;
        width: 1.75rem;
        height: 0.125rem;
        background-color: #ffffff;
        transform: rotate(0deg);
        transition: .25s ease-in-out;
        opacity: 1;

        &:nth-child(1) {
          top: 0;
        }
        &:nth-child(2), &:nth-child(3) {
          top: 0.5625rem;
        }
        &:nth-child(4) {
          top: 1.125rem;
        }
      }

      &.close {
        margin-right: auto;

        span:nth-child(1) {
          top: 0.5625rem;
          left: 50%;
          width: 0%;
        }
        span:nth-child(2) {
          transform: rotate(45deg);
        }
        span:nth-child(3) {
          transform: rotate(-45deg);
        }
        span:nth-child(4) {
          top: 0.5625rem;
          left: 50%;
          width: 0%;
        }
      }
    }

    .navbar-fixed {
      position: fixed;
      background-color: #0060a6;
      top: 0;
      left: -100vw;
      width: 100vw;
      height: 100vh;
      transition: all 0.25s ease-in-out;
      padding-top: 6rem;
      padding-bottom: 6rem;

      &.show {
        left: 0;
      }

      .brand {
        width: 7.25rem;
        margin-bottom: 3rem;
      }
      .close {
        width: 1.5rem;
        margin-top: 3rem;
      }
    }

    .navbar-nav {
      text-align: center;

      .nav-item {

        .underline {
          position: relative;
          display: inline-block;
          z-index: 1000;

          &:before {
            content: '';
            position: absolute;
            background-color: #4b9ace;
            top: 2rem;
            left: -0.75rem;
            width: 7.5rem;
            height: 1.25rem;
            border-radius: 1.25rem;
            z-index: -1;
          }
        }

        .nav-link {
          color: #ffffff;
          font-size: 0.875rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.25rem;
          padding: 1.5rem 0.5rem;
        }
      }
    }
  }
</style>
