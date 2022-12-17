<template lang="pug">
section
  .exchangeContainer
    .logo
    .snow1
    .snow2
    .snow3
    .snow4
    .snow5
    .snow6
    .content
      h3 感謝您蒞臨
      .textContainer
        .personWrapper.left
          img.person(src="@/assets/mission-person.png")
          .textWrapper
            h5.text 請將此畫面出示給工作人員
      .exchangeWrapper
        .box
          button(v-if="!isLoading && hasCoupon" @click="exchange") 兌換餐券
          button.isLoading(v-if="isLoading") 兌換中...
          button.isLoading(v-if="!hasCoupon") 兌換成功!
      .mountain
</template>

<script>
export default {
  name: 'Success',
  components: {},
  data() {
    return {
      id: '',
      isLoading: false,
      isVideoComplete: false,
      isSurveyComplete: false,
      hasCoupon: true,
    };
  },
  mounted() {
    this.id = this.$store.state.id;
    this.isSurveyComplete = !!this.$store.state.survey;
    this.isWatchedVideo = !!this.$store.state.video;
    this.hasCoupon = !this.$store.state.coupon;
    if (!this.$store.state.survey || !this.$store.state.video) {
      this.$router.push('mission');
    }
  },
  methods: {
    async exchange() {
      if (this.isLoading) {
        return;
      }
      this.isLoading = true;
      setTimeout(async () => {
        await this.$store.dispatch('exchange', this.$data.id);
        this.isLoading = false;
        this.hasCoupon = false;
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
    rgba(255, 255, 255, 1) 90%,
    rgba(125, 201, 232, 1) 100%
  );
  display: flex;
  flex-direction: column;
  justify-content: center;
  .logo {
    position: relative;
    background: url(~@/assets/logo-2x.png) no-repeat center / contain;
    width: #{math.div(727, 1080) * 100%};
    left: 50%;
    top: 0;
    transform: translate(-50%, 10px);
    margin-bottom: 30px;
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
  .content {
    width: 100%;
    position: relative;

    h3 {
      color: white;
      font-weight: 500;
      font-size: 36px;
      letter-spacing: 14px;
      margin-bottom: 10px;
    }
    .textContainer {
      margin: 0 auto;
      margin-bottom: 6px;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 0 30px;

      .personWrapper {
        display: flex;
        align-items: center;
        .person {
          width: 60px;
          height: auto;
        }
        &.left {
          justify-content: flex-start;
          .person {
            margin-right: 8px;
          }
        }
        &.right {
          justify-content: flex-end;
          .person {
            margin-left: 8px;
          }
        }
        h5 {
          font-weight: 400;
        }
      }
      .textWrapper {
        position: relative;
        top: -4px;
        background-color: white;
        border-radius: 24px;
        padding: 6px 20px;
        height: fit-content;
      }
      .text {
        color: $primary;
        font-size: 14px;
        font-weight: 600;
        line-height: 1.5rem;
        letter-spacing: 2px;
      }
    }
    .exchangeWrapper {
      padding: 0 20px;
      margin-bottom: 10px;

      .box {
        margin: 0 auto;
        max-width: 100%;
        background-color: #ffffff;
        border-radius: 10px;
        padding: 24px 30px;
        display: flex;
        flex-direction: column;
        button {
          width: 100%;
          height: 100px;
          border-radius: 10px;
        }
      }

      .textWrapper {
        position: relative;
        background-color: white;
        border-radius: 24px;
        padding: 8px 36px 8px 24px;
        height: fit-content;
        width: 100%;
        &.small {
          padding: 0px 10px;
          width: fit-content;
        }
      }
      .checkBoxWrapper {
        display: flex;
        align-items: center;

        .checkBox {
          border: 2px solid $primary;
          border-radius: 100%;
          width: 20px;
          height: 20px;
          margin-right: 6px;
          position: relative;
          .checked {
            background: url(~@/assets/mission-checked.png) no-repeat center /
              contain;
            width: 20px;
            height: 20px;
            position: relative;
            filter: brightness(0.7);
            top: -4px;
            left: 2px;
          }
        }
      }
      h4 {
        font-size: 20px;
        line-height: 1.5rem;
        font-weight: 400;
        position: relative;
        letter-spacing: 4px;
        top: -1px;
      }
      h6 {
        font-size: 12px;
        line-height: 1.2rem;
        font-weight: 600;
        letter-spacing: 2px;
      }
      .text {
        color: $primary;
        text-align: left;
      }
    }
    .buttonWrapper {
      width: 100%;
      padding: 0 40px;
    }
    button {
      width: 70%;
      height: 40px;
      background-color: $primary;
      border-radius: 30px;
      border: none;
      font-size: 20px;
      font-weight: 500;
      letter-spacing: 4px;
      color: white;
      &.isLoading {
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
        padding-bottom: #{math.div(1197, 2160) * 100%};
      }
    }
  }
}
</style>
