<template>
  <div class="block">
    <div class="block-header">
      <div class="title">Tìm cho mình một tên miền .com tại đây</div>

      <div class="form-group">
        <input type="text" class="form-control" v-on:keyup.enter="searchDomain" v-model="domain" placeholder="Ví dụ: nguyenduflower.com">
      </div>
    </div>

    <div class="block-content">
      <div class="domain-selected">
        Tên miền: <span class="name">{{ domainSelected.name }}</span> khả dụng
        <button class="btn btn-blue">Đăng ký ngay</button>
      </div>
      <div class="columns">
        <div class="column first-column">
          <div class="column-header">Thêm tiền tố</div>
          <div class="column-content">
            <template v-for="prefix in prefixes">
              <div class="word" v-on:click="selectDomain(domain)">{{ prefix.token }}</div>
            </template>
          </div>
        </div>
        <div class="column middle-column">
          <div class="column" v-for="segment in segments">
            <div class="column-header">
              {{ segment.name }}
              <a class="delete" href="#">Xoá</a>
            </div>
            <div class="column-content">
              <template v-for="domain in segment.domains">
                <div class="word" v-on:click="selectDomain(domain)">{{ domain.token }}</div>
              </template>
            </div>
          </div>
        </div>
        <div class="column last-column">
          <div class="column-header">Thêm hậu tố</div>
          <div class="column-content">
            <template v-for="suffix in suffixes">
              <div class="word" v-on:click="selectDomain(domain)">{{ suffix.token }}</div>
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import store from '@/store/index'

  export default {
    data () {
      return {
        domain: '',
        domainSelected: {
          name: '',
          availability: false
        }
      }
    },
    computed: {
      domainSearched: function () {
        let self = this
        let domain = store.getters['domains/getDomainSearched']
        console.log(domain)
        self.domainSelected.name = domain.name
        self.domainSelected.availability = domain.availability === "available" ? false : true

        return domain
      },
      prefixes: function () {
        let self = this
        let prefixes = store.getters['domains/getPrefixes']

        return prefixes
      },
      suffixes: function () {
        let self = this
        let suffixes = store.getters['domains/getSuffixes']

        return suffixes
      },
      segments: function () {
        let self = this
        let segments = store.getters['domains/getSegments']

        return segments
      },
    },
    methods: {
      searchDomain: function () {
        let self = this
        //italianrestaurantintown
        store.dispatch('domains/search', { name: self.domain })
      },
      selectDomain: function (domain) {
        let self = this

        self.domainSelected.name = domain.name
        self.domainSelected.availability = domain.availability === "available" ? false : true
      }
    }
  }
</script>

<style lang="scss" scoped>
  .block {
    position: relative;
    background-color: #ffffff;
    border-radius: 4rem;
    box-shadow: 0 0.5rem 4rem 0 rgba(#000000, 0.05);
    padding: 2.5rem;
    margin-top: -12rem;
    margin-bottom: 5rem;

    .block-header {
      padding: 1.25rem 7.25rem;

      .title {
        color: #0061a3;
        font-size: 1.375rem;
        font-weight: 700;
        text-align: center;
        text-transform: uppercase;
        letter-spacing: 0.25rem;
        margin-bottom: 2.5rem;
      }
      input {
        color: #97d4f7;
        font-size: 1.25rem;
        font-weight: 700;
        border-color: #97d4f7;
        border-radius: 2.5rem;
        padding: 1.5rem 3.75rem;

        &::placeholder {
          color: #97d4f7;
        }
      }
    }

    .block-content {
      padding-top: 2.5rem;
      padding-bottom: 2.5rem;

      .domain-selected {

        .name {
          color: #00a0e1;
          font-size: 1.25rem;
          font-weight: 700;
        }
        button {
          font-size: 1.25rem;
          font-weight: 700;
          border-radius: 2rem;
          padding: 1rem 3rem;
        }
      }
      .domain-name {
        color: #000000;
      }

      .columns {
       display: flex;
       flex-direction: row;
       border: 0.125rem solid #99d4f5;
       border-radius: 1.875rem;
       overflow: hidden;

       .column {

         .column-header {
           position: relative;
           color: #0061a3;
           background-color: #ededed;
           font-size: 1rem;
           font-weight: 700;
           text-align: center;
           padding-top: 1.25rem;
           padding-bottom: 1.25rem;

           .delete {
             position: absolute;
             top: 0.5rem;
             right: 0.5rem;
             color: #b2b2b2;
             font-size: 0.875rem;
             font-weight: 700;
           }
         }
         .column-content {

           .word {
             color: #00a1de;
             font-size: 1.125rem;
             font-weight: 700;
             text-align: center;
             padding-top: 0.75rem;
             padding-bottom: 0.75rem;
             cursor: pointer;
           }
         }
       }
       .first-column, .last-column {
         width: 25%;
       }
       .first-column {
         border-right: 0.0625rem dashed #99d4f5;
       }
       .last-column {
         border-left: 0.0625rem dashed #99d4f5;
       }
       .middle-column {
         width: 50%;
         display: flex;
          flex-wrap: nowrap;
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
          -ms-overflow-style: -ms-autohiding-scrollbar;

         .column {
           flex: 0 0 auto;
           width: 50%;
           border-left: 0.0625rem dashed #99d4f5;

           &:first-child {
             border-left: unset;
           }
         }
       }
      }
    }
  }
</style>
