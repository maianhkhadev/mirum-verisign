<template>
  <section>
    <div class="container">
      <div class="section-content">
        <div class="row">
          <div class="col-xl-12 col-md-12 col-10 mx-auto">
            <div class="section-title">Lợi ích của việc có tên miền <span class="com">.com</span></div>
          </div>
        </div>

        <div class="row">
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
      background-color: #0061a3;
      border-radius: 5rem;
      box-shadow: 0 0.5rem 4rem 0 rgba(#000000, 0.05);
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

        .com {
          color: #99d4f5;
        }
      }

      .block {
        text-align: center;
        margin-bottom: 2rem;

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
