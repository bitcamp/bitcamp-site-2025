<template>
    <div class="gradient">
        Campfire Games Page
        <div class="image-container">
            <img src="../assets/img/images/marshies.svg" class="dinos">
        </div>
        <div class="vertical-img-container">
            <img src="../assets/img/images/marshies-mv.svg" class="dinos-vertical">
        </div>

    </div>
</template>

<style scoped>
.gradient {
    background-color: #ff5b01;
    background-image: url('../assets/img/images/Brownandpurplecaves.svg');
    background-size: cover;
    background-position: center -50px;
    display: grid;
    height: 40rem;
    height: 170vh;
    flex-direction: column;
    position: relative;
}

.image-container {
    position: absolute;
    width: 75%;
    justify-self: center;
    margin-top: 28%;
}

.dinos {
    display: flex;
    width: 100%;
}

.vertical-img-container {
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
        display: none;
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
    }

    .dinos-vertical {
        display: flex;
        width: 100%;
        max-height: 120vh;
    }
}
</style>