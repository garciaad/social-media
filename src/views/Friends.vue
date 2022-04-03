<template>
<div class="profile">

    <div class="pagetop">
        <div class="topInfo col d-flex align-items-center justify-content-center">
            <div class="profilePic col-2">
                <img src="@/assets/friends.jpg" alt="Alex profile picture">
            </div>
            <div class="head">
                <h1>Bojack Horseman</h1>
                <h2>BojackH</h2>
                <ul>
                    <li>8 posts</li>
                    <li>20 followers</li>
                    <li>15 following</li>
                </ul>
            </div>
        </div>
    </div>

    <div class="pageBody">
        <div class="child-page-listing">
            <h2 class="tittle text-center">POSTS</h2>
            <div class="galery">
                <div>
                <article id="3685" class="location-listing">
                    <a class="location-title" href="#">
                    Hawai</a>
                    <div class="location-image">
                        <a href="#">
                            <img width="300" height="169"
                                src="https://kaikucaffelatte.com/blog/wp-content/uploads/2020/03/shutterstock_510679489-scaled-e1648037045335.jpg"
                                alt="san francisco"> </a>
                    </div>
                </article>
                <div class="likenmail d-flex align-items-center justify-content-center">
                <button @click="like" class="btn-danger">🤍</button>
                <span class="counter">{{counter}}Likes</span>
                <button @click="noLike" class="btn-warning">🤍</button>

                <form class="mailButton " action="mailto:alexgc0731@gmail.com" method="post" name="form1">
                <input class="btn-primary" type="submit" value="&#128231;">
                </form>
                </div>
                </div>

                <div>
                <article id="3688" class="location-listing">
                    <a class="location-title" href="#">
                        Hawai pt2 </a>
                    <div class="location-image">
                        <a href="#">
                            <img width="300" height="169"
                                src="https://us.123rf.com/450wm/totojang1977/totojang19771405/totojang1977140500043/28825150-hermosa-cascada-en-el-bosque-profundo.jpg?ver=6"
                                alt="london"> </a>
                    </div>
                </article>
                <div class="likenmail d-flex align-items-center justify-content-center">
                <button @click="like1" class="btn-danger">🤍</button>
                <span class="counter">{{counter1}}Likes</span>
                <button @click="noLike1" class="btn-warning">🤍</button>
                <form class="mailButton" action="mailto:alexgc0731@gmail.com" method="post" name="form1">
                <input class="btn-primary" type="submit" value="&#128231;">
                </form>
                </div>
                </div>

                <div>
                <article id="3691" class="location-listing">
                    <a class="location-title" href="#">
                        India </a>
                    <div class="location-image">
                        <a href="#">
                            <img width="300" height="169"
                                src="https://mott.pe/noticias/wp-content/uploads/2019/03/los-50-paisajes-maravillosos-del-mundo-para-tomar-fotos.jpg"
                                alt="new york"> </a>
                    </div>

                </article>
                <div class="likenmail d-flex align-items-center justify-content-center">
                <button @click="like2" class="btn-danger">🤍</button>
                <span class="counter">{{counter2}}Likes</span>
                <button @click="noLike2" class="btn-warning">🤍</button>
                <form class="mailButton " action="mailto:alexgc0731@gmail.com" method="post" name="form1">
                <input class="btn-primary" type="submit" value="&#128231;">
                </form>
                </div>
                </div>

                <div>
                <article id="3694" class="location-listing">
                    <a class="location-title" href="#">
                        Alberta </a>
                    <div class="location-image">
                        <a href="#">
                            <img width="300" height="169"
                                src="data:image/jpeg;base64,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"
                                alt="cape town"> </a>
                    </div>
                </article>
                <div class="likenmail d-flex align-items-center justify-content-center">
                <button @click="like3" class="btn-danger">🤍</button>
                <span class="counter">{{counter3}}Likes</span>
                <button @click="noLike3" class="btn-warning">🤍</button>
                <form class="mailButton " action="mailto:alexgc0731@gmail.com" method="post" name="form1">
                <input class="btn-primary" type="submit" value="&#128231;">
                </form>
                </div>
                </div>

                <div>
                <article id="3697" class="location-listing">
                    <a class="location-title" href="#">
                        Nederland </a>
                    <div class="location-image">
                        <a href="#">
                            <img width="300" height="169"
                                src="https://haciendofotos.com/wp-content/uploads/mejores-fotos-de-paisajes-la-mancha.jpg"
                                alt="beijing"> </a>
                    </div>
                </article>
                <div class="likenmail d-flex align-items-center justify-content-center">
                <button @click="like4" class="btn-danger">🤍</button>
                <span class="counter">{{counter4}}Likes</span>
                <button @click="noLike4" class="btn-warning">🤍</button>
                <form class="mailButton " action="mailto:alexgc0731@gmail.com" method="post" name="form1">
                <input class="btn-primary" type="submit" value="&#128231;">
                </form>
                </div>
                </div>

                <div>
                <article id="3700" class="location-listing">
                    <a class="location-title" href="#">
                    Egypt </a>
                    <div class="location-image">
                        <a href="#">
                            <img width="300" height="169"
                                src="https://www.photopills.com/sites/default/files/tutorials/2020/landscape-cover-.jpg" alt="paris">
                        </a>
                    </div>
                </article>
                <div class="likenmail d-flex align-items-center justify-content-center">
                <button @click="like5" class="btn-danger">🤍</button>
                <span class="counter">{{counter5}}Likes</span>
                <button @click="noLike5" class="btn-warning">🤍</button>
                <form class="mailButton " action="mailto:alexgc0731@gmail.com" method="post" name="form1">
                <input class="btn-primary" type="submit" value="&#128231;">
                </form>
                </div>
                </div>

                <div>
                <article id="3700" class="location-listing">
                    <a class="location-title" href="#">
                    RD </a>
                    <div class="location-image">
                        <a href="#">
                            <img width="300" height="169"
                                src="https://haciendofotos.com/wp-content/uploads/fotos-paisajes-istock-3.jpg" alt="paris">
                        </a>
                    </div>
                </article>
                <div class="likenmail d-flex align-items-center justify-content-center">
                <button @click="like6" class="btn-danger">🤍</button>
                <span class="counter">{{counter6}}Likes</span>
                <button @click="noLike6" class="btn-warning">🤍</button>
                <form class="mailButton " action="mailto:alexgc0731@gmail.com" method="post" name="form1">
                <input class="btn-primary" type="submit" value="&#128231;">
                </form>
                </div>
                </div>

                <div>
                <article id="3700" class="location-listing">
                    <a class="location-title" href="#">
                    Colombia </a>
                    <div class="location-image">
                        <a href="#">
                            <img width="300" height="169"
                                src="https://thumbs.dreamstime.com/b/paisaje-dram%C3%A1tico-del-caf%C3%A9-78087180.jpg" alt="paris">
                        </a>
                    </div>
                </article>
                <div class="likenmail d-flex align-items-center justify-content-center">
                <button @click="like7" class="btn-danger">🤍</button>
                <span class="counter">{{counter7}}Likes</span>
                <button @click="noLike7" class="btn-warning">🤍</button>
                <form class="mailButton " action="mailto:bojack@gmail.com" method="post" name="form1">
                <input class="btn-primary" type="submit" value="&#128231;">
                </form>
                </div>
                </div>
            </div>
        </div>
    </div>

</div>
</template>

<script>
export default {
    data(){
        return{
            counter: 0,
            counter1: 0,
            counter2: 0,
            counter3: 0,
            counter4: 0,
            counter5: 0,
            counter6: 0,
            counter7: 0,
            counter8: 0,
        }
    },
    methods: {
        like(){
            this.counter++
        },
        noLike(){
            this.counter--
        },
        like1(){
            this.counter1++
        },
        noLike1(){
            this.counter1--
        },
        like2(){
            this.counter2++
        },
        noLike2(){
            this.counter2--
        },
        like3(){
            this.counter3++
        },
        noLike3(){
            this.counter3--
        },
        like4(){
            this.counter4++
        },
        noLike4(){
            this.counter4--
        },
        like5(){
            this.counter5++
        },
        noLike5(){
            this.counter5--
        },
        like6(){
            this.counter6++
        },
        noLike6(){
            this.counter6--
        },
        like7(){
            this.counter7++
        },
        noLike7(){
            this.counter7--
        },
    }
    
    
}
</script>

<style>

.topInfo{
    padding: 3%;
}

.topInfo img{
    border-radius: 50%;
    height: 100%;
    width: 100%;
}

.pageBody {
    padding: 20px;
    font-family: sans-serif;
    margin-bottom: 1%;
}

img {
    width: 100%;
    height: auto;
}

h2 {
    margin-bottom: .5em;
}

.galery {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 1em;
}


.location-listing {
    position: relative;
}

.location-image {
    line-height: 0;
    overflow: hidden;
}

.location-image img {
    filter: blur(0px);
    transition: filter 0.3s ease-in;
    transform: scale(1.1);
}

.location-title {
    font-size: 1.5em;
    font-weight: bold;
    text-decoration: none;
    z-index: 1;
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    opacity: 0;
    transition: opacity .5s;
    background: rgba(90, 0, 10, 0.4);
    color: white;

    display: flex;
    align-items: center;
    justify-content: center;
}

.location-listing:hover .location-title {
    opacity: 1;
}

.location-listing:hover .location-image img {
    filter: blur(2px);
}

.likenmail{
    padding: 10%;
}


@media (hover: none) {
    .location-title {
        opacity: 1;
    }

    .location-image img {
        filter: blur(2px);
    }
}
</style>