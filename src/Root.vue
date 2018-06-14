<template>
  <div id="root">
    <root-header class="d-none d-xl-block"></root-header>
    <root-header-mobile class="d-block d-xl-none"></root-header-mobile>

    <router-view/>

    <footer>
      <div class="container">
        <div class="row">
          <div class="col-xl-12">
            <img class="logo" src="~@/assets/images/logo.png" alt=""/>
            <div class="about-us-links">
              <a class="link" href="https://www.verisign.com/vi_VN/domain-names/com-domain-names/index.xhtml?section=overview" target="_blank">Giới thiệu tên miền .com</a>
              <a class="link" href="https://www.verisign.com/vi_VN/company-information/index.xhtml" target="_blank">Giới thiệu về verisign</a>
              <a class="link" href="https://www.verisign.com/vi_VN/company-information/contact-us/index.xhtml" target="_blank">Liên hệ chúng tôi</a>
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
              <a class="link" href="https://www.verisign.com/vi_VN/legal-notices/index.xhtml" target="_blank">Thông báo pháp lý</a>
              <a class="link" href="https://www.verisign.com/vi_VN/privacy/index.xhtml" target="_blank">Quyền riêng tư (Cập nhật)</a>
              <a class="link" href="https://www.verisign.com/vi_VN/verisign-repository/index.xhtml" target="_blank">Kho lưu trữ</a>
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

    <a ref="back" class="back-to-top" href="#" v-on:click.prevent="back">
      <img class="img-fluid" src="~@/assets/images/back-to-top.png" alt=""/>
    </a>
  </div>
</template>

<script>
  import Header from '@/components/header'
  import HeaderMobile from '@/components/header-mobile'

  export default {
    name: 'Root',
    methods: {
      back: function () {
        $('html, body').animate({ scrollTop: 0 }, 500, function () {
          window.doScrollAnimation = false
        })
      },
      visibleBackToTop: function (scrollY) {
        let self = this

        if (scrollY >= 800) {
          self.$refs.back.classList.add('visible')
        } else {
          self.$refs.back.classList.remove('visible')
        }
      }
    },
    components: {
      'root-header': Header,
      'root-header-mobile': HeaderMobile
    },
    mounted () {
      let self = this

      document.addEventListener('scroll', function (e) {
        self.visibleBackToTop(window.scrollY)
      })

      self.visibleBackToTop(window.scrollY)

      var tag = document.createElement('script')
      tag.src = 'https://www.youtube.com/iframe_api'
      var firstScriptTag = document.getElementsByTagName('script')[0]
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)
    }
  }
</script>

<style lang="scss" src="@/assets/scss/root.scss"></style>

<style lang="scss" scoped>
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

  .back-to-top {
    position: fixed;
    bottom: 2.5rem;
    right: -8rem;
    width: 8rem;
    transition: all 0.25s ease-in;

    @media screen and (max-width: 600px) {
      width: 5rem;
    }

    &.visible {
      right: 0;
    }
  }
</style>
