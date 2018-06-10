<template>
  <div id="root">
    <header>
      <nav class="navbar navbar-expand-xl">
        <div class="container">
          <a class="navbar-brand" href="#">
            <img class="img-fluid" src="~@/assets/images/logo.png" alt="" />
          </a>

          <div ref="icon" class="nav-icon" data-toggle="collapse" data-target="#navbarText">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <a class="nav-link" href="#">Tìm tên miền</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Tìm hiểu thêm</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Cách hoạt động</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Lấy cảm hứng</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>

    <router-view/>

    <footer>
      <div class="container">
        <div class="row">
          <div class="col-xl-12">
            <img class="logo" src="~@/assets/images/logo.png" alt=""/>
            <div class="about-us-links">
              <a class="link" href="#">Giới thiệu tên miền .com</a>
              <a class="link" href="#">Giới thiệu về verisign</a>
              <a class="link" href="#">Liên hệ chúng tôi</a>
            </div>
            <div class="socials">
              <a class="social" href="#">
                <img class="img-fluid" src="~@/assets/images/instagram.png" alt=""/>
              </a>
              <a class="social" href="#">
                <img class="img-fluid" src="~@/assets/images/twitter.png" alt=""/>
              </a>
              <a class="social" href="#">
                <img class="img-fluid" src="~@/assets/images/facebook.png" alt=""/>
              </a>
            </div>
            <div class="links">
              <a class="link" href="#">Thông báo pháp lý</a>
              <a class="link" href="#">Quyền riêng tư (Cập nhật)</a>
              <a class="link" href="#">Kho lưu trữ</a>
            </div>
          </div>
          <div class="col-xl-9 mx-auto">
            <p>© 2018 VeriSign, Inc. Mọi quyền đã được bảo lưu.</p>
            <p>VERISIGN, logo VERISIGN, và các thương hiệu, nhãn hiệu dịch vụ khác và các thiết kế đều là thương hiệu đã đăng ký hoặc chưa đăng ký của VeriSign, Inc. và các công ty con của mình tại Hoa Kỳ và các quốc gia khác.</p>
            <p>Tất cả các thương hiệu khác đều là tài sản của các chủ sở hữu tương ứng của chúng.</p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
  export default {
    name: 'Root',
    mounted () {
      let self = this

      self.$refs.icon.addEventListener('click', function () {
        this.classList.toggle('show')
      })
    }
  }
</script>

<style lang="scss" src="@/assets/scss/root.scss"></style>

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
      // background-color: rgba(#000000, 0.5);
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

    .nav-icon {
      position: relative;
      width: 1.75rem;
      height: 1.25rem;
      transform: rotate(0deg);
      transition: 0.5s ease-in-out;
      margin-left: auto;
      cursor: pointer;

      @media screen and (min-width: 1200px) {
        display: none;
      }

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

      &.show {

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

  footer {
    background-color: #0061a3;
    padding-top: 2rem;
    padding-bottom: 2rem;

    .logo {
      display: block;
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 2rem;
    }

    .about-us-links {
      text-align: center;
      margin-bottom: 2rem;

      .link {
        display: inline-block;
        min-width: 17rem;
        color: #ffffff;
        font-size: 0.875rem;
        font-weight: 700;
        text-transform: uppercase;
        line-height: 2.25;
        padding-left: 2.5rem;
        padding-right: 2.5rem;

        @media screen and (min-width: 600px) and (max-width: 1200px) {
          min-width: 15rem;
          padding-left: 1.75rem;
          padding-right: 1.75rem;
        }
        @media screen and (max-width: 600px) {
          display: block;
          min-width: unset;
        }
      }
    }

    .socials {
      text-align: center;
      margin-bottom: 2rem;

      .social {
        margin-left: 0.75rem;
        margin-right: 0.75rem;
      }
    }

    .links {
      text-align: center;
      margin-bottom: 2rem;

      .link {
        color: #ffffff;
        font-size: 0.75rem;
        font-weight: 600;
        text-transform: uppercase;
        line-height: 2.25;
        border-right: 0.125rem solid #ffffff;
        padding-left: 1.875rem;
        padding-right: 1.875rem;

        &:last-child {
          border-right: unset;
        }

        @media screen and (max-width: 600px) {
          display: block;
          border-right: unset;
        }
      }
    }

    p {
      color: #ffffff;
      font-size: 0.75rem;
      text-align: center;
    }
  }
</style>
