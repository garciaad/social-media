<template>
<div class="profile">

    <div class="pagetop">
        <div class="topInfo col d-flex align-items-center justify-content-center">
            <div class="profilePic col-2">
                <img src="@/assets/profile.png" alt="Alex profile picture">
            </div>
            <div class="head">
                <h1>Alexander Garcia Caballero</h1>
                <h2>garciaad</h2>
                <ul>
                    <li>8 posts</li>
                    <li>10 followers</li>
                    <li>10 following</li>
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
                        San Francisco </a>
                    <div class="location-image">
                        <a href="#">
                            <img width="300" height="169"
                                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/san-fransisco-768x432.jpg"
                                alt="san francisco"> </a>
                    </div>
                </article>
                <div class="likenmail d-flex align-items-center justify-content-center">
                <button @click="like" class="btn-danger">🤍</button>
                <span class="counter">{{counter}}Likes</span>
                <form class="mailButton " action="mailto:alexgc0731@gmail.com" method="post" name="form1">
                <input class="btn-primary" type="submit" value="&#128231;">
                </form>
                </div>
                </div>

                <div>
                <article id="3688" class="location-listing">
                    <a class="location-title" href="#">
                        London </a>
                    <div class="location-image">
                        <a href="#">
                            <img width="300" height="169"
                                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/london-768x432.jpg"
                                alt="london"> </a>
                    </div>
                </article>
                <div class="likenmail d-flex align-items-center justify-content-center">
                <button @click="like1" class="btn-danger">🤍</button>
                <span class="counter">{{counter1}}Likes</span>
                <form class="mailButton" action="mailto:alexgc0731@gmail.com" method="post" name="form1">
                <input class="btn-primary" type="submit" value="&#128231;">
                </form>
                </div>
                </div>

                <div>
                <article id="3691" class="location-listing">
                    <a class="location-title" href="#">
                        New York </a>
                    <div class="location-image">
                        <a href="#">
                            <img width="300" height="169"
                                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/new-york-768x432.jpg"
                                alt="new york"> </a>
                    </div>

                </article>
                <div class="likenmail d-flex align-items-center justify-content-center">
                <button @click="like2" class="btn-danger">🤍</button>
                <span class="counter">{{counter2}}Likes</span>
                <form class="mailButton " action="mailto:alexgc0731@gmail.com" method="post" name="form1">
                <input class="btn-primary" type="submit" value="&#128231;">
                </form>
                </div>
                </div>

                <div>
                <article id="3694" class="location-listing">
                    <a class="location-title" href="#">
                        Cape Town </a>
                    <div class="location-image">
                        <a href="#">
                            <img width="300" height="169"
                                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/cape-town-768x432.jpg"
                                alt="cape town"> </a>
                    </div>
                </article>
                <div class="likenmail d-flex align-items-center justify-content-center">
                <button @click="like3" class="btn-danger">🤍</button>
                <span class="counter">{{counter3}}Likes</span>
                <form class="mailButton " action="mailto:alexgc0731@gmail.com" method="post" name="form1">
                <input class="btn-primary" type="submit" value="&#128231;">
                </form>
                </div>
                </div>

                <div>
                <article id="3697" class="location-listing">
                    <a class="location-title" href="#">
                        Beijing </a>
                    <div class="location-image">
                        <a href="#">
                            <img width="300" height="169"
                                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/beijing-768x432.jpg"
                                alt="beijing"> </a>
                    </div>
                </article>
                <div class="likenmail d-flex align-items-center justify-content-center">
                <button @click="like4" class="btn-danger">🤍</button>
                <span class="counter">{{counter4}}Likes</span>
                <form class="mailButton " action="mailto:alexgc0731@gmail.com" method="post" name="form1">
                <input class="btn-primary" type="submit" value="&#128231;">
                </form>
                </div>
                </div>

                <div>
                <article id="3700" class="location-listing">
                    <a class="location-title" href="#">
                    Paris </a>
                    <div class="location-image">
                        <a href="#">
                            <img width="300" height="169"
                                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/paris-768x432.jpg" alt="paris">
                        </a>
                    </div>
                </article>
                <div class="likenmail d-flex align-items-center justify-content-center">
                <button @click="like5" class="btn-danger">🤍</button>
                <span class="counter">{{counter5}}Likes</span>
                <form class="mailButton " action="mailto:alexgc0731@gmail.com" method="post" name="form1">
                <input class="btn-primary" type="submit" value="&#128231;">
                </form>
                </div>
                </div>

                <div>
                <article id="3700" class="location-listing">
                    <a class="location-title" href="#">
                    Puerto rico </a>
                    <div class="location-image">
                        <a href="#">
                            <img width="300" height="169"
                                src="https://media.traveler.es/photos/6137783a8f298b3a7a5bd920/16:9/w_2580,c_limit/34555.jpg" alt="paris">
                        </a>
                    </div>
                </article>
                <div class="likenmail d-flex align-items-center justify-content-center">
                <button @click="like6" class="btn-danger">🤍</button>
                <span class="counter">{{counter6}}Likes</span>
                <form class="mailButton " action="mailto:alexgc0731@gmail.com" method="post" name="form1">
                <input class="btn-primary" type="submit" value="&#128231;">
                </form>
                </div>
                </div>

                <div>
                <article id="3700" class="location-listing">
                    <a class="location-title" href="#">
                    Ontario </a>
                    <div class="location-image">
                        <a href="#">
                            <img width="300" height="169"
                                src="https://d36tnp772eyphs.cloudfront.net/blogs/2/2019/11/shutterstock_625422734.jpg" alt="paris">
                        </a>
                    </div>
                </article>
                <div class="likenmail d-flex align-items-center justify-content-center">
                <button @click="like7" class="btn-danger">🤍</button>
                <span class="counter">{{counter7}}Likes</span>
                <form class="mailButton " action="mailto:alexgc0731@gmail.com" method="post" name="form1">
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
        like1(){
            this.counter1++
        },
        like2(){
            this.counter2++
        },
        like3(){
            this.counter3++
        },
        like4(){
            this.counter4++
        },
        like5(){
            this.counter5++
        },
        like6(){
            this.counter6++
        },
        like7(){
            this.counter7++
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