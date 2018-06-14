<template>
  <section>
    <div class="section-content">
      <div class="container">
        <div class="row">
          <div class="col-xl-12 col-md-12 col-10 mx-auto">
            <div class="section-title">3 lý do bạn nên có một <span class="underline">tên miền</span> <span class="com">.com</span></div>
          </div>
        </div>
      </div>

      <slick :options="slick.options">
  			<div>
          <slide-video videoId="JIPQj35Y7h8">
            <template slot="title">Đăng kí dễ dàng</template>
            <template slot="content">Đăng kí tên miền .com rất dễ dàng với chi phí hợp lý.</template>
          </slide-video>
  			</div>
        <div>
          <slide-video videoId="JIPQj35Y7h8">
            <template slot="title">Có địa chỉ email chuyên nghiệp</template>
            <template slot="content">Bạn có thể tạo cho mình một địa chỉ email chuyên nghiệp mà không cần website.</template>
          </slide-video>
  			</div>
        <div>
  				<slide-video videoId="JIPQj35Y7h8">
            <template slot="title">Kết nối đơn giản</template>
            <template slot="content">Kết nối tên miền .com đến các mạng xã hội và trang thương mại điện tử đơn giản chỉ với một cú click chuột.</template>
          </slide-video>
  			</div>
  		</slick>
    </div>
  </section>
</template>

<script>
  import Slick from '@/libraries/slick'
  import SlideVideo from '@/components/slide-video'

  export default {
    data () {
      return {
        slick: {
          options: {
            dots: false,
            arrows: false,
            centerMode: true,
            centerPadding: '25%',
            responsive: [
              {
                breakpoint: 900,
                settings: {
                  centerPadding: '10%'
                }
              }, {
                breakpoint: 600,
                settings: {
                  dots: true,
                  centerMode: false
                }
              }
            ]
          }
        }
      }
    },
    components: {
      'slick': Slick,
      'slide-video': SlideVideo
    }
  }
</script>

<style lang="scss">
  .section-04 {

    .slick-dots {
      bottom: 1.5rem;
    }
  }
</style>

<style lang="scss" scoped>
  section {
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
              width: 6.5rem;
              height: 1rem;
            }
          }
        }

        .com {
          color: #99d4f5;
        }
      }
    }
  }
</style>
