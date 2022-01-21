<template>
 <div class="login">
     <div class="box">
         <h3>后台管理系统</h3>
           <el-form ref="formRef" :model="form" >
            <el-form-item label="账号">
                <el-input  v-model="form.username" ></el-input>
            </el-form-item>
            <el-form-item label="密码 " >
                <el-input  v-model="form.password"  show-password></el-input>
            </el-form-item>

            <el-form-item class="btn" >
                <el-button type="primary" @click="onSubmit">登录</el-button>
                <el-button @click="reset">重置</el-button>
            </el-form-item>
        </el-form>
     </div>
 </div>
</template>

<script>
import { reactive  } from 'vue'
 export default {
     setup(){
         const form = reactive({
             username:'',
             password:''
         })
        const onSubmit = () => {
            console.log(12);
        }

        onMounted(){
            const reset = () => {
            $refs.formRef.resetFields()
            }
        }

         return {form,onSubmit,reset}
     }
 }
</script>

<style lang="less" scoped>
.login{
    width: 100%;
    height: 100%;
    background-color: burlywood;
    background: url('../imgs/back2.jpg') no-repeat;
    background-size: 100% 100%;
    padding-top: 13%;
    box-sizing: border-box;
    .box{
        width: 500px;
        height: 300px;
        background-color: rgba(150, 30, 120, .3);
        box-shadow: 0 0 30px #eee;
        margin: 0 auto;
        border-radius: 20px;
        padding-top: 20px;
        box-sizing: border-box;
        h3{
            text-align: center;
            color: #fff;
            margin-bottom: 70px;
        }
        .el-form{
            padding-left: -10px;
        }
        .el-input{
            width: 220px;
        }
        :deep(.el-form-item){
            justify-content: center;
        }
        :deep(.el-form-item__content) {
            width: 220px ;
            padding: 0;
            flex: .5;
            justify-content: center;
        }

    }
}
</style>