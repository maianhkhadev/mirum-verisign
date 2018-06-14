<template>
  <section>
    <div class="section-content">
      <div class="container">
        <div class="row">
          <div class="col-xl-10 col-md-9 mx-auto">
            <div class="section-title">Giữ vững <span class="underline">thương hiệu</span> online với tên miền <span class="com">.com</span></div>
          </div>
        </div>
      </div>

      <slick :options="slick.options">
        <div class="name">
          <slide-video videoId="JIPQj35Y7h8">
            <template slot="title">Tên thương hiệu</template>
            <template slot="content">Đăng kí tên miền .com giúp bạn giữ vững tên thương hiệu online của mình. Hãy nhanh chóng đăng kí tên miền .com mà bạn muốn ngay!</template>
          </slide-video>
  			</div>
        <div class="name">
          <slide-video videoId="JIPQj35Y7h8">
            <template slot="title">Nét riêng thương hiệu</template>
            <template slot="content">Đăng kí tên miền .com và đưa khách hàng đến thẳng thương hiệu của bạn.</template>
          </slide-video>
  			</div>
        <div class="name">
          <slide-video videoId="JIPQj35Y7h8">
            <template slot="title">Uy tín thương hiệu</template>
            <template slot="content">Đăng kí tên miền .com và giữ vững uy tín thương hiệu của bạn.</template>
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
  .section-06 {

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
  }
</style>
