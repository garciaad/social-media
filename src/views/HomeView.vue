<template>
<div class="home" >
        <div class="loginInfo">
            <h1>FOLKS</h1>
            <h3>Let's get linked!</h3>
            <div class="form">
                <input type="text" name="usuario" id="usuario" v-model="usuario">
                <input type="password" name="pass" id="pass" v-model="password">
                <button class="log btn-dark" @click="showAlert">Login</button>
                <h4>Forgot password</h4>
            </div>
            <h4>
                <a href="../AboutView.vue">Sign up!</a>
            </h4>

            <p>Get the app</p>

            <div class="apps d-flex align-items-center justify-content-center ">
                <img src="@/assets/googleplay.svg" alt="">
                <img src="@/assets/iosapp.svg" alt="">
            </div>
        </div>


</div>
</template>

<script>
</script>


<style>
*{
    text-align: center;
}

.home{
display: flex;
align-items: center;
justify-content: center;
background-image: url('https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2019/05/14172752/Vancouver-1.jpg');
background-size: cover;
background-attachment: fixed;
}


.loginInfo{
    width: 500px;
    height: 500px;
    margin-top: 10%;
    padding: 3%;
    background-color: rgba(255, 255, 255, .15);
    backdrop-filter: blur(5px);
    
}


input{
display: block;
width: 100%;

}

button{
    width: 100%;
}
</style>