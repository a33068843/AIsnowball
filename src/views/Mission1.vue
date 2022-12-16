<template lang="pug">
section
  .mission1Container
    .logo
    .snow1
    .snow2
    .titleWrapper
      h4.title 金融知識大挑戰
    .mountain
    .content
      .container
        .person
        .textWrapper
          .title 親愛的中國信託銀行貴賓您好：
          .text 歡迎來到滑冰知識大挑戰，趕快一起完成金融小知識，就可以帶回精緻餐點唷！
      .buttonWrapper
        .snow
        button(@click="goQuestions") 進入遊戲
        .snow
      .return(@click="goHome") 返回首頁
</template>

<script>

export default {
  name: 'Mission1',
  methods: {
    goQuestions() {
      this.$router.push('questions');
    },
    goHome() {
      this.$router.push('mission');
    }
  }
}
</script>

<style lang="scss">
.mission1Container {
  width: 100%;
  height: 100%;
  min-height: 100vh;
  position: relative;
  background: linear-gradient(180deg, rgba(143, 207, 233,1) 0%, rgba(255,255,255,1) 30%, rgba(168, 216, 240,1) 50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .logo {
    position: relative;
    background: url(~@/assets/logo-2x.png) no-repeat center / contain;
    width: #{math.div(727, 1080) * 100%};
    margin-bottom: 12px;
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
    top: 52%;
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
    top: 50%;
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
    top: 70%;
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
    top: 72%;
    left: 88%;
    &:before {
    content: '';
    display: block;
    padding-bottom: #{1 * 100%};
    }
  }
  .mountain {
    position: relative;
    background: url(~@/assets/mountain-small.png) no-repeat center / contain;
    width: 80%;
    &:before {
      content: '';
      display: block;
      padding-bottom: #{math.div(1197, 2160) * 100%};
    }
  }
  .titleWrapper {
    width: fit-content;
    position: relative;
    padding: 6px 20px;
    background: white;
    border: 2px solid $primary;
    border-radius: 20px;
    margin-bottom: 12px;
  }
  .title {
    color: $primary;
    font-weight: 500;
    font-size: 20px;
    letter-spacing: 4px;
  }
  .text {
    color: $primary;
    font-weight: 500;
    font-size: 14px;
    letter-spacing: 4px;
  }
  .content {
    width: 100%;
    position: relative;
    background: linear-gradient(180deg, rgba(224, 240, 249,1) 0%, rgba(168, 216, 240,1) 20%);
    padding: 20px 0 0 0;

      .container {
        padding: 0 30px;
        margin: 0 auto;
        position: relative;
        margin-bottom: 30px;

        .person {
          position: absolute;
          background: url(~@/assets/mission-person.png) no-repeat center / contain;
          width: 64px;
          top: -40px;
          left: 18px;
          &::before {
            content: '';
            display: block;
            padding-bottom: #{1 * 100%};
          }
        }
        .textWrapper {
          background: white;
          padding: 18px 30px;
          border-radius: 20px;
          text-align: left;
          .title {
            font-size: 16px;
            margin-bottom: 10px;
            font-weight: 600;
            font-family: 'GenJyuuGothic-P';
            position: relative;
            left: 8px;
            letter-spacing: 2px;
          }
          .text {
            font-family: 'GenJyuuGothic-P';
            font-size: 16px;
            font-weight: 500;
            line-height: 1.25rem;
          }
        }
      }
      .buttonWrapper {
        padding: 0 20px;
        margin-bottom: 16px;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 40px;
        .snow {
          background: url(~@/assets/snow.png) no-repeat center / contain;
          width: 20%;
          height: 100%;
        }
        button {
          width: 100%;
          height: 100%;
          background-color: $primary;
          border-radius: 30px;
          border: none;
          font-size: 20px;
          font-weight: 500;
          letter-spacing: 4px;
          color: white;
        }
      }
      .return {
        color: $primary;
        font-size: 14px;
        font-weight: 500;
        width: fit-content;
        margin: 0 auto;
        text-align: center;
        &::after {
          content: '';
          display: block;
          border-bottom: 2px solid $primary;
          position: relative;
          top: 1px;
          left: -1px;
        }
      }
  }
}
</style>
