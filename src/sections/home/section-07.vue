<template>
  <section>
    <img class="deco-01" src="~@/assets/images/home/section-07/deco-01.png" alt=""/>

    <div class="section-content">
      <div class="container">
        <div class="row">
          <div class="col-xl-11 mx-auto">
            <div class="section-title">Lấy <span class="underline">cảm hứng</span> từ những câu chuyện thành công với tên miền<span class="com">.com</span></div>
          </div>
        </div>
        <div class="row">
          <div class="col-xl-12 mx-auto">
            <slick class="slick-container" :options="slick.options">
              <div>
        				<div class="slide">
                  <img class="avatar" src="~@/assets/images/home/section-07/user-01.png" alt=""/>
                  <div class="slide-content">
                    <div class="testimonial">"Với mục tiêu xây dựng lòng tin của khách hàng và mở rộng kinh doanh ra nước ngoài, trong tương lai gần, chúng tôi cần một tên miền uy tín và được cả thế giới công nhận như tên miền .com."</div>
                    <div class="card-visit">Ông Nguyễn Bá Toàn, Giám đốc công ty TNHH Thương mại Dasavina</div>
                  </div>
                </div>
        			</div>
              <div>
                <div class="slide">
                  <img class="avatar" src="~@/assets/images/home/section-07/user-01.png" alt=""/>
                  <div class="slide-content">
                    <div class="testimonial">"Với sứ mệnh trở thành một hãng hàng không quốc tế, tôi tin tưởng tên miền .com sẽ giúp củng cố mục tiêu này, đồng thời nâng cao giá trị và hình ảnh thương hiệu Vietjet."</div>
                    <div class="card-visit">Ông Desmond Lin, Giám đốc phát triển kinh doanh của Vietjet</div>
                  </div>
                </div>
        			</div>
              <div>
                <div class="slide">
                  <img class="avatar" src="~@/assets/images/home/section-07/user-01.png" alt=""/>
                  <div class="slide-content">
                    <div class="testimonial">"Tất cả những thương hiệu lớn trên thế giới đều sử dụng tên miền .com và đó là tên miền rất được tín nhiệm. Do đó, chúng tôi quyết định tận dụng sự tín nhiệm đối với tên miền .com để đảm bảo thương hiệu của mình được khách hàng tin cậy."</div>
                    <div class="card-visit">Anh Trần Hiệp, Tổng Giám đốc Sứ Sương</div>
                  </div>
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
            dots: false
          }
        }
      }
    },
    components: {
      'slick': Slick
    }
  }
</script>

<style lang="scss">
  .slick-prev, .slick-next {
    top: calc(50% - 2rem);
    z-index: 999;

    &:before {
      color: #0061a3;
      font-size: 2rem;
      font-family: unset;
    }

    @media screen and (max-width: 600px) {
      top: unset;
      bottom: 7rem;
      width: auto;
      height: auto
    }
  }
  .slick-prev {
    left: 5rem;

    @media screen and (max-width: 600px) {
      left: 10rem;
    }

    &:before {
      content: '\2190';
    }
  }
  .slick-next {
    right: 5rem;

    @media screen and (max-width: 600px) {
      right: 10rem;
    }

    &:before {
      content: '\2192';
    }
  }
</style>

<style lang="scss" scoped>
  section {
    position: relative;
    padding-top: 5rem;
    padding-bottom: 1rem;

    .section-content {

      .section-title {
        position: relative;
        color: #0061a3;
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

          &:before {
            content: '';
            position: absolute;
            background-color: #cbe9fb;
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
              width: 7.5rem;
              height: 1rem;
            }
          }
        }

        .com {
          color: #99d4f5;
        }
      }
    }

    .slick-container {

      @media screen and (max-width: 600px) {
        margin-left: -15px;
        margin-right: -15px;
      }
    }

    .slide {
      display: flex;
      align-items: flex-start;
      background-color: #99d4f5;
      border-radius: 2.5rem;
      box-shadow: 0 2rem 2rem 0 rgba(#000000, 0.1);
      padding: 5rem 10rem;
      margin-left: 1rem;
      margin-right: 1rem;
      margin-bottom: 4rem;

      @media screen and (min-width: 600px) and (max-width: 1200px) {
        display: block;
      }
      @media screen and (max-width: 600px) {
        display: block;
        height: 39rem;
        padding: 4rem 2.5rem 8rem;
        margin-left: calc(0.5rem + 15px);
        margin-right: calc(0.5rem + 15px);
      }

      .avatar {
        margin-right: 1.5rem;

        @media screen and (max-width: 900px) {
          margin-left: auto;
          margin-right: auto;
          margin-bottom: 2rem;
        }

        @media screen and (max-width: 600px) {
          max-width: 50%;
        }
      }

      .slide-content {
        flex: 1;

        .testimonial {
          color: #ffffff;
          font-size: 1.25rem;
          font-weight: 700;
          margin-bottom: 1.25rem;

          @media screen and (min-width: 600px) and (max-width: 1200px) {
            text-align: center;
          }
          @media screen and (max-width: 600px) {
            font-size: 1rem;
            text-align: center;
            margin-bottom: 2rem;
          }
        }
        .card-visit {
          color: #0061a3;
          font-size: 1.25rem;
          font-weight: 700;

          @media screen and (min-width: 600px) and (max-width: 1200px) {
            text-align: center;
          }
          @media screen and (max-width: 600px) {
            font-size: 1rem;
            text-align: center;
          }
        }
      }
    }

    .deco-01 {
      position: absolute;
      bottom: 0;
      right: 0;
    }
  }
</style>
