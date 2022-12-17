<template lang="pug">
section
  .missionContainer
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
            h5.text 完成以下任務
        .personWrapper.right
          .textWrapper
            h5.text 即可領取精緻餐點
          img.person(src="@/assets/mission-donout.png")
      .missionWrapper
        .box
          .textWrapper.small
            h6.text 任務一
          .textWrapper.checkBoxWrapper(@click='toVideo')
            .checkBox
              .checked(v-show='isVideoDone')
            h4.text 精彩影片觀看
          .textWrapper.small
            h6.text 任務二
          .textWrapper.checkBoxWrapper(@click='toSurvey')
            .checkBox
              .checked(v-show='isSurveyDone')
            h4.text 活動滿意度填寫
      .buttonWrapper
        button(v-show='!isSurveyDone || !isVideoDone') 尚未完成
        button(v-show='isSurveyDone && isVideoDone' @click='toCoupon') 兌換精緻餐點
</template>

<script>
export default {
  name: 'Success',
  components: {},
  data() {
    return {
      isVideoDone: false,
      isSurveyDone: false,
    };
  },
  mounted() {
    if (!this.$store.state.user) {
      this.$router.push('/');
    }
    this.$data.isVideoDone = !!this.$store.state.video;
    this.$data.isSurveyDone = !!this.$store.state.survey;
  },
  methods: {
    toVideo() {
      // TODO: 看過影片後能否點回去再次瀏覽
      const isVideoDone = this.$data.isVideoDone;
      if (!isVideoDone) {
        this.$router.push('video');
      }
    },
    toSurvey() {
      const isSurveyDone = this.$data.isSurveyDone;
      if (!isSurveyDone) {
        this.$router.push('mission2');
      }
    },
    toCoupon() {
      this.$router.push('exchange');
    },
  },
};
</script>

<style lang="scss">
.missionContainer {
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
      padding: 0 60px;

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
    .missionWrapper {
      padding: 0 20px;
      margin-bottom: 20px;

      .box {
        margin: 0 auto;
        max-width: fit-content;
        background-color: #7dc8e7;
        border-radius: 10px;
        padding: 10px 20px;
        display: flex;
        flex-direction: column;
      }

      .textWrapper {
        position: relative;
        background-color: white;
        border-radius: 24px;
        padding: 8px 36px 8px 24px;
        height: fit-content;
        width: 100%;
        margin-bottom: 8px;
        &:last-child {
          margin-bottom: 0px;
        }
        &.small {
          padding: 0px 10px;
          width: fit-content;
        }
      }
      .checkBoxWrapper {
        display: flex;
        align-items: center;
        cursor: pointer;

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
    }
  }
}
</style>
