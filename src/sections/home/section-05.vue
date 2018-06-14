<template>
  <section>
    <div class="container">
      <div class="section-content">
        <div class="section-title">Cách tên miền <span class="com">.com</span> giúp bạn giữ vững <span class="underline">thương hiệu</span> online</div>

        <div class="row d-none d-md-flex">
          <div class="col-xl-4 col-md-6 col-9 mx-auto">
            <div class="block">
              <img class="img-fluid" src="~@/assets/images/home/section-05/im-01.png" alt=""/>
              <div class="title">Giúp thương hiệu được nhận diện nhanh chóng</div>
              <div class="content">Tên miền .com là một trong những tên miền dễ nhận dạng và được tin cậy nhất thế giới. Hãy tận dụng ưu thế của tên miền .com</div>
            </div>
          </div>
          <div class="col-xl-4 col-md-6 col-9 mx-auto">
            <div class="block">
              <img class="img-fluid" src="~@/assets/images/home/section-05/im-02.png" alt=""/>
              <div class="title">Giúp khách hàng tìm thấy bạn dễ hơn</div>
              <div class="content">Tên miền .com đưa khách hàng đến thẳng trang mạng xã hội hoặc trang thương mại điện tử của bạn.</div>
            </div>
          </div>
          <div class="col-xl-4 col-md-6 col-9 mx-auto">
            <div class="block">
              <img class="img-fluid" src="~@/assets/images/home/section-05/im-03.png" alt=""/>
              <div class="title">Giúp bạn có uy tín hơn</div>
              <div class="content">Tên miền .com là tiêu chuẩn quốc tế. Hàng triệu cá nhân và doanh nghiệp khắp thế giới đã tin dùng tên miền .com cho thương hiệu online của mình.</div>
            </div>
          </div>
        </div>

        <div class="row d-flex d-md-none">
          <div class="col-12">
            <slick class="slick-container" :options="slick.options">
              <div>
                <div class="block">
                  <img class="mx-auto" src="~@/assets/images/home/section-05/im-01.png" alt=""/>
                  <div class="title">Giúp thương hiệu được nhận diện nhanh chóng</div>
                  <div class="content">Tên miền .com là một trong những tên miền dễ nhận dạng và được tin cậy nhất thế giới. Hãy tận dụng ưu thế của tên miền .com</div>
                </div>
        			</div>
              <div>
                <div class="block">
                  <img class="mx-auto" src="~@/assets/images/home/section-05/im-02.png" alt=""/>
                  <div class="title">Giúp khách hàng tìm thấy bạn dễ hơn</div>
                  <div class="content">Tên miền .com đưa khách hàng đến thẳng trang mạng xã hội hoặc trang thương mại điện tử của bạn.</div>
                </div>
        			</div>
              <div>
                <div class="block">
                  <img class="mx-auto" src="~@/assets/images/home/section-05/im-03.png" alt=""/>
                  <div class="title">Giúp bạn có uy tín hơn</div>
                  <div class="content">Tên miền .com là tiêu chuẩn quốc tế. Hàng triệu cá nhân và doanh nghiệp khắp thế giới đã tin dùng tên miền .com cho thương hiệu online của mình.</div>
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
            dots: false,
            arrows: false,
            centerMode: true,
            centerPadding: '20%'
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

      .slick-container {

        @media screen and (max-width: 600px) {
          margin-left: -15px;
          margin-right: -15px;
        }
      }

      .col-xl-4 {

        &:last-child {

          .block {
            margin-bottom: unset;
          }
        }
      }

      .block {
        text-align: center;
        padding: 1.25rem;
        
        @media screen and (min-width: 600px) and (max-width: 1200px) {
          margin-bottom: 2rem;
        }
        @media screen and (max-width: 600px) {
          margin-left: 0.5rem;
          margin-right: 0.5rem;
        }

        img {
          margin-bottom: 1.25rem;
        }
        .title {
          min-height: 3.75rem;
          color: #0061a3;
          font-size: 1.25rem;
          font-weight: 700;
          text-transform: uppercase;
          margin-bottom: 1.25rem;
        }
        .content {
          color: #707070;
          font-size: 1.25rem;
        }

        @media screen and (max-width: 600px) {

          img {
            max-width: 75%;
          }
          .title {
            min-height: unset;
            font-size: 1rem;
          }
          .content {
            font-size: 1rem;
          }
        }
      }
    }
  }
</style>
