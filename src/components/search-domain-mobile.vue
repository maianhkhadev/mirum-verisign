<template>
  <div class="block">
    <div class="block-header">
      <div class="title">Tìm cho mình một tên miền .com tại đây</div>

      <div class="form-group">
        <input type="text" class="form-control" v-on:keyup.enter="searchDomain" v-model.lazy="name" placeholder="Ví dụ: nguyenduflower.com">
        <span class="load" v-if="searchStatus === 1">
          <img class="icon" src="~@/assets/images/icon-load.png" alt=""/>
        </span>
        <a class="remove" href="#" v-if="searchStatus === 2" v-on:click.prevent="removeSearch()">
          <img class="icon" src="~@/assets/images/icon-remove.png" alt=""/>
        </a>
        <span class="tlds">
          <span class="com">.com</span>
          <img class="icon" src="~@/assets/images/icon-search.png" alt=""/>
        </span>
        <div class="hidden">{{ domainSearched.name }}</div>
      </div>
    </div>

    <div class="block-content" v-if="searchStatus === 2">
      <div class="domain-selected">
        <div class="row">
          <div class="col-12">
            <div class="message">
              Xin chúc mừng! Tên miền
              <span class="name">{{ domainSelected.name }}</span>
              <span v-if="domainSelected.availability !== 'available'">không </span>
              khả dụng
            </div>
          </div>
          <div class="col-8 mx-auto">
            <button class="btn btn-blue" v-if="domainSelected.availability === 'available'">Đăng ký ngay</button>
          </div>
        </div>
      </div>
      <div class="lines">
        <div class="line">
          <div class="line-header">Thêm tiền tố</div>
          <div class="line-content">
            <template v-for="domain in prefixes">
              <span class="word" v-bind:key="domain.name" v-on:click="selectDomain(domain)">{{ domain.token }}</span>
            </template>
          </div>
        </div>
        <div class="line" v-for="segment in segments" v-bind:key="segment.name">
          <div class="line-header">
            {{ segment.name }}
            <a class="delete" href="#">Xoá</a>
          </div>
          <div class="line-content">
            <template v-for="domain in segment.domains">
              <span class="word" v-bind:key="domain.name" v-on:click="selectDomain(domain)">{{ domain.token }}</span>
            </template>
          </div>
        </div>
        <div class="line">
          <div class="line-header">Thêm hậu tố</div>
          <div class="line-content">
            <template v-for="domain in suffixes">
              <span class="word" v-bind:key="domain.name" v-on:click="selectDomain(domain)">{{ domain.token }}</span>
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
        name: '',
        searchStatus: false,
        domainSelected: {
          name: '',
          availability: ''
        }
      }
    },
    computed: {
      domainSearched: function () {
        let self = this
        let domain = store.getters['domains/getDomainSearched']

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
    watch: {
      name: function () {
        let self = this

        self.searchStatus = 0
      },
      domainSearched: function (domain) {
        let self = this

        self.selectDomain(domain)
      }
    },
    methods: {
      searchDomain: function () {
        let self = this

        if(self.searchStatus === 1 || self.searchStatus === 2) {
          return
        }

        self.searchStatus = 1
        setTimeout(function () {
          self.searchStatus = 2
        }, 2000)
        store.dispatch('domains/search', { name: self.name })
      },
      selectDomain: function (domain) {
        let self = this

        self.domainSelected = { ...self.domainSelected, ...domain }
      },
      removeSearch: function () {
        let self = this

        self.name = ''
      }
    }
  }
</script>

<style lang="scss" scoped>
  .block {
    position: relative;
    background-color: #ffffff;
    border-radius: 1.25rem;
    box-shadow: 0 0.5rem 4rem 0 rgba(#000000, 0.05);
    padding: 2.5rem;
    margin-top: -12rem;
    margin-bottom: 5rem;

    @media screen and (max-width: 600px) {
      padding: 2.5rem 1.429rem;
      margin-top: 1.538rem;
      margin-left: -5px;
      margin-right: -5px;
    }

    .block-header {

      .title {
        color: #0061a3;
        font-size: 1.375rem;
        font-weight: 700;
        text-align: center;
        text-transform: uppercase;
        letter-spacing: 0.25rem;
        margin-bottom: 2.5rem;

        @media screen and (max-width: 600px) {
          font-size: 1rem;
        }
      }
      .form-group {
        position: relative;
        margin-bottom: unset;

        .load {
          position: absolute;
          top: 50%;
          right: 15rem;
          transform: translateY(-50%);
          line-height: 1;

          @media screen and (max-width: 600px) {
            right: 5rem;
            font-size: 1rem;
          }

          .icon {
            width: 1.25rem;
            opacity: 0.5;
            animation: load 1s linear infinite;

            @media screen and (max-width: 600px) {
              width: 1rem;
            }
          }

          @keyframes load {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        }
        .remove {
          position: absolute;
          top: 50%;
          right: 15rem;
          transform: translateY(-50%);
          line-height: 1;

          @media screen and (max-width: 600px) {
            right: 5rem;
            font-size: 1rem;
          }

          .icon {
            width: 1.25rem;
            opacity: 0.5;

            @media screen and (max-width: 600px) {
              width: 1rem;
            }
          }

          &:hover {

            .icon {
              opacity: 0.75;
            }
          }
        }
        .tlds {
          position: absolute;
          top: 0;
          right: 0;
          border-left: 0.0625rem solid #97d4f7;
          padding: 1.125rem 3rem 1.25rem;

          @media screen and (max-width: 600px) {
            padding: 0.625rem 1rem;
          }

          .com {
            color: #707070;
            font-size: 1.75rem;
            font-weight: 700;

            @media screen and (max-width: 600px) {
              font-size: 1rem;
            }
          }
          .icon {
            width: 2rem;
            margin-top: -0.5rem;
            margin-left: 1.5rem;

            @media screen and (max-width: 600px) {
              display: none;
            }
          }
        }

        input {
          color: #97d4f7;
          font-size: 1.25rem;
          font-weight: 700;
          border-color: #97d4f7;
          border-radius: 2.5rem;
          padding: 1.5rem 15rem 1.5rem 3.75rem;

          &::placeholder {
            color: rgba(#97d4f7, 0.75);
          }

          @media screen and (max-width: 600px) {
            font-size: 1rem;
            padding: 0.625rem 6rem 0.625rem 1.429rem;
          }
        }
        .hidden {
          display: none;
        }
      }
    }

    .block-content {
      padding-top: 1.25rem;
      padding-bottom: 2.5rem;

      .domain-selected {
        margin-bottom: 2.5rem;

        .message {
          color: #00a0e1;
          font-size: 1rem;
          text-align: center;
          margin-bottom: 1.429rem;

          .name {
            font-weight: 700;
          }
        }
        button {
          font-size: 1rem;
          font-weight: 700;
          border-radius: 2rem;
          padding: 0.5rem 3rem;
        }
      }

      .lines {

        .line {

          .line-header {
            color: #005fa5;
            font-size: 1.071rem;
            font-weight: 700;
            margin-bottom: 1.429rem;
          }
          .line-content {
            display: flex;
            flex-wrap: nowrap;
            overflow-x: auto;

            .word {
              display: inline-block;
              color: #00559d;
              background-color: #99d4f5;
              font-size: 1rem;
              font-weight: 700;
              padding: 0.75rem 2rem;
              margin-right: 0.125rem;

              &:last-child {
                margin-right: unset;
              }
            }
          }
        }
      }
    }
  }
</style>
