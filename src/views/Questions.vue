<template lang="pug">
section
  .questionContainer
    .content
      .questionNumber
        h3 第{{question}}/7題
      .questionWrapper
        .number
          h2 Q {{question}}
        .question(v-if="!isQ4 && !isQ6")
          h4 {{questions[question - 1]}}
        .question(v-if="isQ4")
          h4.center 投資新趨勢「ESG」，全名是
          h4.center.small Environment<br>(環境)
          h4.center.small Social Responsibility<br>(社會責任)
          h4.center.small Corporate Governance<br>(公司治理)
        .question(v-if="isQ6")
          h4.center 中國信託銀行英文簡稱
          h4.center CTBC Bank
      .answerWrapper
        button.correct(@click='console(true)')
        button.wrong(@click='console(false)')
      h5.return(@click="goHome") 返回首頁
</template>

<script>
export default {
  name: 'Questions',
  data() {
    const isQ4 = this.$store.state.question == 4;
    const isQ6 = this.$store.state.question == 6;
    return {
      isQ4: isQ4,
      isQ6: isQ6
    }
  },
  computed: {
    question () {
      return this.$store.state.question
    },
    questions () {
      return this.$store.state.questions
    },
  },
  methods: {
    console(ans) {
      const question = this.$store.state.question;
      const answers = this.$store.state.answers;
      const isCorrect = ans === answers[question - 1];
      if (isCorrect) {
        this.$store.commit('nextQuestion', 1);
        this.$router.push('correct');
      }
      if (!isCorrect) {
        this.$router.push('wrong');
      }
    },
    goHome() {
      this.$router.push('mission');
    }
  }
}
</script>

<style lang="scss">
.questionContainer {
  width: 100%;
  height: fit-content;
  min-height: 100vh;
  background: #A8D8F0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .content {
    width: 100%;
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .questionNumber {
      width: fit-content;
      background: white;
      border: 2px solid $primary;
      padding: 6px 30px;
      border-radius: 20px;
      letter-spacing: 4px;
      margin-bottom: 10px;
    }
    .questionWrapper {
      min-height: 280px;
      width: 100%;
      background: white;
      padding: 20px 18px;
      border-radius: 40px;
      margin-bottom: 20px;
    }
    .number {
      margin-bottom: 18px;
      h2 {
        font-size: 48px;
      }
    }
    .question {
      h4 {
        font-size: 20px;
        line-height: 1.5rem;
        white-space: pre-line;
        letter-spacing: 4px;
        text-align: justify;
        &.center {
          text-align: center;
        }
        &.small {
          font-size: 18px;
        }
      }
    }
    .answerWrapper {
      width: 100%;
      display: flex;
      justify-content: space-around;
      margin-bottom: 24px;

      button {
        border: none;
      }
      .correct {
        background: url(~@/assets/question-correct.png) no-repeat center/ contain;
        width: 130px;
        height: 70px;
      }
      .wrong {
        background: url(~@/assets/question-wrong.png) no-repeat center/ contain;
        width: 130px;
        height: 70px;
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
