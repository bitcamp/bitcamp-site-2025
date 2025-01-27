<template>
    <div class="gradient">
        <img src="../assets/img/images/DinolandingGroup.svg" class="dino-background" alt="landing image" />
        <div class="content-wrapper">
            <div class="button-wrapper">
                <button class="register-button">REGISTER</button>
            </div>
            <ExplorationMessage />
        </div>
    </div>
</template>

<script lang="ts">
import ExplorationMessage from '~/components/ExplorationMessage.vue';

export default {
    name: 'LandingPage',
    components: {
        ExplorationMessage,
    },
};
</script>

<style scoped>
.gradient {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200rem;
    overflow: hidden;
    background-color: #ff5b01;
}

.content-wrapper {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: white;
    z-index: 1;
    right: 0;
    top: 45vw;
    width: 48%
}

.button-wrapper {
    width: 100%;
}

.dino-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: auto;
    z-index: 0;
    object-fit: cover;
}

.register-button {
    background-color: #FFB353;
    border: none;
    border-radius: 2.0rem;
    color: #4F2525;
    font-family: Aleo, sans-serif;
    font-size: 3rem;
    font-weight: bold;
    padding: 1.5rem 5rem;
    letter-spacing: 0.2rem;
    margin-bottom: 10%;
    cursor: pointer;
    transition: transform 0.2s, box-shadow 0.2s;
}

.register-button:hover {
    transform: translateY(-4px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
}

@media (max-width: 796px) {
    /* .register-button {
        font-size: 1.2rem;
        padding: 0.8rem 2.5rem;
    } */

    .content-wrapper {
        width: 100%;
        top: 113vw;
    }
}
</style>