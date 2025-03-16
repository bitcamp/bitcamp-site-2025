<template>
    <div id="roster" class="gradient">
        <div class="page_container">
            <div class="page_header">
                <img class="header_image" src="../assets/img/images/our_team_img.svg" alt="lebron" />
                <img class="header_image_mv" src="../assets/img/images/our_team_mv.svg" alt="lebron" />
            </div>
            <div class="mid_content_container">
                <div class="team_image">
                    <img class="team_photo" src="../assets/img/images/team_pic.webp" alt="lebron" />
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
            <a href="/roster" target="_blank" class="bottom_button_container">
                <img class="meet_team_image" src="../assets/img/images/meet_team_button.svg" alt="lebron" />
            </a>

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
    background-image: url(assets/img/images/purplecaves.webp);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    /* height: 176vh; */
    /* height: 100vh; */
}

.page_container {
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-top: 4rem;
}

.page_header {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 10%;
}

.header_image {
    display: flex;
    margin-right: auto;
    margin-left: auto;
}

.header_image_mv {
    display: none;
}

.mid_content_container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
}

.team_image {
    /* margin-inline: 7.5%; */
    width: 83%
}

.team_photo {
    width: 90%;
}

.message {
    background-image: url(../assets/img/images/message_background.svg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    width: 55%;
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    margin-top: 1%;
}

.message_text {
    margin-left: 12%;
    margin-right: 5%;
    text-align: center;
    font-size: 17px;
}

.bottom_button_container {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 13%;
    margin-bottom: 5%;
}

.meet_team_image {
    width: 70%;
    display: flex;
    margin-left: 5%;
}

@media screen and (max-width: 1110px) {
    .message_text {
        font-size: 15px;
    }
}

@media screen and (max-width: 925px) {
    .message_text {
        font-size: 13px;
    }
}

@media screen and (max-width: 790px) {
    .message_text {
        font-size: 12px;
    }
}

@media screen and (max-width: 750px) {
    .page_header {
        display: block;
    }

    .header_image {
        display: none;
    }

    .header_image_mv {
        margin: auto;
        display: block;
        margin-bottom: 5%;
        width: 60%;
        height: auto;
    }

    .mid_content_container {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .team_image {
        width: 80%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .team_photo {
        width: 100%;
        display: flex;
        /* margin-left: 25%; */
    }

    .message {
        background-image: none;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 80%;
    }

    .message_text {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        margin-top: 10%;
        font-size: 20px;
    }
}

@media screen and (max-width: 600px) {
    .message_text {
        font-size: 18px;
    }
}

@media screen and (max-width: 450px) {
    .message_text {
        font-size: 16px;
    }
}

@media screen and (max-width: 370px) {
    .message_text {
        font-size: 14px;
    }
}
</style>