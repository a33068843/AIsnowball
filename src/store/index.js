import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import { GoogleSpreadsheet } from 'google-spreadsheet';
import creds from '@/client_secret.json';

const sheetName = 'DATA';
const googleSheetApi = `https://sheets.googleapis.com/v4/spreadsheets/${process.env.VUE_APP_SHEET_ID}/values/`;

export const generateSheetApi = (range, majorDimension) => {
  let params = new URLSearchParams({
    alt: 'json',
    key: process.env.VUE_APP_SHEET_API,
  });

  if (majorDimension) {
    params.append('majorDimension', majorDimension);
  }

  const sheetAPI = `${googleSheetApi}${sheetName}${
    range ? `!${range}` : ``
  }?${params}`;

  return sheetAPI;
};

export default createStore({
  state: {
    id: '',
    user: '',
    member: '',
    video: '',
    survey: '',
    question_1: '',
    question_2: '',
    question_2_other: '',
    question_3: '',
    coupon: '',
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
      '中國信託銀行「全方位家庭理財健診」從六大構面：退休規劃、醫療保障、目標規劃、子女教育金、家庭責任、財富傳承提供您所需的規劃服務。',
    ],
    answers: [true, true, true, true, true, true, true],
  },
  plugins: [createPersistedState()],
  mutations: {
    setUser(state, payload) {
      const {
        id,
        user,
        member,
        video,
        survey,
        question_1,
        question_2,
        question_2_other,
        question_3,
        coupon,
      } = payload;
      state.id = id;
      state.user = user;
      state.member = member;
      state.video = video;
      state.survey = survey;
      state.question_1 = question_1;
      state.question_2 = question_2;
      state.question_2_other = question_2_other;
      state.question_3 = question_3;
      state.coupon = coupon;
    },
    setVideoDone(state) {
      state.video = 'true';
    },
    setSurveyDone(state, payload) {
      const { question_1, question_2, question_2_other, question_3, survey } =
        payload;
      state.question_1 = question_1;
      state.question_2 = question_2;
      state.question_2_other = question_2_other;
      state.question_3 = question_3;
      state.survey = survey;
    },
    setCoupon(state) {
      state.coupon = 'true';
    },
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
    async GetUser({ commit }, { name }) {
      const doc = new GoogleSpreadsheet(process.env.VUE_APP_SHEET_ID);
      await doc.useServiceAccountAuth(creds);
      await doc.loadInfo();
      const sheet = doc.sheetsByTitle[sheetName];
      const rows = await sheet.getRows();
      // rows[0].Name = 'Shit';
      // await rows[0].save();

      const user = rows.find((row) => {
        const { Name } = row;
        return Name === name;
      });

      if (user) {
        const userData = {
          id: user.Id || user.Id >= 0 ? user.Id : '',
          user: user.Name ? user.Name : '',
          member: user.Member ? user.Member : '',
          video: user.Video ? user.Video : '',
          survey: user.Survey ? user.Survey : '',
          question_1: user.Question_1 ? user.Question_1 : '',
          question_2: user.Question_2 ? user.Question_2 : '',
          question_2_other: user.Question_2_Other ? user.Question_2_Other : '',
          question_3: user.Question_3 ? user.Question_3 : '',
          coupon: user.Coupon ? user.Coupon : '',
        };
        commit('setUser', userData);
      }

      return !!user;

      // console.log(payload);
      // const doc = new GoogleSpreadsheet(process.env.VUE_APP_SHEET_ID);
      // console.log(apiConfig);
      // await doc.useServiceAccountAuth({
      //   client_email: `${process.env.VUE_APP_CLIENT_ID}.apps.googleusercontent.com`,
      //   private_key: `${process.env.VUE_APP_SHEET_API}`,
      // });
      // console.log(doc);

      // const requestOptions = {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ data: [[1, 2]] }),
      // };
      // console.log(generateSheetApi('A4:B4'));
      // fetch(generateSheetApi('A4:B4'), requestOptions)
      //   .then((response) => response.json())
      //   .then((data) => (this.postId = data.id));
      // await fetch(generateSheetApi())
      //   .then((res) => res.json())
      //   .then((res) => {
      //     console.log(res);
      //   });
    },
    async videoComplete({ commit }, id) {
      const doc = new GoogleSpreadsheet(process.env.VUE_APP_SHEET_ID);
      await doc.useServiceAccountAuth(creds);
      await doc.loadInfo();
      const sheet = doc.sheetsByTitle[sheetName];
      const rows = await sheet.getRows();
      rows[id].Video = 'true';
      await rows[id].save();
      commit('setVideoDone');
    },
    async surveyComplete({ commit }, payload) {
      const {
        id,
        question_1,
        question_2,
        question_2_other,
        question_3,
        survey,
      } = payload;
      const doc = new GoogleSpreadsheet(process.env.VUE_APP_SHEET_ID);
      await doc.useServiceAccountAuth(creds);
      await doc.loadInfo();
      const sheet = doc.sheetsByTitle[sheetName];
      const rows = await sheet.getRows();
      rows[id].Question_1 = question_1;
      rows[id].Question_2 = question_2;
      rows[id].Question_2_Other = question_2_other;
      rows[id].Question_3 = question_3;
      rows[id].Survey = survey;
      await rows[id].save();
      await commit('setSurveyDone', payload);
    },
    async exchange({ commit }, id) {
      const doc = new GoogleSpreadsheet(process.env.VUE_APP_SHEET_ID);
      await doc.useServiceAccountAuth(creds);
      await doc.loadInfo();
      const sheet = doc.sheetsByTitle[sheetName];
      const rows = await sheet.getRows();
      rows[id].Coupon = 'true';
      await rows[id].save();
      await commit('setCoupon');
    },
  },
  modules: {},
});
