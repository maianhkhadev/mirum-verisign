<template>
  <section>
    <div class="container">
      <div class="section-content">
        <div class="row">
          <div class="col-xl-12 col-md-12 col-10 mx-auto">
            <div class="section-title">Lợi ích của việc có <span class="underline">tên miền</span> <span class="com">.com</span>?</div>
          </div>
        </div>

        <div class="row d-none d-md-flex">
          <div class="col-xl-3 col-md-4 col-6">
            <div class="block">
              <img class="img-fluid" src="~@/assets/images/home/section-03/im-01.png" alt=""/>
              <div class="content">Tên miền .com không hề đắt như bạn nghĩ</div>
            </div>
          </div>
          <div class="col-xl-3 col-md-4 col-6">
            <div class="block">
              <img class="img-fluid" src="~@/assets/images/home/section-03/im-02.png" alt=""/>
              <div class="content">Đăng kí cực đơn giản</div>
            </div>
          </div>
          <div class="col-xl-3 col-md-4 col-6">
            <div class="block">
              <img class="img-fluid" src="~@/assets/images/home/section-03/im-03.png" alt=""/>
              <div class="content">Kết nối tên miền đến mạng xã hội</div>
            </div>
          </div>
          <div class="col-xl-3 col-md-4 col-6">
            <div class="block">
              <img class="img-fluid" src="~@/assets/images/home/section-03/im-04.png" alt=""/>
              <div class="content">Kết nối tên miền đến trang thương mại điện tử</div>
            </div>
          </div>
          <div class="col-xl-3 col-md-4 col-6 ml-xl-auto">
            <div class="block">
              <img class="img-fluid" src="~@/assets/images/home/section-03/im-05.png" alt=""/>
              <div class="content">Tạo đuôi email độc nhất cho thương hiệu</div>
            </div>
          </div>
          <div class="col-xl-3 col-md-4 col-6 mr-xl-auto">
            <div class="block">
              <img class="img-fluid" src="~@/assets/images/home/section-03/im-06.png" alt=""/>
              <div class="content">Tạo trang web</div>
            </div>
          </div>
        </div>

        <div class="row d-flex d-md-none">
          <div class="col-12">
            <slick class="slick-container" :options="slick.options">
              <div>
                <div class="block">
                  <img class="mx-auto" src="~@/assets/images/home/section-03/im-01.png" alt=""/>
                  <div class="content">Tên miền .com không hề đắt như bạn nghĩ</div>
                </div>
        			</div>
              <div>
                <div class="block">
                  <img class="mx-auto" src="~@/assets/images/home/section-03/im-02.png" alt=""/>
                  <div class="content">Đăng kí cực đơn giản</div>
                </div>
        			</div>
              <div>
                <div class="block">
                  <img class="mx-auto" src="~@/assets/images/home/section-03/im-03.png" alt=""/>
                  <div class="content">Kết nối tên miền đến mạng xã hội</div>
                </div>
        			</div>
              <div>
                <div class="block">
                  <img class="mx-auto" src="~@/assets/images/home/section-03/im-04.png" alt=""/>
                  <div class="content">Kết nối tên miền đến trang thương mại điện tử</div>
                </div>
        			</div>
              <div>
                <div class="block">
                  <img class="mx-auto" src="~@/assets/images/home/section-03/im-05.png" alt=""/>
                  <div class="content">Tạo đuôi email độc nhất cho thương hiệu</div>
                </div>
        			</div>
              <div>
                <div class="block">
                  <img class="mx-auto" src="~@/assets/images/home/section-03/im-06.png" alt=""/>
                  <div class="content">Tạo trang web</div>
                </div>
        			</div>
        		</slick>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import Slick from '@/libraries/slick'

  export default {
    data () {
      return {
        slick: {
          options: {
            dots: true,
            arrows: false,
            slidesToShow: 2
          }
        }
      }
    },
    components: {
      'slick': Slick
    }
  }
</script>

<style lang="scss" scoped>
  section {
    padding-top: 5rem;
    padding-bottom: 5rem;

    .section-content {
      background-color: #0061a3;
      border-radius: 5rem;
      box-shadow: 0 2rem 8rem 0 rgba(#000000, 0.15);
      padding: 4rem 4rem 2rem;

      @media screen and (min-width: 600px) and (max-width: 1200px) {
        padding-left: 15px;
        padding-right: 15px;
      }
      @media screen and (max-width: 600px) {
        border-radius: unset;
        padding-left: 15px;
        padding-right: 15px;
        margin-left: -15px;
        margin-right: -15px;
      }

      .section-title {
        position: relative;
        color: #ffffff;
        font-size: 3.25rem;
        font-weight: 800;
        text-align: center;
        margin-bottom: 4rem;

        @media screen and (min-width: 600px) and (max-width: 1200px) {
          font-size: 2.133rem;
        }
        @media screen and (max-width: 600px) {
          font-size: 1.429rem;
        }

        .underline {
          position: relative;
          display: inline-block;
          z-index: 1000;

          &:before {
            content: '';
            position: absolute;
            background-color: #4b9ace;
            top: 2.75rem;
            left: 0;
            width: 15rem;
            height: 2rem;
            border-radius: 1.25rem;
            z-index: -1;

            @media screen and (min-width: 600px) and (max-width: 1200px) {
              top: 1.75rem;
              width: 10rem;
              height: 1.5rem;
            }
            @media screen and (max-width: 600px) {
              top: 1rem;
              left: 0;
              width: 7.5rem;
              height: 1rem;
            }
          }
        }

        .com {
          color: #99d4f5;
        }
      }

      .slick-container {

        @media screen and (max-width: 600px) {
          margin-left: -15px;
          margin-right: -15px;
        }
      }

      .block {
        text-align: center;
        margin-bottom: 2rem;

        @media screen and (max-width: 600px) {
          margin-left: 0.75rem;
          margin-right: 0.75rem;
        }

        img {
          margin-bottom: 1.25rem;
        }
        .content {
          color: #ffffff;
          font-size: 1.25rem;
        }

        @media screen and (max-width: 600px) {

          img {
            max-width: 75%;
          }
          .content {
            font-size: 1rem;
          }
        }
      }
    }
  }
</style>
