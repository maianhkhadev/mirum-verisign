<template>
  <div id="root">
    <header>
      <div class="container">
        <div class="row">
          <div class="col-xl-2 col-3">
            <a href="#">
              <img class="img-fluid" src="~@/assets/images/logo.png" alt="The Bloom">
            </a>
          </div>
          <div class="col-3 align-self-center d-block d-sm-none">
            <div class="nav-icon">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div class="col-10">
            <ul class="nav">
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
      </div>
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
  name: 'Root'
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

    img {

    }

    .nav-icon {
      float: right;
      display: none;

      @media only screen and (max-width: 600px) {
        display: block;
      }
    }

    .nav {
      justify-content: flex-end;

      @media only screen and (min-width: 1400px) {
        margin-right: -5rem;
      }
      @media only screen and (max-width: 1200px) {
        justify-content: flex-start;
        margin-top: 1.25rem;
      }
      @media only screen and (max-width: 600px) {
        display: none;
        flex-direction: column;
      }

      .nav-item {

        .nav-link {
          color: #ffffff;
          font-size: 0.875rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.25rem;
          padding: 2.25rem;

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
