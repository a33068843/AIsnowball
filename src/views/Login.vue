<template lang="pug">
section
  .loginContainer
    .logo
    .snow1
    .snow2
    .mountain
    .snow3
    .snow4
    .snow5
    .snow6
    .form
      label.name
        input(type='text' v-model="name")
      label.num
        input(type='number' v-model="member")
      label
        button(v-if='!isLoading' @click="onSubmit") 報到
        button.isLoading(v-else='isLoading') 進入 AI 冰雪奇園中...
        h5.error(v-if='!isFirst && (!name || !member)') 請填寫姓名及人數~
        h5.error(v-if='!isUser') 無此使用者
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      name: '',
      member: '',
      isFirst: true,
      isUser: true,
      isLoading: false,
    };
  },
  methods: {
    async onSubmit() {
      if (this.isLoading) {
        return;
      }

      this.$data.isUser = true;
      this.$data.isFirst = false;
      const name = this.$data.name;
      const member = this.$data.member.toString();
      if (!name || !member) return;

      this.$data.isLoading = true;

      setTimeout(async () => {
        const hasUser = await this.$store.dispatch('GetUser', { name, member });

        if (!hasUser) {
          this.isUser = false;
          this.isLoading = false;
          this.isFirst = true;
          return;
        }

        this.$data.isLoading = false;
        this.$router.push('/success');
      }, 0);
    },
  },
};
</script>

<style lang="scss">
.loginContainer {
  width: 100%;
  height: 100%;
  min-height: 100vh;
  position: relative;
  background: linear-gradient(
    180deg,
    rgba(168, 217, 241, 1) 0%,
    rgba(255, 255, 255, 1) 40%,
    rgba(125, 201, 232, 1) 100%
  );
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .logo {
    position: relative;
    background: url(~@/assets/logo-2x.png) no-repeat center / contain;
    width: #{math.div(727, 1080) * 100%};
    margin-bottom: 20px;
    // left: 50%;
    // transform: translate(-50%, 0);
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
  .mountain {
    position: relative;
    background: url(~@/assets/mountain-small.png) no-repeat center / contain;
    width: 100%;
    margin-bottom: 30px;
    &:before {
      content: '';
      display: block;
      padding-bottom: #{math.div(1197, 2160) * 100%};
    }
  }
  .form {
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 0 80px;
    label {
      margin-bottom: 20px;
      &:last-child {
        margin-bottom: 0px;
      }
    }
    input {
      width: 100%;
      height: 40px;
      position: relative;
      outline: none;
      border-radius: 30px;
      border: none;
      font-size: 20px;
      padding: 0 20px 0 60px;
      color: $primary;
      -webkit-appearance: none;
    }
    input[type='number'] {
      -moz-appearance: textfield;
    }
    button {
      width: 100%;
      height: 40px;
      background-color: $primary;
      border-radius: 30px;
      border: none;
      font-size: 20px;
      font-weight: 500;
      letter-spacing: 4px;
      color: white;
      margin-bottom: 10px;
      cursor: pointer;

      &.isLoading {
        background-color: $primaryOpacity;
        cursor: default;
      }
    }
    h5 {
      font-size: 12px;
      font-weight: 500;
      color: #b41c1c;
    }
    .name,
    .num {
      font-family: 'GenJyuuGothic-P';
      color: $primary;
      font-weight: 500;
      position: relative;
      &::before {
        position: absolute;
        z-index: 1;
        top: 51%;
        left: 10px;
        transform: translate(0, -50%);
      }
    }
    .name {
      &::before {
        content: '姓名';
        border-right: 2px solid $primary;
        padding: 4px 8px 4px 0;
      }
    }
    .num {
      &::before {
        content: '人數';
        border-right: 2px solid $primary;
        padding: 4px 8px 4px 0;
      }
    }
  }
}
</style>
