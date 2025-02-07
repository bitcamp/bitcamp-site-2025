<template>
    <link href='https://fonts.googleapis.com/css?family=Aleo' rel='stylesheet'>
    <div id="campfire-games" class="cfg-top">
        <img
            class="marshie-skeleton"
            src="assets\img\images\Marshieskeleton 1.svg"
            alt="Marshie skeleton"
        />
        <img
            class="cfg-title"
            src="assets\img\images\CAMPFIRE GAMES.svg"
            alt="Campfire games title"
        />
        <img
            class="dino-skeleton"
            src="assets\img\images\Dinoskeleton 2.svg"
            alt="Dino skeleton"
        />
    </div>
    <div class="gradient">
        <div class="cfg-box"> 
            <p id="cfg-blurb">
                The Campfire Games are a way to learn, grow, and build with the Bitcamp Community. 
                At the start of this year's event, you will join one of three teams based on your personality and 
                interests—joining forces with hackers from around the world! By winning unique challenges, attending workshops, 
                and participating in mini-events, you'll rack up points for your team. At the end of Bitcamp, members of the 
                winning team will receive limited edition Bitcamp swag. 
                <br><br>
                Find your community, develop your team identity, and collaborate on something bigger than yourself: #UnearthYourPotential
            </p>
        </div>
        <div class="vertical-img-container">
            <img src="../assets/img/images/marshies-mv.svg" class="dinos-vertical">
        </div>
    </div>
    
</template>

<script lang="ts">
export default {
    name: 'PastEventsGrid',
};
</script>

<style scoped>
.cfg-title {
    display: flex;
    width: 40%;
    margin-right: auto;
    margin-left: auto;
}
.dino-skeleton {
    width: 23%;
    margin-left: auto;
    visibility: visible;
}
.marshie-skeleton {
    width: 26%;
    margin-bottom: -5%;
    visibility: visible;
}
.dinos-vertical {
    display: none;
}
.cfg-box {
    background-color: #500001;
    border-color: #F98F37;
    border-style: solid;
    border-width: 17px;
    border-radius: 50px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 70%;
}
#cfg-blurb {
    font-family: 'Aleo'; 
    font-size: 24px;
    text-align:center;
    padding:4% 8%;
}
.cfg-top {
    padding-top: 5%;
    background-color: #701407;
    display: flex;
}
.vertical-img-container {
    display: none;
}
.gradient {
    background-image: url(assets/img/images/marshies-new.webp);
    background-repeat: no-repeat;
    background-size: cover;
    height: 176vh;
    background-position: center;
}
/* @media screen and (width:1024px) and (height: 1366px) {
    .gradient {
        height: 200vh;
    }
} */
@media screen and (max-width: 1024px) {
    #cfg-blurb {
        padding: 5% 10%;
    }
    .cfg-box {
        border-width: 12px;
        border-radius: 50px;
    }
    .dino-skeleton {
        visibility: hidden;
        width: 0px;
    }
    .marshie-skeleton {
        visibility: hidden;
        width: 0px;
    }
    .cfg-title {
        padding: inherit;
        margin: auto;
        width: 70%;
        display: block;
        margin-bottom: 5%;
    }
    .cfg-top {
        background-image: linear-gradient(180deg, #B94923 0%, #942F15 50%, #701407 100%);
        display: block;
    }
    .gradient {
        background-image: url(assets/img/images/Browncavestretched.webp);
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        height: auto;
    }
    .vertical-img-container {
        padding-top: 10%;
        padding-bottom: 40%;
        display: flex;
        margin-left: 15%;
    }
    .dinos-vertical {
        display: flex;
        width: 90%;
        visibility: visible;
    }
}
@media screen and (max-width: 700px) {
    #cfg-blurb {
        font-size: 19px;
    }
}
@media screen and (max-width: 515px) {
    #cfg-blurb {
        font-size: 17px;
    }
}
@media screen and (max-width: 400px) {
    #cfg-blurb {
        font-size: 15px;
    }
}
@media screen and (max-width: 270px) {
    #cfg-blurb {
        font-size: 10px;
    }
}
</style>