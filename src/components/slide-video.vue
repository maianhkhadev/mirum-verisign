<template>
  <div class="slide">
    <iframe ref="iframe" :src="`https://www.youtube.com/embed/${videoId}?enablejsapi=1`" allow="autoplay; encrypted-media" allowfullscreen></iframe>
    <div class="slide-footer">
      <div class="title"><slot name="title"></slot></div>
      <div class="content"><slot name="content"></slot></div>
    </div>
  </div>
</template>

<script>
  import { EventBus } from '@/plugins/event-bus.js'

  export default {
    data () {
      return {
        youtube: null
      }
    },
    props: {
      videoId: {
        default: function () {
          return ''
        }
      }
    },
    mounted () {
      let self = this

      setTimeout(function () {
        self.youtube = new YT.Player(self.$refs.iframe, {
          events: {
            onReady: function () {

            }
          }
        })
      }, 2000)

      EventBus.$on('slick-after', (event, slick, currentSlide, nextSlide) => {
        if (self.youtube !== null)
          self.youtube.stopVideo()
      })
      // EventBus.$off('i-got-clicked', clickHandler);
    }
  }
</script>

<style lang="scss" scoped>
.slide {
  position: relative;
  height: 32rem;
  border-radius: 2.5rem;
  box-shadow: 0 2rem 4rem 0 rgba(#000000, 0.1);
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  margin-bottom: 4rem;
  overflow: hidden;

  @media screen and (max-width: 600px) {
    height: 28rem;
  }

  iframe {
    position: absolute;
    top: 0;
    left: 50%;
    width: 100%;
    height: 75%;
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
</style>
