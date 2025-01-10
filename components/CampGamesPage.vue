<template>
    <div class="gradient">
        Campfire Games Page
        <div class="image-container">
            <img src="../assets/img/images/dinos.png" alt="dinos" class="image">
            <h3 class="text-blue">Blue Team</h3>
            <p class="team-blurb-blue">
                The blue team is <strong class="blue">rational</strong> and
                <strong class="blue">clear-headed</strong>. Their curiosity and
                intelligence are some of their greatest assets in understanding and
                exploring the world around them.
            </p>
            <h3 class="text-red">Red Team</h3>
            <p class="team-blurb-red">
                The red team is <strong class="red">passionate</strong> and
                <strong class="red">fiery</strong>! Their emotion is their strength in
                handling whatever comes their way.
            </p>
            <h3 class="text-green">Green Team</h3>
            <p class="team-blurb-green">
                The green team is <strong class="green">adaptable</strong>&mdash;always
                <strong class="green">growing</strong> and thriving in new and
                challenging circumstances.
            </p>
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
    display: flex;
    height: 55rem;
    flex-direction: column;
    
}
.image-container {
    position: relative;  /* Allow absolute positioning of text */
    display: flex;
    justify-content: center;  /* Center the image horizontally within its container */
    align-items: center;  /* Center the image vertically within its container */
    width: 100%;
    height: 100%;
}
.image {
    width: 800px;  /* Set the width of the image */
    height: 520px; /* Set the height of the image */
    object-fit: cover;
    margin-bottom: 1rem;
    align-self: center; /* Optional: space between image and text */
}
.text-blue {
    position: absolute; /* Position the text relative to its container */
    bottom: 485px; /* 20px from the bottom of the container */
    left: 50.75%; /* Center the text horizontally */
    transform: translateX(-50%); /* Adjust the horizontal position to truly center the text */
    color: #528CA5; /* Text color */
    font-size: 2rem; /* Font size */
    font-family: 'Aleo';
}
.text-red {
    position: absolute; /* Position the text relative to its container */
    bottom: 450px; /* 20px from the bottom of the container */
    left: 36.95%; /* Center the text horizontally */
    transform: translateX(-50%); /* Adjust the horizontal position to truly center the text */
    color: #FE3F46; /* Text color */
    font-size: 2rem; /* Font size */
    font-family: 'Aleo';
}
.text-green {
    position: absolute; /* Position the text relative to its container */
    bottom: 460px; /* 20px from the bottom of the container */
    left: 64.3%; /* Center the text horizontally */
    transform: translateX(-50%); /* Adjust the horizontal position to truly center the text */
    color: #009051; /* Text color */
    font-size: 2rem; /* Font size */
    font-family: 'Aleo';
}
.team-blurb-blue{
    position: absolute;
    color: black;
    bottom: 385px; /* 20px from the bottom of the container */
    left: 44.75%; /* Center the text horizontally */
    width: 177px; 
    font-size: 1.1rem; 
    text-align: center; 
}
.team-blurb-red{
    position: absolute;
    color: black;
    bottom: 385px; /* 20px from the bottom of the container */
    left: 31%; /* Center the text horizontally */
    width: 177px; 
    font-size: 1.1rem; 
    text-align: center; 
}
.team-blurb-green{
    position: absolute;
    color: black;
    bottom: 410px; /* 20px from the bottom of the container */
    left: 58%; /* Center the text horizontally */
    width: 180px; 
    font-size: 1.1rem; 
    text-align: center; 
}
.blue {
    color: #528CA5;
}
.red {
    color: #FE3F46;
}
.green {
    color: #009051;
}
</style>