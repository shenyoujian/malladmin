<template>
  <div class="login-wrap">
    <el-form class="login-form" label-position="left" label-width="80px" :model="formData">
      <h2>用户登录</h2>
      <el-form-item label="用户名">
        <el-input v-model="formData.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="formData.password"></el-input>
      </el-form-item>
      <el-button @click="handleLogin" class="login-btn" type="primary">登录</el-button>
    </el-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      formData: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    // 发起登录请求
    async handleLogin () {
      // 使用es7的await和async来使异步代码看起来像同步代码
      const result = await this.$http.post('login', this.formData)

      const {meta: {status, msg}} = result.data

      if (status === 200) {
        // 1、跳转到首页
        this.$router.push({name: 'home'})
        // 2、提示成功
        this.$message.success(msg)
      } else {
        // 提示失败
        this.$message.warning(msg)
      }

      // 异步代码操作
      // this.$http.post('login', this.formData)
      //   .then((res) => {
      //     const {meta: {status, msg}} = res.data
      //     if (status === 200) {
      //       // 1、跳转首页
      //       this.$router.push({name: 'home'})
      //       // 2、提示成功
      //       this.$message.success(msg)
      //     } else {
      //       // 提示失败
      //       this.$message.warning(msg)
      //     }
      //   })
    }
  }
}
</script>
<style>
.login-wrap {
  background-color: #324152;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-wrap .login-form {
  background-color: #fff;
  width: 400px;
  padding: 30px;
  border-radius: 5px;
}
.login-wrap .login-form .login-btn {
  width: 100%;
}
</style>
