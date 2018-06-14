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
        <span class="tlds" v-on:click="searchDomain">
          <span class="com">.com</span>
          <img class="icon" src="~@/assets/images/icon-search.png" alt=""/>
        </span>
      </div>
    </div>

    <div class="block-content" v-if="searchStatus === 2">
      <div class="domain-searched">
        <div v-if="domainSearched.availability === 'available'">
          <span class="message">&#10003; Xin chúc mừng! Tên miền của bạn khả dụng!</span> <button class="btn btn-blue">Đăng ký ngay</button>
        </div>
        <div v-else>
          <span class="message">&#10007; Tên miền không khả dụng</span>
        </div>
      </div>
      <div class="notice">Mẹo: thêm từ màu xanh bên dưới để có tên miền khả dụng.</div>
      <div class="columns">
        <div class="column first-column">
          <div class="column-header">Thêm tiền tố</div>
          <div class="column-content">
            <template v-for="domain in prefixes">
              <div class="word" v-bind:key="domain.name" v-on:click="selectDomain(domain)">{{ domain.token }}</div>
            </template>
          </div>
        </div>
        <div class="column middle-column">
          <div class="column" v-for="segment in segments" v-bind:key="segment.name">
            <div class="column-header">
              {{ segment.name }}
              <a class="delete" href="#">Xoá</a>
            </div>
            <div class="column-content">
              <template v-for="domain in segment.domains">
                <div class="word" v-bind:key="domain.name" v-on:click="selectDomain(domain)">{{ domain.token }}</div>
              </template>
            </div>
          </div>
        </div>
        <div class="column last-column">
          <div class="column-header">Thêm hậu tố</div>
          <div class="column-content">
            <template v-for="domain in suffixes">
              <div class="word" v-bind:key="domain.name" v-on:click="selectDomain(domain)">{{ domain.token }}</div>
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
      searchStatus: false
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
    }
  },
  methods: {
    searchDomain: function () {
      let self = this

      if(self.searchStatus === 1 || self.searchStatus === 2) {
        return
      }

      self.searchStatus = 1
      setTimeout(function () { self.searchStatus = 2 }, 2000)
      store.dispatch('domains/search', { name: self.name })
    },
    selectDomain: function (domain) {
      let self = this

      self.name = domain.name

      setTimeout(function () { self.searchDomain() }, 250)
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
  border-radius: 4rem;
  box-shadow: 0 2rem 8rem 0 rgba(#000000, 0.1);
  padding: 2.5rem;
  margin-top: -10rem;
  margin-bottom: 2.5rem;

  @media screen and (min-width: 1500px) {
    margin-bottom: 5rem;
  }

  .block-header {
    padding: 1.25rem 7.25rem;

    @media screen and (min-width: 600px) and (max-width: 1200px) {
      padding: 1.25rem;
    }

    .title {
      color: #0061a3;
      font-size: 1.375rem;
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
        right: 15rem;
        transform: translateY(-50%);

        .icon {
          width: 1.25rem;
          margin-top: -0.25rem;
          margin-left: 1.5rem;
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
        right: 15rem;
        transform: translateY(-50%);

        .icon {
          width: 1.25rem;
          margin-top: -0.25rem;
          margin-left: 1.5rem;
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
        padding: 1.125rem 3rem 1.25rem;
        cursor: pointer;

        .com {
          color: #707070;
          font-size: 1.75rem;
          font-weight: 700;
        }
        .icon {
          width: 2rem;
          margin-top: -0.5rem;
          margin-left: 1.5rem;
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

      &:focus {
        box-shadow: 0 0 0 0.2rem rgba(#97d4f7, 0.25);
      }
      &::placeholder {
        color: rgba(#97d4f7, 0.75);
      }
    }
    .hidden {
      display: none;
    }
  }

  .block-content {
    padding-bottom: 2.5rem;

    .domain-searched {
      padding-left: 9rem;
      padding-right: 9rem;
      margin-bottom: 2.5rem;

      @media screen and (min-width: 600px) and (max-width: 1200px) {
        padding-left: 2rem;
        padding-right: 2rem;
      }

      .message {
        position: relative;
        display: inline-block;
        color: #00a0e1;
        background-color: #e5e5e5;
        font-size: 1.25rem;
        border-radius: 2rem;
        padding: 0.5rem 2rem;
        margin-left: -2rem;
        margin-right: 1rem;

        &::before {
          content: '\25b4';
          position: absolute;
          top: -2rem;
          left: 50%;
          transform: translateX(-50%);
          color: #e5e5e5;
          font-size: 2rem;
        }
      }

      button {
        font-size: 1.125rem;
        font-weight: 700;
        border-radius: 2rem;
        padding: 0.5rem 3rem;
        margin-top: -0.375rem;

        @media screen and (min-width: 600px) and (max-width: 1200px) {
          padding: 0.5rem 1rem;
        }
      }
    }

    .notice {
      color: #0061a3;
      font-size: 1.125rem;
      text-align: center;
      margin-bottom: 2.5rem;
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
