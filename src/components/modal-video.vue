<template>
  <div ref="modal" class="modal modal-video fade">
    <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-body">
					<div class="embed-responsive embed-responsive-16by9">
						<iframe ref="iframe" class="embed-responsive-item" :src="`https://www.youtube.com/embed/${videoId}?enablejsapi=1`" allow="autoplay; encrypted-media" allowfullscreen></iframe>
					</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { EventBus } from '@/plugins/event-bus.js'

  export default {
    data () {
      return {
        videoId: ''
      }
    },
    mounted() {
      let self = this
      let video = null

      EventBus.$on('show-modal-video', (videoId) => {
        self.videoId = videoId
        $(self.$refs.modal).modal('show')

        video = new YT.Player(self.$refs.iframe, {
          events: {
            onReady: function (event) {
              event.target.playVideo()
            },
            onStateChange: function (event) {
              if(event.data === 0) {
                $(self.$refs.modal).modal('hide')
              }
            }
          }
        })
      })

      $(self.$refs.modal).on('shown.bs.modal', function (e) {

      })
      $(self.$refs.modal).on('hidden.bs.modal', function (e) {
        video.stopVideo()
      })
    }
  }
</script>

<style lang="scss">
.modal-video {

  .modal-dialog {
    width: 100%;
    max-width: 100%;
    height: 100%;
    min-height: 100%;
    margin: auto;
  }
  .modal-content {
    display: block;
    height: 100%;
    border: none;
  }
  .modal-header {
    position: absolute;
    top: 1rem;
    right: 2rem;
    z-index: 9999;
    overflow: hidden;
    border: none;

    .close {
      color: #ffffff;
      opacity: 1;

      &:focus {
        outline: none;
      }
    }
  }
  .modal-body {
    height: 100%;
    padding: 0;

    .embed-responsive {
      height: 100%;
    }
  }
}
</style>
