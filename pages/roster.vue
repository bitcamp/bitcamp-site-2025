<template>
    <div class="wrapper" ref="el">
        <div class="app-container">
            <div class="image image-day"></div>
            <div class="roster-container">
                <!-- Experience -->
                <RosterCard name="Avanti Athavale" position="Position" pronouns="she/her" :imageSrc="avanti" linkedinUrl="https://www.linkedin.com/in/avantiathavale/"/>
                <RosterCard name="Aditi Chalasani" position="Position" pronouns="she/her" :imageSrc="aditi" linkedinUrl="https://www.linkedin.com/in/aditichalasani/"/>
                <RosterCard name="Debarshi Dey" position="Position" pronouns="he/him" :imageSrc="debarshi" linkedinUrl="https://www.linkedin.com/in/debarshi-dey/"/>
                <RosterCard name="Sifene (Sif) Fufa" position="Position" pronouns="she/them" linkedinUrl="https://www.linkedin.com/in/sifene-fufa-a8975b33b//"/>
                <RosterCard name="Samuel (Sam) Galita" position="Position" pronouns="he/him" :imageSrc="sam" linkedinUrl="https://www.linkedin.com/in/samuel-galita-7498a5225/"/>
                <RosterCard name="Jaskaran (Jas) Gill" position="Position" pronouns="he/him" :imageSrc="jas" linkedinUrl="https://www.linkedin.com/in/jaskaran-gill123/"/>
                <RosterCard name="Alex Luo" position="Position" pronouns="he/him" :imageSrc="alex" linkedinUrl="https://www.linkedin.com/in/alexbluo/"/>
                <RosterCard name="Nithika Ramanathan" position="Position" pronouns="she/her":imageSrc="nithika" linkedinUrl="https://www.linkedin.com/in/nithika-ramanathan/"/>
                <RosterCard name="Michelle Rhee" position="Position" pronouns="she/her" :imageSrc="michelle" linkedinUrl="https://www.linkedin.com/in/michelle-rhee-900903292/"/>
                <RosterCard name="Anannya Trehan" position="Position" pronouns="she/her":imageSrc="anannya" linkedinUrl="https://www.linkedin.com/in/anannya-trehan/"/>
                <RosterCard name="Michelle Yu" position="Position" pronouns="she/her" :imageSrc="michelleY" linkedinUrl="https://www.linkedin.com/in/michelle-yu-57122b246/"/>
                <!-- Logistics -->
                <RosterCard name="Anoushka Arora" position="Position" pronouns="she/her" :imageSrc="anoushka" linkedinUrl="https://www.linkedin.com/in/anoushka-arora-b77929153/"/>
                <RosterCard name="Sneha Balur" position="Position" pronouns="she/her" :imageSrc="sneha" linkedinUrl="https://www.linkedin.com/in/sneha-balur/"/>
                <RosterCard name="James (Jim) Joseph Barry" position="Position" pronouns="he/him" :imageSrc="jim" linkedinUrl="https://www.linkedin.com/in/james-barry-good-choice/?profileId=ACoAAFB_MukBscIhyXIavb9ybwfFmzfPhNf033k"/>
                <RosterCard name="Anshu Chandrasekhar" position="Position" pronouns="she/her" :imageSrc="anshu" linkedinUrl="https://www.linkedin.com/in/anshu-chandrasekhar/"/>
                <RosterCard name="Shreya Gavarapattu" position="Position" pronouns="she/her" :imageSrc="shreya" linkedinUrl="https://www.linkedin.com/in/shreyagav/"/>
                <RosterCard name="Naomi Kaul" position="Position" pronouns="she/her" linkedinUrl="https://www.linkedin.com/in/naomi-kaul-a1b1341ba/"/>
                <RosterCard name="Tiffany Liu" position="Position" pronouns="she/her" :imageSrc="tiffany" linkedinUrl="https://www.linkedin.com/in/tiffany-liu-776628244/"/>
                <RosterCard name="Benjamin (Ben) Losey" position="Position" pronouns="he/him" :imageSrc="ben" linkedinUrl="https://www.linkedin.com/in/benjamin-losey/"/>
                <RosterCard name="Charis Wang" position="Position" pronouns="she/her" :imageSrc="charis" linkedinUrl="https://www.linkedin.com/in/charswng/"/>
                <RosterCard name="Ryan Zhao" position="Position" pronouns="he/him" :imageSrc="ryan" linkedinUrl="https://www.linkedin.com/in/ryanzhao27/"/>
                <RosterCard name="Jessica Zhou" position="Position" pronouns="she/her" :imageSrc="jessica" linkedinUrl="https://www.linkedin.com/in/jessica-zhou-2a53021b3/"/>
                <!-- Marketing -->
                <RosterCard name="Sameer Chawla" position="Position" pronouns="he/him" :imageSrc="sameer" linkedinUrl="https://www.linkedin.com/in/sameer-chawla01/"/>
                <RosterCard name="Kai Chen" position="Position" pronouns="he/him" :imageSrc="kai" linkedinUrl="https://www.linkedin.com/in/kaiichen/"/>
                <RosterCard name="Ben DiMarco" position="Position" pronouns="he/him" imageSrc="" linkedinUrl="https://www.linkedin.com/in/bendimarco/"/>
                <RosterCard name="Srinidhi (Sri) Guruvayurappan" position="Position" pronouns="she/her" :imageSrc="sri" linkedinUrl="https://www.linkedin.com/in/srinidhi-guruvayurappan-1a40a829a/"/>
                <RosterCard name="Purva Jani" position="Position" pronouns="she/her" :imageSrc="purva" linkedinUrl="https://www.linkedin.com/in/purva-jani/"/>
                <RosterCard name="Kaylee Kim" position="Position" pronouns="she/her" :imageSrc="kaylee" linkedinUrl="https://www.linkedin.com/in/kaylee-k/"/>
                <RosterCard name="Richard Mukam Jr" position="Position" pronouns="he/him" :imageSrc="richard" linkedinUrl="https://www.linkedin.com/in/richardmukamjr/"/>
                <RosterCard name="Grace Yang" position="Position" pronouns="she/her" :imageSrc="grace" linkedinUrl="https://www.linkedin.com/in/graceyang2027/"/>

            </div>
            <!-- <div class="image image-late-day"></div> -->
            <!-- <div class="image image-sunset"></div> -->
            <!-- <div class="image image-night"></div> -->
            <!-- <div class="image image-sunrise"></div> -->
        </div>
    </div>
</template>

<script lang="ts">
import avanti from '../assets/img/images/headshots/Avanti Athavale.jpg';
import aditi from '../assets/img/images/headshots/Aditi Chalasani.jpg';
import debarshi from '../assets/img/images/headshots/Debarshi Dey - Headshot.jpeg';
// import sif from '../assets/img/images/headshots/Sifene Fufa.jpg';
import sam from '../assets/img/images/headshots/Sam Galita.jpg';
import jas from '../assets/img/images/headshots/Jaskaran Gill.jpg';
import alex from '../assets/img/images/headshots/Alex Luo.jpg';
import nithika from '../assets/img/images/headshots/Nithika Ramanathan.jpeg';
import michelle from '../assets/img/images/headshots/Michelle Rhee.jpg';
import anannya from '../assets/img/images/headshots/Anannya Trehan.jpg';
import michelleY from '../assets/img/images/headshots/Michelle Yu.jpeg';
import anoushka from '../assets/img/images/headshots/Anoushka Arora.jpg';
import sneha from '../assets/img/images/headshots/Sneha Balur.jpeg';
import jim from '../assets/img/images/headshots/James Barry.jpeg';
import anshu from '../assets/img/images/headshots/Anshu_C.jpg';
import shreya from '../assets/img/images/headshots/Shreya Gavarapattu.jpg';
// import naomi from '../assets/img/images/headshots/Naomi Kaul.jpg';
import tiffany from '../assets/img/images/headshots/Tiffany Liu.jpg';
import ben from '../assets/img/images/headshots/Ben Losey.jpeg';
import charis from '../assets/img/images/headshots/Charis Wang.jpg';
import ryan from '../assets/img/images/headshots/Ryan Zhao.jpg';
import jessica from '../assets/img/images/headshots/Jessica Zhou.jpg';
import sameer from '../assets/img/images/headshots/SameerChawla.jpg';
import kai from '../assets/img/images/headshots/Kai Chen.jpg';
// import benD from '../assets/img/images/headshots/Ben DiMarco.jpg';
import sri from '../assets/img/images/headshots/Srinidhi Guruvayurappan.jpeg';
import purva from '../assets/img/images/headshots/Purva Jani.jpg';
import kaylee from '../assets/img/images/headshots/Kaylee Kim.jpg';
import richard from '../assets/img/images/headshots/Richard Mukham.jpg';
import grace from '../assets/img/images/headshots/Grace Yang.jpg';

export default {
    name: 'HomePage',
    // components: { Navbar, FooterContent, LandingPage, Break, TracksPage, CampGamesPage, TeamPage, FAQSponsorPage },
    components: {},

    head() {
        return {
            title: 'Bitcamp',
            meta: [
                {
                    name: 'description',
                    content:
                        "Bitcamp is a place for exploration. You will have 36 hours to delve into your curiosities, learn something new, and make something awesome. With world-class mentors and hundreds of fellow campers, you're in for an amazing time. If you're ready for an adventure, see you by the fire!",
                },
                {
                    property: 'og:title',
                    content: 'Bitcamp 2024',
                },
                {
                    property: 'og:site_name',
                    content: 'Bitcamp 2024',
                },
                {
                    property: 'og:url',
                    content: 'https://bit.camp/',
                },
                {
                    property: 'og:description',
                    content:
                        "Bitcamp is a place for exploration. You will have 36 hours to delve into your curiosities, learn something new, and make something awesome. With world-class mentors and hundreds of fellow campers, you're in for an amazing time. If you're ready for an adventure, see you by the fire!",
                },
                {
                    property: 'og:type',
                    content: 'website',
                },
                {
                    property: 'twitter:card',
                    content: 'summary',
                },
                {
                    property: 'twitter:url',
                    content: 'https://bit.camp/',
                },
                {
                    property: 'twitter:title',
                    content: 'Bitcamp 2024',
                },
                {
                    property: 'twitter:description',
                    content:
                        "Bitcamp is a place for exploration. You will have 36 hours to delve into your curiosities, learn something new, and make something awesome. With world-class mentors and hundreds of fellow campers, you're in for an amazing time. If you're ready for an adventure, see you by the fire!",
                },
                {
                    name: 'msapplication-TileColor',
                    content: '#ff6f3f',
                },
                {
                    name: 'msapplication-config',
                    content: '/bitcamp-brand/favicons/browserconfig.xml',
                },
                {
                    name: 'theme-color',
                    content: '#ffffff',
                },
            ],
            link: [
                {
                    rel: 'icon',
                    type: 'image/png',
                    sizes: '32x32',
                    href: '/bitcamp-brand/favicons/favicon-32x32.png',
                },
                {
                    rel: 'icon',
                    type: 'image/png',
                    sizes: '16x16',
                    href: '/bitcamp-brand/favicons/favicon-16x16.png',
                },
                {
                    rel: 'manifest',
                    href: '/bitcamp-brand/favicons/site.webmanifest',
                },
                {
                    rel: 'mask-icon',
                    href: '/bitcamp-brand/favicons/safari-pinned-tab.svg',
                    color: '#ff6f3f',
                },
                {
                    rel: 'shortcut icon',
                    href: '/bitcamp-brand/favicons/favicon.ico',
                },
            ],
        };
    }, data() {
        return {
            avanti,
            aditi,
            debarshi,
            sam,
            jas,
            alex,
            nithika,
            michelle,
            anannya,
            michelleY,
            anoushka,
            sneha,
            jim,
            anshu,
            shreya,
            tiffany,
            ben,
            charis,
            ryan,
            jessica,
            sameer,
            kai,
            sri,
            purva,
            kaylee,
            richard,
            grace
        }
    }
};
</script>

<style scoped>
.wrapper {
    overflow-y: scroll;
    overflow-x: hidden;
    height: 100vh;
}

.app-container {
    display: flex;
    flex-direction: column;
    font-family: 'Aleo', sans-serif;
}

.image {
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}

.image-day {
    background-image: url("../assets/img/images/Daybeachmockup.svg");
}

.image-late-day {
    background-image: url("../assets/img/images/LateDaybeachmockup.svg");
}

.image-sunset {
    background-image: url("../assets/img/images/Sunsetbeachmockup.svg");
}

.image-night {
    background-image: url("../assets/img/images/Nightbeachmockup.svg");
}

.image-sunrise {
    background-image: url("../assets/img/images/Sunrisebeachmockup.svg");
}

.roster-container {
    display: flex;
    flex-wrap: wrap;
    background-color: #143542;
    width: 61vw;
    height: 100vh;
    opacity: 0.76;
    position: absolute;
    top: 0;
    left: 20%;
    overflow-y: auto;
}

@media (max-width: 796px) {
    .transition0 {
        background-image: linear-gradient(#9a9c00, #b94923);
        height: 10vw;
        z-index: 100000;
    }
}
</style>

<!-- <template>
    <div class="wrapper" ref="wrapper">
        <div class="bg-layer day"></div>
        <div class="bg-layer lateDay"></div>
        <div class="bg-layer sunset"></div>
        <div class="bg-layer night"></div>
        <div class="bg-layer sunrise"></div>

        <div class="content">
            <h1>Bitcamp Demo</h1>
            <p>Scroll down to see the background transition.</p>
            <div class="filler"></div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, onBeforeUnmount } from 'vue';

export default defineComponent({
    name: 'HomePage',
    setup() {
        const wrapperRef = ref<HTMLElement | null>(null);

        const handleScroll = () => {
            if (!wrapperRef.value) return;

            const scrollTop = wrapperRef.value.scrollTop;
            const visibleHeight = wrapperRef.value.clientHeight;
            const totalHeight = wrapperRef.value.scrollHeight - visibleHeight;
            const fraction = scrollTop / totalHeight; // 0 to 1

            // Query each layer
            const dayEl = wrapperRef.value.querySelector('.day') as HTMLElement;
            const lateEl = wrapperRef.value.querySelector('.lateDay') as HTMLElement;
            const sunsetEl = wrapperRef.value.querySelector('.sunset') as HTMLElement;
            const nightEl = wrapperRef.value.querySelector('.night') as HTMLElement;
            const sunriseEl = wrapperRef.value.querySelector('.sunrise') as HTMLElement;

            // Basic “segment” approach:
            // 0.00 – 0.20: day
            // 0.20 – 0.40: lateDay
            // 0.40 – 0.60: sunset
            // 0.60 – 0.80: night
            // 0.80 – 1.00: sunrise

            dayEl.style.opacity = fraction < 0.20 ? '1' : '0';
            lateEl.style.opacity = fraction >= 0.20 && fraction < 0.40 ? '1' : '0';
            sunsetEl.style.opacity = fraction >= 0.40 && fraction < 0.60 ? '1' : '0';
            nightEl.style.opacity = fraction >= 0.60 && fraction < 0.80 ? '1' : '0';
            sunriseEl.style.opacity = fraction >= 0.80 ? '1' : '0';
        };

        // Attach/remove scroll listener
        onMounted(() => {
            if (wrapperRef.value) {
                wrapperRef.value.addEventListener('scroll', handleScroll);
            }
        });
        onBeforeUnmount(() => {
            if (wrapperRef.value) {
                wrapperRef.value.removeEventListener('scroll', handleScroll);
            }
        });

        return {
            wrapperRef,
        };
    },
});
</script>

<style scoped>
/* Container that can scroll */
.wrapper {
    height: 100vh;
    overflow-y: scroll;
    position: relative;
}

/* Each background layer is fixed over the viewport */
.bg-layer {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;

    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    transition: opacity 1s ease;
    opacity: 0;
    /* all start invisible */
}

/* Put each background image here */
.day {
    background-image: url("../assets/img/images/Daybeachmockup.svg");
    z-index: 1;
}

.lateDay {
    background-image: url("../assets/img/images/LateDaybeachmockup.svg");
    z-index: 2;
}

.sunset {
    background-image: url("../assets/img/images/Sunsetbeachmockup.svg");
    z-index: 3;
}

.night {
    background-image: url("../assets/img/images/Nightbeachmockup.svg");
    z-index: 4;
}

.sunrise {
    background-image: url("../assets/img/images/Sunrisebeachmockup.svg");
    z-index: 5;
}

/* Foreground content on top */
.content {
    position: relative;
    z-index: 999;
    /* Make it tall so you can actually scroll. */
    min-height: 500vh;
    padding: 2rem;
}

.filler {
    height: 300vh;
    /* Extra space for scrolling demonstration */
}
</style> -->