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
    form
      label.name
        input(type='text')
      label.num
        input(type='number')
      label
        button 報到
</template>

<script>
import InputColumn from '@/components/InputColumn.vue'

export default {
  name: 'About',
  components: {
    InputColumn
  }
}
</script>

<style lang="scss">
.loginContainer {
  width: 100%;
  height: 100%;
  position: relative;
  background: linear-gradient(180deg, rgba(168,217,241,1) 0%, rgba(255,255,255,1) 40%, rgba(125,201,232,1) 100%);
  &:before {
    content: '';
    display: block;
    padding-bottom: #{math.div(1920, 1080) * 100%};
  }
  .logo {
    position: absolute;
    background: url(~@/assets/logo-2x.png) no-repeat center / contain;
    width: #{math.div(727, 1080) * 100%};
    left: 50%;
    top: #{math.div(74, 1920) * 100%};
    transform: translate(-50%, 0);
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
    position: absolute;
    background: url(~@/assets/mountain.png) no-repeat center / contain;
    width: 100%;
    bottom: 0%;
    &:before {
    content: '';
    display: block;
    padding-bottom: #{math.div(2762, 2160) * 100%};
    }
  }
  form {
    width: 100%;
    position: absolute;
    top: 65%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 0 40px;

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
    }
    .name,.num {
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
        content: '姓名 ▏';
      }
    }
    .num {
      &::before {
        content: '電話 ▏';
      }
    }
  }
}
</style>
