<template>
    <div class="gradient">
        <div class="page_container">
            <div class="page_header">
                <img class="header_image" src="../assets/img/images/our_team_img.svg" alt="lebron" />
            </div>
            <div class="mid_content_container">
                <div class="team_image">
                    <img class="team_photo" src="../assets/img/images/team_photo_background.svg" alt="lebron" />
                </div>
                <div class="message">
                    <div class="message_text">
                        We're the co-executive directors of Bitcamp 2025, and we're so excited to be working with this
                        amazing team to lead Bitcamp into a new decade of hackathon culture. Each and every single one
                        of
                        our 82 organizers plays an integral part in making Bitcamp happen, and we can't wait to see
                        these
                        brilliant minds bring Bitcamp 2025 to life and make it possible for hackers like you to Unearth
                        Your
                        Potential!
                        <br><br> - Anjali Samavedam and Sharvari Tirodkar
                    </div>
                </div>

            </div>
            <div class="bottom_button_container">
                <img class="meet_team_image" src="../assets/img/images/meet_team_button.svg" alt="lebron" />
            </div>

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
    background-image: url(assets/img/images/purplecaves.svg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    /* height: 100vh; */
}

.page_container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 4rem;
}

.mid_content_container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
}

.team_image {
    margin-inline: 7.5%;
}

.team_photo {
    width: 90%;
}

.message {
    background-image: url(../assets/img/images/message_background.svg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    width: 55rem;
    display: flex;
    flex-wrap: wrap;
    align-content: center;
}

.message_text {
    margin-left: 12%;
    margin-right: 2%;
    text-align: center;
}
</style>