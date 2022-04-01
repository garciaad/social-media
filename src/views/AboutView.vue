<template>
  <div class="about">
    <div class="loginInfo">
            <h1>FOLKS</h1>
            <h3>Let's get linked!</h3>
            <div>
                
                <input type="text" placeholder="Email">
                <input type="text" placeholder="Full name">
                <input type="text" placeholder="Username">
                <input type="password" placeholder="Password">
                <button class="btn-dark">Sign up</button>
            </div>
            <h4>
                <a href="../">Sign up!</a>
            </h4>

            <p>Get the app</p>

            <div class="apps d-flex align-items-center justify-content-center ">
                <img src="https://www.snapchat.com/static/style-guide/download/google-play-badge.svg" alt="">
                <img src="https://www.snapchat.com/static/style-guide/download/appstore.svg" alt="">
            </div>
        </div>
  </div>
</template>

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