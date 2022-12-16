<template lang="pug">
section
  .passContainer
    .content
      .textImg
      .textWrapper
        h4.text 完成任務
      .mountain
      .persons
        .cookie
        .person
      .buttonContainer
        .snow
        button(@click="goHome") 返回首頁
        .snow
</template>

<script>
export default {
  name: 'Pass',
  methods: {
    goHome() {
      this.$router.push('mission');
    },
  }
}
</script>

<style lang="scss">
section {
  background: linear-gradient(180deg, white 30%, #7dc9e8 100%);
}
.passContainer {
  width: 100%;
  height: fit-content;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .content {
    width: 100%;
    height: fit-content;
    padding: 40px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .textImg {
      background: url(~@/assets/pass-text.png) no-repeat center / contain;
      width: 100%;
      height: 120px;
      margin-bottom: 20px;
    }
    .textWrapper {
      background: white;
      border: 2px solid $primary;
      padding: 6px 40px;
      border-radius: 20px;
      margin-bottom: 20px;
      h4 {
        font-size: 20px;
        font-weight: 500;
        letter-spacing: 4px;
      }
    }
    .mountain {
      background: url(~@/assets/mountain-small.png) no-repeat center / contain;
      width: 100%;

      &::before {
        content: '';
        display: block;
        padding-bottom: #{math.div(1197, 2160) * 100%};
      }
    }
    .persons {
      width: 100%;
      height: 120px;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      transform: translate(0, -60px);

      .cookie {
        background: url(~@/assets/pass-cookie.png) no-repeat center / contain;
        width: 100%;
        height: 100%;
      }
      .person {
        background: url(~@/assets/pass-person.png) no-repeat center / contain;
        width: 100%;
        height: 80%;
      }
    }
    .buttonContainer {
      width: 100%;
      height: 44px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 20px;
      .snow {
        background: url(~@/assets/snow.png) no-repeat center / contain;
        width: 20%;
        height: 100%;
      }
      button {
        width: 60%;
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
  }
  .return {
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
  h2,h3,h4,h5 {
    color: $primary;
  }
  h2 {
    font-size: 36px;
    font-weight: 500;
  }
  h3 {
    font-size: 18px;
    font-weight: 600;
  }
  h4 {
    font-size: 16px;
    font-weight: 600;
  }
  h5 {
    font-size: 14px;
    font-weight: 600;
  }
}
</style>
