import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate';

export default createStore({
  state: {
    user: '',
    member: '',
    questionDone: false,
    formDone: false,
    question: 1,
    questions: [
      '親子金融服務可以培養孩子學會控制花錢和定期存錢的習慣，還可以幫助家長保護未成年子女帳戶的使用、提款和轉帳交易',
      '親子金融服務特色之一，在客戶成年當天的前一天就會自動解除綁定，不再享有親子金融服務',
      '智能理財是最新投資趨勢',
      `投資新趨勢「ESG」，全名是
      Environment
      (環境)
      Social Responsibility
      (社會責任)
      Corporate Governance
      (公司治理)`,
      '中國信託銀行智能服務引領金融科技，打造最有溫度的服務',
      `中國信託銀行英文簡稱
      CTBC Bank`,
      '中國信託銀行「全方位家庭理財健診」從六大構面：退休規劃、醫療保障、目標規劃、子女教育金、家庭責任、財富傳承提供您所需的規劃服務。'
    ],
    answers: [true,true,true,true,true,true,true]
  },
  plugins: [createPersistedState()],
  mutations: {
    nextQuestion(state, payload) {
      state.question = state.question + payload;
    },
    loadUser(state, payload) {
      state.user = payload.name;
      state.questionDone = payload.questionDone;
      state.formDone = payload.formDone;
      state.question = payload.question;
    },
    questionIsDone(state) {
      state.questionDone = true;
    },
    formIsDone(state) {
      state.formDone = true;
    },
  },
  actions: {
  },
  modules: {
  }
})
