<template>
    <div class="gradient">
        Campfire Games Page
        <div class="image-container">
            <img src="../assets/img/images/marshies.svg" class="dinos">
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
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.dinos {
    width: 110rem;
    /* transform: translate(-50%, -50%); */
}

/* For mobile screens */
@media screen and (max-width: 768px) {
    .gradient {
        background-image: url('../assets/img/images/Browncavestretched.svg');
        background-size: cover;
        background-position: center center;
        height: 380rem
    }
    
    /* Adjust dino positions for smaller screens */
    .overlay-blue-dino {
        top: 55%;
        left: 50%;            
        transform: translate(-50%, -50%);
    }

    .overlay-red-dino {
        top: 30%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .overlay-green-dino {
        top: 80%;
        left: 50%;
        transform: translateX(-50%);
    }

    .overlay-blue-blurb {
        top: 48%;
        left: 50%;
        transform: translateX(-50%);
    }

    .overlay-green-blurb {
        top: 74%;
        left: 50%;
        transform: translateX(-50%);
    }

    .overlay-red-blurb {
        visibility: hidden;
    }

    .overlay-red-blurb-mv {
        position: absolute;           
        top: 23%;
        left: 50%;
        transform: translateX(-50%);
    }
}

</style>
