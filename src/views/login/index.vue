<template>
<div class="login-container">
    <div class="login-head">
        <!-- <img src="./login.png" alt=""> -->
    </div>
    <el-form 
    :model="ruleForm"
    :rules="rules"
    ref="ruleForm"
    class="login-form"
  >
    <el-form-item >
      <el-input placeholder="请输入手机号" v-model="ruleForm.name"></el-input>
    </el-form-item>
    <el-form-item >
      <el-input placeholder="请输入验证码" v-model="ruleForm.code"></el-input>
    </el-form-item>
    <el-form-item >
      <!-- <el-input placeholder="请输入验证码" v-model="ruleForm.name"></el-input> -->
      <el-checkbox v-model="ruleForm.checked">我已阅读并同意用户协议和隐私条款</el-checkbox>
    </el-form-item>
    <el-form-item>
      <el-button class="login-btn" type="primary" @click="submitForm('ruleForm')"
        >登录</el-button
      >
    </el-form-item>
  </el-form>
</div>
  
</template>

<script>
export default {
  name: "login",
  data() {
    return {
        ruleForm: {
          name: '',
          code:"",
          checked:true,
        },
        rules: {
          name: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
        },
        
    }
    
    
  },
  methods: {
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    alert('submit!');
                } else {
                    console.log('error submit!!');
                    return false;
                }
        })
    },
    
  }
}
</script>

<style scoped lang='less'>
    .login-container{
        position: fixed;
        left:0;
        bottom: 0;
        right:0;
        top:0;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        background: url('./login_bg.jpg') no-repeat;
        background-size: cover;
        .login-head{
            width:200px;
            height: 200px;
            background: url('./logo.png') no-repeat;
        }
        .login-form{
            background: #fff;
            padding: 50px;
            // padding-top: 200px;
            min-width: 300px;
            .login-btn{
                width: 100%;
            }
        }
    }
</style>