<template>
    <div class="gradient">
        Campfire Games Page
        <div class="image-container">
            <img src="../assets/img/images/marshies.svg" class="dinos">
        </div>
        <div class="vertical-img-container">
            <img src="../assets/img/images/dinos-vertical.svg" class="dinos-vertical">
            <img src="../assets/img/images/red-blurb.svg" class="red-blurb">
            <img src="../assets/img/images/blue-blurb.svg" class="blue-blurb">
            <img src="../assets/img/images/green-blurb.svg" class="green-blurb">
        </div>
            
    </div>
</template>

<script lang="ts">
export default {
    name: 'PastEventsGrid',
};
</script>

<style scoped>
.gradient {
    background-color: #ff5b01;
    background-image: url('../assets/img/images/Brownandpurplecaves.svg');
    background-size: cover;
    background-position: center -50px;
    display: flex;
    height: 170vh;
    flex-direction: column;
    position: relative;
}

.image-container {
    width: 80%;
    justify-content: center;
    align-items: center;
    margin-top: 27%;
    margin-left: 10%;
}

.dinos {
    display: flex;
    width: 100%;
}
.vertical-img-container {
    visibility: hidden;
}
.dinos-vertical {
    visibility: hidden;
}
.blue-blurb {
    visibility: hidden;
}
.red-blurb {
    visibility: hidden;
}
.green-blurb {
    visibility: hidden;
}

@media screen and (max-width: 768px) {
    .gradient {
        background-image: url('../assets/img/images/Browncavestretched.svg');
        background-size: cover;
        background-position: center center;
        display: flex;
        flex-direction: column;
        height: 170vh;
    }
    .image-container {
        visibility: hidden;
    }
    .dinos {
        visibility: hidden;
    }
    .vertical-img-container {
        width: 80%;
        justify-content: center;
        align-items: center;
        margin-top: 27%;
        margin-left: 10%;
        visibility: visible;
        max-height: 120vh;
        display: flex;
    }
    .dinos-vertical {
        visibility: visible;
        /* display: flex; */
        width: 100%;
        max-height: 120vh;   
        object-fit: contain;
    }
    .red-blurb {
        visibility: visible;
        position: absolute;
        /* display: flex; */
        width: 90%;
        top: 6%;
        left: 5%;
    }
    .blue-blurb {
        visibility: visible;
        /* display: flex; */
        position: absolute;
        width: 90%;
        top: 33%;
        left: 5%
    }
    .green-blurb {
        visibility: visible;
        position: absolute;
        /* display: flex; */
        width: 90%;
        top: 63%;
        left: 5%;
    }
}
</style>
