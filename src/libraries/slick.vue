<template>
  <div ref="slick">
    <slot></slot>
  </div>
</template>

<script>
  import { EventBus } from '@/plugins/event-bus.js'

  if (process.browser) {
    require('slick-carousel/slick/slick.css')
    require('slick-carousel/slick/slick-theme.css')
    require('slick-carousel/slick/slick.js')
  }

  export default {
    props: {
      options: {
        default: function () {
          return {

          }
        }
      }
    },
    methods: {
      slickPrev: function () {
        var self = this
        $(self.$refs.slick).slick('slickPrev')
      },
      slickNext: function () {
        var self = this
        $(self.$refs.slick).slick('slickNext')
      },
      slick: function () {
        var self = this
        $(self.$refs.slick).slick(self.options)
      },
      unslick: function () {
        var self = this
        $(self.$refs.slick).slick('unslick')
      }
    },
    mounted () {
      var self = this
      $(self.$refs.slick).slick(self.options)

      $(self.$refs.slick).on('afterChange', function(event, slick, currentSlide, nextSlide) {
        EventBus.$emit('slick-after', event, slick, currentSlide, nextSlide)
      })
    }
  }
</script>
