<template>
    <div class="Newcomponent">
        <h1>HIt there!</h1>
        <h2>{{subtitulo}}</h2>
    </div>
</template>

<script>
export default {
    name: 'Newcomponent',
    data(){
        return{
            subtitulo: 'subtitle'
        }
    }
}
</script>