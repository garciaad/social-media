<template>
<div class="about">
    <div class="loginInfo">
            <h1>FOLKS</h1>
            <h3>Let's get linked!</h3>
            <div> 
                <input type="text" placeholder="Email" id="mail" v-model="mail">
                <input type="text" placeholder="Full name" id="fullname" v-model="fullname">
                <input type="text" placeholder="Username" id="username" v-model="username">
                <input type="password" placeholder="Password" id="pass" v-model="pass">
                <button @click="signup" class="log btn-dark">Sign up</button>                
            </div>
            


            <p>Get the app</p>

            <div class="apps d-flex align-items-center justify-content-center ">
                <img src="https://www.snapchat.com/static/style-guide/download/google-play-badge.svg" alt="">
                <img src="https://www.snapchat.com/static/style-guide/download/appstore.svg" alt="">
            </div>
        </div>
</div>
</template>

<script>
export default {
    methods: {
        signup(){
            var email = document.getElementById("mail").value;
            var fullN = document.getElementById("fullname").value;
            var usuario = document.getElementById("username").value;
            var Contraseña = document.getElementById("pass").value;

            
            if ((email=="alex@mail.com") && (fullN=="alex garcia") && (usuario == "garciaad") && (Contraseña == "12345")) {
            this.$swal({
            position: 'center',
            icon: 'success',
            title: 'Your register is complete!',
            showConfirmButton: false,
            timer: 1700
});
    }
    else {
            this.$swal({
            position: 'center',
            icon: 'error',
            title: 'Oops...',
            text: 'Double check your info!',
            showConfirmButton: false,
            timer: 1700
            
        })
    }

        },
        
    }

    
}
</script>

<style>
*{
    text-align: center;
}

.about{
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url('https://astelus.com/wp-content/viajes/Lago-Moraine-Parque-Nacional-Banff-Alberta-Canada.jpg');
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