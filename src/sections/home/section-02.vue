<template>
  <section>
    <div class="container">
      <div class="section-content">
        <div class="row">
          <div class="col-xl-12 col-10 mx-auto">
            <div class="section-title">Làm thế nào để đăng ký <span class="underline">tên miền</span> <span class="com">.com</span>?</div>
          </div>
        </div>

        <div class="row">
          <div class="col-xl-4 col-md-6 col-10 mx-auto">
            <div class="block">
              <img class="img-fluid" src="~@/assets/images/home/section-02/im-01.png" alt=""/>
              <div class="title">Tìm kiếm</div>
              <div class="content">Tìm cho mình một tên miền dễ nhớ và độc đáo, đại diện cho thương hiệu kinh doanh của bạn.</div>
            </div>
          </div>
          <div class="col-xl-4 col-md-6 col-10 mx-auto">
            <div class="block">
              <img class="img-fluid" src="~@/assets/images/home/section-02/im-02.png" alt=""/>
              <div class="title">Kiểm tra</div>
              <div class="content">Kiểm tra tính khả dụng của tên miền. Nếu tên miền bạn muốn không còn khả dụng, hãy tham khảo gợi ý từ Verisign.</div>
            </div>
          </div>
          <div class="col-xl-4 col-md-6 col-10 mx-auto">
            <div class="block">
              <img class="img-fluid" src="~@/assets/images/home/section-02/im-03.png" alt=""/>
              <div class="title">Đăng ký</div>
              <div class="content">Đăng ký tên miền ngay và giữ vững thương hiệu online của bạn.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    data () {
      return {

      }
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
              width: 6.5rem;
              height: 1rem;
            }
          }
        }

        .com {
          color: #99d4f5;
        }
      }

      .col-xl-4 {
        border-right: 0.0625rem solid #99d4f5;

        &::after {
          content: '\2192';
          position: absolute;
          color: #000000;
          background-color: #ffffff;
          top: 50%;
          right: -0.75rem;
          transform: translateY(-50%);
          font-size: 1.5rem;
          padding: 1.5rem 0;
        }

        &:first-child {

          .block {
            margin-top: unset;
          }
        }

        &:last-child {
          border-right: unset;

          &::after {
            content: '';
          }

          .block {
            margin-bottom: unset;
          }
        }

        @media screen and (min-width: 600px) and (max-width: 1200px) {
          border-right: unset;

          &::after {
            content: '';
          }

          .block {
            margin-top: unset;
          }
        }
        @media screen and (max-width: 600px) {
          border-right: unset;
          border-bottom: 0.125rem solid #99d4f5;

          &::after {
            content: '\2193';
            top: unset;
            left: 50%;
            right: unset;
            bottom: -1rem;
            transform: translateX(-50%);
            font-size: 1.5rem;
            padding: 0 1.5rem;
          }

          &:last-child {
            border-bottom: unset;

            &::after {
              content: '';
            }
          }
        }
      }

      .block {
        text-align: center;
        padding: 1.25rem 1.5rem;
        margin-top: 1.5rem;
        margin-bottom: 1.5rem;

        @media screen and (min-width: 1200px) {
          margin-top: unset;
          margin-bottom: unset;
        }

        img {
          max-width: 85%;
          margin-bottom: 2.5rem;

          @media screen and (max-width: 600px) {
            margin-bottom: 1.25rem;
          }
        }
        .title {
          color: #0061a3;
          font-size: 1.25rem;
          font-weight: 700;
          text-transform: uppercase;
          margin-bottom: 1.25rem;

          @media screen and (max-width: 600px) {
            margin-bottom: 1rem;
          }
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
