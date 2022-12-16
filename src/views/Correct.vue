<template lang="pug">
section
  .answerContainer
    .content
      .smile
      .textImg
      .textWrapper
        h3.text 恭喜你
      .persons
        .person
        .cookie
      .buttonContainer
        .snow
        button(@click="goNext") 前往下一題
        .snow
      h5.return(@click="goHome") 返回首頁
</template>

<script>
import { updateUser } from '@/firebase';
export default {
  name: 'Correct',
  methods: {
    goNext() {
      const question = this.$store.state.question;
      if (question > 7) {
        const user = this.$store.state.user;
        const update = {
          questionDone: true
        }
        this.$store.commit('questionIsDone');
        updateUser(user, update)
          .then(this.$router.push('pass'));
      }
      else {
        this.$router.push('questions');
      }
    },
    goHome() {
      this.$router.push('mission');
    }
  }
}
</script>

<style lang="scss">
section {
  background: linear-gradient(180deg, #a8d9f1 0%, white 40%, #7dc9e8 100%);
}
.answerContainer {
  width: 100%;
  height: fit-content;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .content {
    width: 100%;
    padding: 0 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .smile {
      background: url(~@/assets/correct-smile.png) no-repeat center / contain;
      width: 100%;
      height: 160px;
      margin-bottom: 20px;
    }
    .textImg {
      background: url(~@/assets/correct-text.png) no-repeat center / contain;
      width: 100%;
      height: 60px;
      margin-bottom: 30px;
    }
    .textWrapper {
      background: white;
      padding: 10px 30px;
      border-radius: 20px;
      margin-bottom: 20px;
      h3 {
        font-weight: 500;
        letter-spacing: 4px;
        font-size: 24px;
      }
    }
    .persons {
      width: 100%;
      height: 120px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;

      .person {
        background: url(~@/assets/success-cookie1.png) no-repeat center / contain;
        width: 100%;
        height: 100%;
      }
      .cookie {
        background: url(~@/assets/success-cookie2.png) no-repeat center / contain;
        width: 100%;
        height: 100%;
        position: relative;
        bottom: 9px;
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
