<template>
    <div class="exploration-container">
        <div class="exploration-message">
            <p>
                <i>Bitcamp is a place for exploration...</i> <br /><br />
                You have 36 hours to explore, learn, and create with world-class mentors and over 1,000 participants. Whether you're a seasoned hacker or new to it all, there's something for everyone.
                <br /><br />
                <b>If you're ready for an adventure, we'll see you by the campfire!</b>
            </p>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    name: "ExplorationMessage",
};
</script>

<style scoped>
.exploration-message {
    background-color: #b94923;
    border-radius: 6rem;
    border: 15px solid #ffd978;
    border-right-style: none;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    float: right;
    color: white;
    padding: 3rem 5rem 3rem 6rem;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
    font-family: Aleo;
    box-sizing: border-box;
    max-width: 70rem;
}

.exploration-container {
    padding-top: 40px;
    position: relative;
    width: 100%;
}

@media (max-width: 796px) {
    .exploration-message {
        background-image: linear-gradient(#084600, #9D9E00);
        border: 0;
        border-radius: 0;
        text-align: center;
        width: 100%;
        margin: 0;
        padding: 10vw;
        max-width: none;
        font-size: 5vw;
        box-shadow: none;
    }
}
</style>
