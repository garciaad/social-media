<template>
<div class="home" >
        <div class="loginInfo">
            <h1>FOLKS</h1>
            <h3>Let's get linked!</h3>
            <div>
                <input type="text" name="usuario" id="usuario">
                <input type="password" name="pass" id="pass">
                <input type="button" class="btn-dark" name="btnVerifivaca" id="btnVerifica" onclick="validar()" value="Login">
                <h4>Forgot password</h4>
            </div>
            <h4>
                <a href="signup.html">Sign up!</a>
            </h4>

            <p>Get the app</p>

            <div class="apps d-flex align-items-center justify-content-center ">
                <img src="https://www.snapchat.com/static/style-guide/download/google-play-badge.svg" alt="">
                <img src="https://www.snapchat.com/static/style-guide/download/appstore.svg" alt="">
            </div>
        </div>
</div>
</template>

<script>
function validar() {
    var usuario = document.getElementById("usuario").value;
    var Contraseña = document.getElementById("pass").value;

    if (usuario == "garciaad" && Contraseña == "12345") {
        Swal.fire('Any fool can use a computer')

    }
    else {
        Swal.fire('Any fool can use a')

    }
}

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


.login{
    width: 100%;
    height: 100%;
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