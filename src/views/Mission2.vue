<template lang="pug">
section
  .mission2Container
    .content
      h2.title 活動滿意度調查
      .textBox
        h5.text Q1.
        h5.text 您對今天中國信託銀行舉辦的活動是否滿意？
      .radioBox
        .inline
          input(type="radio" id="q1-1" name="question_1" value="非常滿意" v-model="question_1")
          label.text.h5(for="q1-1") 1.非常滿意
        .inline
          input(type="radio" id="q1-2" name="question_1" value="滿意" v-model="question_1")
          label.text.h5(for="q1-2") 2.滿意
        .inline
          input(type="radio" id="q1-3" name="question_1" value="普通" v-model="question_1")
          label.text.h5(for="q1-3") 3.普通
        .inline
          input(type="radio" id="q1-4" name="question_1" value="不滿意" v-model="question_1")
          label.text.h5(for="q1-4") 4.不滿意
        .inline
          input(type="radio" id="q1-5" name="question_1" value="非常不滿意" v-model="question_1")
          label.text.h5(for="q1-5") 5.非常不滿意
      .textBox
        h5.text Q2.
        h5.text 您對認為在家庭理財規劃中，您最需要什麼樣的諮詢及服務？
      .radioBox
        .inline
          input(type="radio" id="q2-1" name="question_2" value="退休理財規劃" v-model="question_2")
          label.text.h5(for="q2-1") 1.退休理財規劃
        .inline
          input(type="radio" id="q2-2" name="question_2" value="醫療保障規劃" v-model="question_2")
          label.text.h5(for="q2-2") 2.醫療保障規劃
        .inline
          input(type="radio" id="q2-3" name="question_2" value="財富傳承規劃" v-model="question_2")
          label.text.h5(for="q2-3") 3.財富傳承規劃
        .inline
          input(type="radio" id="q2-4" name="question_2" value="子女教育金規劃" v-model="question_2")
          label.text.h5(for="q2-4") 4.子女教育金規劃
        .inline
          input(type="radio" id="q2-5" name="question_2" value="夢想金規劃" v-model="question_2")
          label.text.h5(for="q2-5") 5.夢想金規劃
        .inline
          input(type="radio" id="q2-6" name="question_2" value="家庭責任規劃" v-model="question_2")
          label.text.h5(for="q2-6") 6.家庭責任規劃
        .inline
          input(type="radio" id="q2-7" name="question_2" value="家庭財富治理" v-model="question_2")
          label.text.h5(for="q2-7") 7.家庭財富治理
        .inline
          input(type="radio" id="q2-8" name="question_2" value="其他" v-model="question_2")
          label.text.h5(for="q2-8") 8.其他，請填寫
        .inline
          input(type="text" v-model="question_2_other")
      .textBox.last
        h5.text.center 如您對本次活動有任何改善建議，請告訴我們，謝謝！
      .radioBox
        input.last(type="text" v-model="question_3")
      .textBox.info
        h5.text.center 本問卷相關資料將作為日後活動的優先通知，以及內部滿意度及活動成效分析使用，如您同意再行提交，再次感謝您的填答與參與。
      .radioBox.center
        input(type="checkbox" id="q4" name="accept" value="同意提交" v-model="accept")
        label.text.h5.center(for="q4") 同意提交
      button(v-if="!isLoading" @click="submit") 送出
      button.isLoading(v-else) 送出中...
      .textBox(v-if="show")
        h5.error(v-if="!question_1") * Q1 還尚未填寫
        h5.error(v-if="!question_2") * Q2 還尚未填寫
        h5.error(v-if="question_2 == '其他' && !question_2_other") * Q2 還尚未填寫「其他」欄位內容
        h5.error(v-if="!accept") 勾選「同意提交」後才能送出噢!
      .textBox.info
        h3.text.final 問卷結束<br>感謝您的寶貴意見！
    .mountain
</template>

<script>
// import { submitForm, updateUser } from '@/firebase';
export default {
  name: 'Mission2',
  data() {
    return {
      isSurveyComplete: false,
      question_1: '',
      question_2: '',
      question_2_other: '',
      question_3: '',
      accept: '',
      show: false,
      isLoading: false,
    };
  },
  mounted() {
    this.isSurveyComplete = !!this.$store.state.survey;
    if (this.$store.state.survey) {
      this.$router.push('mission');
    }
  },
  methods: {
    async submit() {
      if (this.isLoading) {
        return;
      }

      this.$data.show = true;
      if (!this.$data.question_1) return;
      if (!this.$data.question_2) return;
      if (this.$data.question_2 == '其他' && !this.$data.question_2_other)
        return;
      if (!this.$data.accept) return;

      this.$data.isLoading = true;
      setTimeout(async () => {
        const surveyData = {
          id: this.$store.state.id,
          question_1: this.$data.question_1,
          question_2: this.$data.question_2,
          question_2_other: this.$data.question_2_other,
          question_3: this.$data.question_3,
          survey: 'true',
        };

        await this.$store.dispatch('surveyComplete', surveyData);
        this.isLoading = true;
        this.$router.push('mission');
      }, 0);
    },
  },
};
</script>

<style lang="scss">
.mission2Container {
  width: 100%;
  height: fit-content;
  min-height: 100vh;
  background: linear-gradient(180deg, #ffffff 80%, rgb(125, 201, 232) 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  .content {
    width: 100%;
    padding: 48px 30px 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .title {
      width: 100%;
      letter-spacing: 6px;
      margin-bottom: 30px;
    }
    .text {
      width: 100%;
      text-align: left;
      line-height: 1.2rem;
      margin-bottom: 0.2rem;
      letter-spacing: 2px;
      &:last-of-type {
        margin-bottom: 0;
      }
      &.center {
        text-align: center;
      }
      &.final {
        text-align: center;
        line-height: 2rem;
        letter-spacing: 0.3rem;
      }
    }
    .textBox {
      margin-bottom: 8px;
      width: 100%;
      &.last {
        margin-top: 20px;
        margin-bottom: 30px;
      }
      &.info {
        margin-top: 30px;
        margin-bottom: 20px;
      }
    }
    .radioBox {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      margin-bottom: 18px;
      .inline {
        width: 100%;
        display: flex;
        flex-direction: row;
        position: relative;
        margin-bottom: 8px;
        &:last-child {
          margin-bottom: 0px;
        }
      }
      &.center {
        display: flex;
        justify-content: center;
        align-items: center;
      }
      label {
        display: flex;
        align-items: center;
        position: relative;
        color: $primary;
        margin-bottom: 8px;
        padding-left: 24px;
        &:last-child {
          margin-bottom: 0px;
        }
        &.center {
          justify-content: center;
          width: fit-content;
        }
      }
    }
    input[type='radio']:checked,
    input[type='radio']:not(:checked),
    input[type='checkbox']:checked,
    input[type='checkbox']:not(:checked) {
      opacity: 0;
      position: absolute;
    }
    input[type='radio']:checked + label,
    input[type='radio']:not(:checked) + label,
    input[type='checkbox']:checked + label,
    input[type='checkbox']:not(:checked) + label {
      position: relative;
      display: inline-block;
      &::before {
        content: '';
        position: absolute;
        left: 0;
        top: 1px;
        width: 1rem;
        height: 1rem;
        border-radius: 100%;
        border: 2px solid $primary;
        border-radius: 50%;
      }
      &::after {
        content: '';
        width: 10px;
        height: 10px;
        background: $primary;
        position: absolute;
        top: 4px;
        left: 3px;
        border-radius: 100%;
        -webkit-transition: all 0.2s ease;
        transition: all 0.2s ease;
      }
    }
    input[type='radio']:not(:checked) + label {
      &::after {
        opacity: 0;
      }
    }
    input[type='checkbox']:not(:checked) + label {
      &::after {
        opacity: 0;
      }
    }
    input[type='text'] {
      border: none;
      border-bottom: 2px solid $primary;
      width: 80%;
      height: 30px;
      position: relative;
      left: 24px;
      color: $primary;
      font-size: 16px;
      font-weight: 600;
      outline: none;
      padding: 0;

      &.last {
        width: 100%;
        top: 0;
        left: 0;
      }
    }
    button {
      width: 70%;
      height: 36px;
      background-color: $primary;
      border-radius: 30px;
      border: none;
      font-size: 20px;
      font-weight: 500;
      letter-spacing: 4px;
      color: white;
      margin-bottom: 10px;
      &.isLoading {
        background-color: $primaryOpacity;
      }
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
  h2,
  h3,
  h4,
  h5 {
    color: $primary;
  }
  h2 {
    font-size: 32px;
    font-weight: 700;
  }
  h3 {
    font-size: 18px;
    font-weight: 600;
  }
  h4 {
    font-size: 18px;
    font-weight: 600;
  }
  h5,
  .h5 {
    font-size: 16px;
    font-weight: 600;
    &.error {
      color: #b41c1c;
      margin-bottom: 8px;
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
}
</style>
