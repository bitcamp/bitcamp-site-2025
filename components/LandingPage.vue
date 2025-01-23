<template>
    <div class="gradient">
        Landing Page
        <ExplorationMessage />
    </div>
</template>

<script lang="ts">
import ExplorationMessage from '~/components/ExplorationMessage.vue';

export default {
    name: 'PastEventsGrid',
};
</script>

<style scoped>
.gradient {
    background-color: #ff5b01;
    display: flex;
    height: 40rem;
}

@media (max-width: 796px) { 
    .gradient {
        background-color: #ff5b01;
        display: flex;
        flex-direction: column;
        height: 40rem;
    }
}
</style>