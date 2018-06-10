<template>
  <section>
    <div class="section-content">
      <div class="container">
        <div class="row">
          <div class="col-xl-10 col-md-9 mx-auto">
            <div class="section-title">Giữ vững thương hiệu online với tên miền <span class="com">.com</span></div>
          </div>
        </div>
      </div>

      <slick :options="slick.options">
        <div>
  				<div class="slide">
            <video>
              <source src="~@/assets/videos/demo.mp4" type="video/mp4">
              Your browser does not support HTML5 video.
            </video>
            <div class="slide-footer">
              <div class="title">Tên thương hiệu</div>
              <div class="content">Đăng kí tên miền .com giúp bạn giữ vững tên thương hiệu online của mình. Hãy nhanh chóng đăng kí tên miền .com mà bạn muốn ngay hôm nay!</div>
            </div>
          </div>
  			</div>
        <div>
  				<div class="slide">
            <video>
              <source src="~@/assets/videos/demo.mp4" type="video/mp4">
              Your browser does not support HTML5 video.
            </video>
            <div class="slide-footer">
              <div class="title">Nét riêng thương hiệu</div>
              <div class="content">Đăng kí tên miền .com và đưa khách hàng đến thẳng thương hiệu của bạn.</div>
            </div>
          </div>
  			</div>
        <div>
  				<div class="slide">
            <video>
              <source src="~@/assets/videos/demo.mp4" type="video/mp4">
              Your browser does not support HTML5 video.
            </video>
            <div class="slide-footer">
              <div class="title">Uy tín thương hiệu</div>
              <div class="content">Đăng kí tên miền .com và giữ vững uy tín thương hiệu của bạn.</div>
            </div>
          </div>
  			</div>
  		</slick>
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

        &:before {
          content: '';
          position: absolute;
          background-color: #99d4f5;
          top: 2.5rem;
          left: 36.5rem;
          width: 15rem;
          height: 2rem;
          border-radius: 1.25rem;
          z-index: -1;

          @media screen and (min-width: 600px) and (max-width: 1200px) {
            top: 2rem;
            left: 14rem;
            width: 10rem;
            height: 1.5rem;
          }
          @media screen and (max-width: 600px) {
            top: 1rem;
            left: 4.25rem;
            width: 7.5rem;
            height: 1.25rem;
          }
        }

        .com {
          color: #99d4f5;
        }
      }

      .slide {
        position: relative;
        height: 32rem;
        border-radius: 2.5rem;
        margin-left: 0.5rem;
        margin-right: 0.5rem;
        overflow: hidden;

        @media screen and (max-width: 600px) {
          height: 28rem;
        }

        video {
          position: absolute;
          top: 0;
          left: 50%;
          width: 100%;
          transform: translateX(-50%);

          @media screen and (max-width: 600px) {
            width: 130%;
          }
        }
        .slide-footer {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          background-color: #0061a3;
          padding: 2rem 5rem;

          @media screen and (min-width: 600px) and (max-width: 1200px) {
            padding: 2rem 4rem;
          }
          @media screen and (max-width: 600px) {
            padding: 2rem;
          }

          .title {
            color: #ffffff;
            font-size: 1.25rem;
            font-weight: 700;
            text-align: center;
            text-transform: uppercase;
            margin-bottom: 0.75rem;

            @media screen and (max-width: 600px) {
              font-size: 1rem;
              margin-bottom: 0.5rem;
            }
          }
          .content {
            height: 5rem;
            color: #ffffff;
            font-size: 1.25rem;
            text-align: center;

            @media screen and (max-width: 600px) {
              font-size: 1rem;
            }
          }
        }
      }
    }
  }
</style>
