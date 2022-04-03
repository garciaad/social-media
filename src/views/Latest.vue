<template>
<div class="homeContent d-flex align-items-center justify-content-center">
    <div class="posts">
    <div class="card">
        <img src="@/assets/latest.jpg" class="card-img-top" alt="..." />
        <div class="card-body">
        <button @click="like" class="btn-danger">🤍</button>
        <span class="counter">{{counter}}Likes</span>
        <button @click="disLike" class="btn-warning">🤍</button>
        <p>#BojackH</p> 
        <p class="card-text">Just chilling!</p>        
        <form class="mailButton d-flex align-items-center justify-content-center" action="mailto:bojack@gmail.com" method="post" name="form1">
        <input class="btn-primary" type="submit" value="&#128231;">
        </form>
        
        
        </div>
    </div>
    </div>
</div>



</template>

<script>
export default {
    data(){
        return{
            counter: 0
        }
    },
    methods: {
        like(){
            this.counter++
            this.$swal({
            position: 'center',
            title: 'You liked this photo',
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/1200px-Heart_coraz%C3%B3n.svg.png',
            imageWidth: 200,
            imageHeight: 200,
            imageAlt: 'Custom image',
            showConfirmButton: false,
            timer: 500
})
        },
        disLike()
        {
            this.counter--
            this.$swal({
            position: 'center',
            title: 'You disliked this photo',
            imageUrl: 'https://images.emojiterra.com/google/android-nougat/512px/1f49b.png',
            imageWidth: 200,
            imageHeight: 200,
            imageAlt: 'Custom image',
            showConfirmButton: false,
            timer: 500
})
        }
    }

    
}

</script>


<style>
.homeContent{
    margin-top: 1%;
    
}

.card{
    margin-top: 3%;
    width: 100%;
    height: 100%;
    margin-bottom: 10%;
    
}

.card img{
    padding: 1%;
}


.btn-danger{
    width: 50px;
    height: 50px;
    border-radius: 50%;
}

.btn-warning{
    width: 50px;
    height: 50px;
    border-radius: 50%;
}

.btn-primary{
    width: 50px;
    height: 50px;
    border-radius: 50%;
}
</style>