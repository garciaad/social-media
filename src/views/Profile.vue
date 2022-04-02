<template>
<div class="profile">

    <div class="pagetop">
        <div class="topInfo col d-flex align-items-center justify-content-center">
            <div class="profilePic col-2">
                <img src="@/assets/profile.png" alt="Alex profile picture">
            </div>
            <div class="head">
                <h1>Alexander Garcia Caballero</h1>
                <h2>alexgarcia31</h2>
                <ul>
                    <li>110 posts</li>
                    <li>170 followers</li>
                    <li>165 following</li>
                </ul>
            </div>
        </div>
    </div>

    <div class="pageBody">
        <div class="child-page-listing">
            <h2 class="tittle text-center">POSTS</h2>
            <div class="galery">
                <article id="3685" class="location-listing">
                    <a class="location-title" href="#">
                        Likes comments </a>
                    <div class="location-image">
                        <a href="#">
                            <img width="300" height="169"
                                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/san-fransisco-768x432.jpg"
                                alt="san francisco"> </a>
                    </div>
                </article>

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
            </div>
        </div>
    </div>

</div>
</template>

<style>
* {
    
}

.pageBody {
    padding: 20px;
    font-family: sans-serif;
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


@media (hover: none) {
    .location-title {
        opacity: 1;
    }

    .location-image img {
        filter: blur(2px);
    }
}
</style>