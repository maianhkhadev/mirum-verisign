<template>
  <section>
    <div class="container">
      <div class="section-content">
        <div class="section-title">Cách tên miền <span class="com">.com</span> giúp bạn giữ vững thương hiệu online</div>

        <div class="row">
          <div class="col-xl-4 col-9 mx-auto">
            <div class="block">
              <img class="img-fluid" src="~@/assets/images/home/section-05/im-01.png" alt=""/>
              <div class="title">Giúp thương hiệu được nhận diện nhanh chóng</div>
              <div class="content">Tên miền .com là một trong những tên miền dễ nhận dạng và được tin cậy nhất thế giới. Hãy tận dụng ưu thế của tên miền .com</div>
            </div>
          </div>
          <div class="col-xl-4 col-9 mx-auto">
            <div class="block">
              <img class="img-fluid" src="~@/assets/images/home/section-05/im-02.png" alt=""/>
              <div class="title">Giúp khách hàng tìm thấy bạn dễ hơn</div>
              <div class="content">Tên miền .com đưa khách hàng đến thẳng trang mạng xã hội hoặc trang thương mại điện tử của bạn.</div>
            </div>
          </div>
          <div class="col-xl-4 col-9 mx-auto">
            <div class="block">
              <img class="img-fluid" src="~@/assets/images/home/section-05/im-03.png" alt=""/>
              <div class="title">Giúp bạn có uy tín hơn</div>
              <div class="content">Tên miền .com là tiêu chuẩn quốc tế. Hàng triệu cá nhân và doanh nghiệp khắp thế giới đã tin dùng tên miền .com cho thương hiệu online của mình.</div>
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
    margin-top: 5rem;
    margin-bottom: 5rem;

    .section-content {
      padding: 4rem 0 2rem;

      .section-title {
        position: relative;
        color: #0061a3;
        font-size: 3.25rem;
        font-weight: 800;
        text-align: center;
        margin-bottom: 4rem;

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

          @media screen and (max-width: 600px) {
            top: 7.5rem;
            left: 0.5em;
          }
        }

        .com {
          color: #99d4f5;
        }
      }

      .block {
        text-align: center;
        padding: 1.25rem;
        margin-bottom: 2rem;

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
