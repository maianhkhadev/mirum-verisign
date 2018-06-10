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
        </span>
        <div class="hidden">{{ domainSearched.name }}</div>
      </div>
    </div>

    <div class="block-content" v-if="searchStatus === 2">
      <div class="domain-selected">
        <div class="row">
          <div class="col-12">
            <div class="message">
              <span v-if="domainSelected.availability === 'available'">Xin chúc mừng! </span>
              <span v-else>Rất tiếc! </span>
              Tên miền
              <span class="name">{{ domainSelected.name }}</span>
              <span v-if="domainSelected.availability !== 'available'">không </span>
              khả dụng
            </div>
          </div>
          <div class="col-8 text-center mx-auto">
            <button class="btn btn-blue" v-if="domainSelected.availability === 'available'">Đăng ký ngay</button>
          </div>
        </div>
      </div>
      <div class="line">
        <div class="line-header">Thêm tiền tố</div>
        <div class="line-content">
          <template v-for="domain in prefixes">
            <span class="word" v-bind:key="domain.name" v-on:click="selectDomain(domain)">{{ domain.token }}</span>
          </template>
        </div>
      </div>
      <div class="segments">
        <div class="segment" v-for="segment in segments" v-bind:key="segment.name">
          <a class="remove" href="#">
            <img class="icon" src="~@/assets/images/icon-remove.png" alt=""/>
          </a>
          <span class="name">{{ segment.name }}</span>
          <button class="btn btn-outline-blue" v-on:click="selectSegment(segment)">Thay thế</button>
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

    <div class="modal-sort">
      <div class="modal-header">
        <div class="title">Thay thế từ khóa</div>
        <img class="close" src="~@/assets/images/icon-remove.png" alt="" v-on:click="showModal"/>
      </div>
      <div class="modal-content">
        <ul>
          <template v-for="domain in segmentSelected.domains">
            <li class="sort-item" v-bind:key="domain.name" v-on:click="selectDomain(domain)">{{ domain.token }}</li>
          </template>
        </ul>
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
        segmentSelected: {
          name: '',
          domains: []
        },
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
      selectSegment: function (segment) {
        let self = this

        self.segmentSelected = { ...self.segmentSelected, ...segment }

        let modal = document.querySelector('.modal-sort')
        modal.classList.add('show')
      },
      selectDomain: function (domain) {
        let self = this

        self.domainSelected = { ...self.domainSelected, ...domain }
        console.log(1)
        let modal = document.querySelector('.modal-sort')
        modal.classList.remove('show')
      },
      removeSearch: function () {
        let self = this

        self.name = ''
      },
      showModal: function () {
        let block = document.querySelector('.modal-sort')
        block.classList.toggle('show')
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
    padding: 2.5rem 1.429rem;
    margin-top: -3.714rem;
    margin-left: -5px;
    margin-right: -5px;

    .block-header {

      .title {
        color: #0061a3;
        font-size: 1rem;
        font-weight: 700;
        text-align: center;
        text-transform: uppercase;
        letter-spacing: 0.25rem;
        margin-bottom: 2.5rem;
      }
      .form-group {
        position: relative;
        margin-bottom: unset;

        .load {
          position: absolute;
          top: 50%;
          right: 5rem;
          transform: translateY(-50%);
          font-size: 1rem;
          line-height: 1;

          .icon {
            width: 1rem;
            opacity: 0.5;
            animation: load 1s linear infinite;
          }

          @keyframes load {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        }
        .remove {
          position: absolute;
          top: 50%;
          right: 5rem;
          transform: translateY(-50%);
          font-size: 1rem;
          line-height: 1;

          .icon {
            width: 1rem;
            opacity: 0.5;
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
          padding: 0.625rem 1rem;

          .com {
            color: #707070;
            font-size: 1rem;
            font-weight: 700;
          }
        }

        input {
          color: #97d4f7;
          font-size: 1rem;
          font-weight: 700;
          border-color: #97d4f7;
          border-radius: 2.5rem;
          padding: 0.625rem 6rem 0.625rem 1.429rem;

          &::placeholder {
            color: rgba(#97d4f7, 0.75);
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
        margin-bottom: 1.5rem;

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

      .line {

        .line-header {
          color: #005fa5;
          font-size: 1.071rem;
          font-weight: 700;
          margin-bottom: 0.8571rem;
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

      .segments {
        margin-top: 1.5rem;
        margin-bottom: 1.5rem;

        .segment {
          position: relative;
          border: 0.1429rem solid #97d4f7;
          border-radius: 2rem;
          padding: 0.5714rem 1.5rem;
          margin-bottom: 0.7143rem;
          overflow: hidden;

          &:last-child {
            margin-bottom: 1.5rem;
          }

          .remove {

            .icon {
              width: 0.8571rem;
              margin-top: -0.2143rem;
              margin-right: 0.5rem;
              opacity: 0.5;
            }
          }
          .name {
            color: #0061a3;
            font-size: 1rem;
            font-weight: 700;
          }
          .btn-outline-blue {
            position: absolute;
            top: -0.1429rem;
            right: -0.1429rem;
            font-size: 1rem;
            font-weight: 700;
            border-width: 0.1429rem;
            border-radius: 2rem;
            padding: 0.6429rem 1.5rem;

          }
        }
      }
    }
  }

  .modal-sort {
    position: fixed;
    top: 0;
    right: -100vw;
    width: 100vw;
    height: 100vh;
    transition: all 0.35s ease-in;
    background-color: #ffffff;
    padding: 2rem 1.5rem;
    z-index: 1080;

    &.show {
      right: 0;
    }

    .modal-header {
      position: relative;
      padding-top: 3rem;
      margin-bottom: 3rem;

      .title {
        color: #005fa5;
        font-size: 1.071rem;
        font-weight: 700;
        text-align: center;
        text-transform: uppercase;
      }
      .close {
        position: absolute;
        top: 50%;
        right: 1rem;
        width: 1rem;
        transform: translateY(-50%);
      }
    }
    .modal-content {
      height: calc(100vh - 8.571rem);

      ul {
        list-style-type: none;
        -webkit-padding-start: 0;
      }
      .sort-item {
        color: #0061a3;
        font-size: 1rem;
        font-weight: 700;
        border: 0.1429rem solid #97d4f7;
        border-radius: 2rem;
        padding: 0.5714rem 1.5rem;
        margin-bottom: 0.7143rem;
      }
    }
  }
</style>
