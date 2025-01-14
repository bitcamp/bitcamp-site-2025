<template>
    <div class="gradient">
        Campfire Games Page
        <div class="image-container">
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
    background-image: url('../assets/img/images/dinos.png');  
    background-size: cover; 
    background-position: center center;
    display: flex;
    height: 100rem;
    flex-direction: column;
    
}
.image-container {
    position: relative;  
    display: flex;
    justify-content: center;  
    align-items: center;  
    width: 100%;
    height: 100%;
}
@media screen and (max-width: 768px) {
    .gradient {
        background-image: url('../assets/img/images/dinos-mv.png');
        background-size: cover; 
        background-position: center center;
        display: flex;
        height: 370rem;
        flex-direction: column;
    }
}

</style>