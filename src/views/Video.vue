<template lang="pug">
section
  .exchangeContainer.deco
    .logo
    .snow1
    .snow2
    .snow3
    .snow4
    .snow5
    .snow6
    .content
      .exchangeWrapper
        .box(@click.passive.prevent='checkVideo')
          .personWrapper
            img.person(src="@/assets/mission-person.png")
          YoutubeVue3(
            ref="youtube"
            :autoplay="1"
            :videoid="videoId"
            :loop="1"
            :controls="1"
            width="default"
            @ended="onEnded"
          )
      .mountain
      .personsBg
        //- .buttonWrapper
        //-   button(@click="complete" v-if="isWatchedVideo && !isLoading") 完成
        //-   button.isLoading(v-else-if="isWatchedVideo && isLoading") 送出中...
        //-   button.disable(v-else) 未完成
      .persons
        .cookie
        .person
</template>

<script>
import { YoutubeVue3 } from 'youtube-vue3';

export default {
  name: 'Video',
  components: {
    YoutubeVue3,
  },
  data() {
    return {
      id: '',
      isLoading: false,
      isWatchedVideo: false,
      videoId: 'R41Hbnwk0Oo',
    };
  },
  mounted() {
    if (!this.$store.state.user) {
      this.$router.push('/');
    }
    this.isWatchedVideo = this.$store.state.video;
    this.id = this.$store.state.id;
    if (this.$store.state.video) {
      this.$router.push('mission');
    }
  },
  methods: {
    checkVideo() {
      this.$data.isWatchedVideo = true;
    },
    complete() {
      if (this.isLoading) {
        return;
      }
      this.isLoading = true;
      setTimeout(async () => {
        await this.$store.dispatch('videoComplete', this.$data.id);
        this.isLoading = true;
        this.$router.push('/pass');
      }, 0);
    },
    onEnded() {
      if (this.isLoading) {
        return;
      }
      this.isLoading = true;
      setTimeout(async () => {
        await this.$store.dispatch('videoComplete', this.$data.id);
        this.isLoading = true;
        this.$router.push('/pass');
      }, 0);
    },
  },
};
</script>

<style lang="scss">
.exchangeContainer {
  width: 100%;
  height: 100%;
  min-height: 100vh;
  position: relative;
  background: linear-gradient(
    180deg,
    rgba(125, 201, 232, 1) 0%,
    rgba(255, 255, 255, 1) 50%,
    rgba(125, 201, 232, 1) 70%,
    rgba(255, 255, 255, 1) 100%
  );
  display: flex;
  flex-direction: column;
  justify-content: center;
  &.deco {
    .logo {
      position: relative;
      background: url(~@/assets/logo-2x.png) no-repeat center / contain;
      width: #{math.div(727, 1080) * 100%};
      left: 50%;
      top: 0;
      transform: translate(-50%, 10px);
      margin-bottom: 40px;
      &:before {
        content: '';
        display: block;
        padding-bottom: #{math.div(887, 1461) * 100%};
      }
    }
    .snow1 {
      position: absolute;
      background: url(~@/assets/snow.png) no-repeat center / contain;
      width: #{math.div(70, 1080) * 100%};
      top: 8%;
      left: 10%;
      &:before {
        content: '';
        display: block;
        padding-bottom: #{1 * 100%};
      }
    }
    .snow2 {
      position: absolute;
      background: url(~@/assets/snow.png) no-repeat center / contain;
      width: #{math.div(70, 1080) * 100%};
      top: 4%;
      left: 85%;
      &:before {
        content: '';
        display: block;
        padding-bottom: #{1 * 100%};
      }
    }
    .snow3 {
      position: absolute;
      background: url(~@/assets/snow.png) no-repeat center / contain;
      width: #{math.div(70, 1080) * 100%};
      top: 72%;
      left: 4%;
      &:before {
        content: '';
        display: block;
        padding-bottom: #{1 * 100%};
      }
    }
    .snow4 {
      position: absolute;
      background: url(~@/assets/snow.png) no-repeat center / contain;
      width: #{math.div(136, 1080) * 100%};
      top: 70%;
      left: 88%;
      &:before {
        content: '';
        display: block;
        padding-bottom: #{1 * 100%};
      }
    }
    .snow5 {
      position: absolute;
      background: url(~@/assets/snow.png) no-repeat center / contain;
      width: #{math.div(136, 1080) * 100%};
      top: 90%;
      left: 2%;
      &:before {
        content: '';
        display: block;
        padding-bottom: #{1 * 100%};
      }
    }
    .snow6 {
      position: absolute;
      background: url(~@/assets/snow.png) no-repeat center / contain;
      width: #{math.div(70, 1080) * 100%};
      top: 92%;
      left: 88%;
      &:before {
        content: '';
        display: block;
        padding-bottom: #{1 * 100%};
      }
    }
  }
  .content {
    width: 100%;
    position: relative;

    .exchangeWrapper {
      position: relative;
      padding: 0 20px;
      margin-bottom: 10px;

      .personWrapper {
        position: absolute;
        display: flex;
        align-items: center;
        inset: -50px auto auto 20px;
        .person {
          width: 60px;
        }
      }

      .box {
        position: relative;
        margin: 0 auto;
        max-width: 100%;
        background-color: #ffffff;
        border-radius: 10px;
        padding: 24px 0px;
        display: flex;
        flex-direction: column;
        iframe {
          height: 100%;
          aspect-ratio: 16 / 9;
        }
        .mask {
          width: 100%;
          aspect-ratio: 16/9;
          position: absolute;
        }
      }
    }
    .buttonWrapper {
      width: 100%;
      padding: 0 40px;
    }
    button {
      position: relative;
      width: 70%;
      height: 40px;
      background-color: $primary;
      border-radius: 30px;
      border: none;
      font-size: 20px;
      font-weight: 500;
      letter-spacing: 4px;
      color: white;
      z-index: 2;
      &.isLoading {
        background-color: $primaryOpacity;
      }
      &.disable {
        background-color: $primaryOpacity;
      }
    }
    .mountain {
      position: relative;
      background: url(~@/assets/mountain-small.png) no-repeat center / contain;
      width: 100%;
      &:before {
        content: '';
        display: block;
        padding-bottom: #{math.div(900, 2000) * 100%};
      }
    }
    .personsBg {
      position: absolute;
      width: 100%;
      height: 40px;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    .persons {
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 120px;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      transform: translateY(30px);
      .cookie {
        position: relative;
        background: url(~@/assets/pass-cookie.png) no-repeat center / contain;
        width: 100%;
        height: 100%;
        top: -20px;
      }
      .person {
        position: relative;
        background: url(~@/assets/pass-person.png) no-repeat center / contain;
        width: 100%;
        height: 80%;
      }
    }
  }
}
</style>
