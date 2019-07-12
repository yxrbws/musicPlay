<template>
    <div class="container">
        <span class="mui-icon mui-icon-person"></span>
        <form action="../login.php" method="post">
            <label for="username">帐号：</label><input type="text"><br />
            <label for="password">密码：</label><input type="password"><br />
            <input type="radio"><label>记住密码</label>
            <a href="#">忘记密码</a>
            <br />
            <button class="btn btn-light" type="submit">登录</button>
            <button class="btn btn-light">注册</button>
        </form>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
    .container{
        text-align: center;
        padding: 10px;
        span{
            widows: 60px;
            height: 60px;
            font-size: 60px;
            margin-bottom: 25px; 
        }
        input[type=text]{
            width: 75%;
            margin: 5px;
        }
        input[type=password]{
            width: 75%;
            margin: 5px;
        }
    }
</style>
