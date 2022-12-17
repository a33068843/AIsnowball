<template lang="pug">
section
  .successContainer
    .logo
    .snow1
    .snow2
    .snow3
    .snow4
    .snow5
    .snow6
    .content
      .textContainer
        .textWrapper
          h5.text 報到成功！<br>歡迎來到 AI 冰雪奇園~
      .sketch
        .cookie1
        .cookie2
        .castle
      .buttonWrapper
        button(@click='handleButton') 進入冰雪奇園
</template>

<script>
export default {
  name: 'Success',
  methods: {
    handleButton() {
      this.$router.push('/mission');
    },
  },
};
</script>

<style lang="scss">
.successContainer {
  width: 100%;
  height: 100%;
  min-height: 100vh;
  position: relative;
  background: linear-gradient(
    180deg,
    rgba(168, 217, 241, 1) 0%,
    rgba(255, 255, 255, 1) 80%,
    rgba(125, 201, 232, 1) 100%
  );
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

    .textContainer {
      padding: 0 40px;
      margin-bottom: 50px;

      .textWrapper {
        width: fit-content;
        background-color: white;
        border-radius: 24px;
        padding: 20px 20px;
        margin: 0 auto;
      }
      .text {
        color: $primary;
        font-size: 20px;
        font-weight: 400;
        line-height: 1.5rem;
        letter-spacing: 2px;
      }
    }
    .sketch {
      width: 100%;
      position: relative;
      &::before {
        content: '';
        display: block;
        padding-bottom: #{math.div(420, 982) * 100%};
      }

      .cookie1 {
        position: absolute;
        background: url(~@/assets/success-cookie1.png) no-repeat center /
          contain;
        width: #{math.div(465, 1080) * 100%};
        top: 0%;
        left: 5%;
        &:before {
          content: '';
          display: block;
          padding-bottom: #{math.div(356, 465) * 100%};
        }
      }
      .cookie2 {
        position: absolute;
        background: url(~@/assets/success-cookie2.png) no-repeat center /
          contain;
        width: #{math.div(481, 1080) * 100%};
        top: -5%;
        right: 5%;
        &:before {
          content: '';
          display: block;
          padding-bottom: #{math.div(345, 481) * 100%};
        }
      }
      .castle {
        position: absolute;
        background: url(~@/assets/success-cake.png) no-repeat center / contain;
        width: #{math.div(300, 1080) * 100%};
        bottom: 0;
        left: 50%;
        transform: translate(-50%, 0);
        &:before {
          content: '';
          display: block;
          padding-bottom: #{math.div(749, 629) * 100%};
        }
      }
    }
    .buttonWrapper {
      width: 100%;
      padding: 0 40px;
    }
    button {
      width: 80%;
      height: 40px;
      background-color: $primary;
      border-radius: 30px;
      border: none;
      font-size: 20px;
      font-weight: 500;
      letter-spacing: 4px;
      color: white;
      cursor: pointer;
    }
  }
}
</style>
