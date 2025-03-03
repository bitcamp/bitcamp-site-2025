<template>
    <div class="wrapper" ref="el">
        <div class="app-container">
            <div class="image image-day"></div>
            <div class="roster-container">
                <div class="team-name">Co-Executive</div>
                <RosterCard name="Anjali Samavedam" position="Co-Executive Director" pronouns="she/her" :imageSrc="anjali" linkedinUrl="https://www.linkedin.com/in/anjali-samavedam/"/>
                <RosterCard name="Sharvari Tirodkar" position="Co-Executive Director" pronouns="she/her" :imageSrc="sharvari" linkedinUrl="http://linkedin.com/in/stirodka/"/>
                
                <div class="team-name">Sponsorship</div>
                <RosterCard name="Rishi Agarwal" position="Sponsorship" pronouns="he/him" :imageSrc="rishi" linkedinUrl="http://www.linkedin.com/in/rishi-agarwal13" />
                <RosterCard name="Nikita (Niki) Arya" position="Sponsorship (Contact Finders/Writers)" pronouns="she/her" :imageSrc="nikita" linkedinUrl="http://www.linkedin.com/in/nikitaaryaa"/>
                <RosterCard name="Melanie Chen" position="Finance (Invoicing)" pronouns="she/her" :imageSrc="melanie" linkedinUrl="https://www.linkedin.com/in/melaniechenn"/>
                <RosterCard name="Aditri Gadigi" position="Finance (Reimbursements)" pronouns="she/her" :imageSrc="aditri" linkedinUrl="http://www.linkedin.com/in/aditrig"/>
                <RosterCard name="Jennifer Li" position="Sponsorship (General, Mass Mailing)" pronouns="she/her" :imageSrc="jennifer" linkedinUrl="https://www.linkedin.com/in/li-jennifer-j/"/>
                <RosterCard name="Saharsh Maloo" position="Sponsorship (General, Mass Mailing)" pronouns="he/him" :imageSrc="saharsh" linkedinUrl="https://www.linkedin.com/in/saharsh-maloo"/>
                <RosterCard name="Bhavini Pandey" position="Sponsorship (Contact Finders/Writers)" pronouns="she/her" :imageSrc="bhavini" linkedinUrl="https://www.linkedin.com/in/bhavini-pandey-05/"/>

                <div class="team-name">Tech</div>
                <RosterCard name="Mohe Edeen Abu Maizer" position="Tech Member" pronouns="he/him" :imageSrc="mohe" linkedinUrl="https://www.linkedin.com/in/moheedeen/"/>
                <RosterCard name="Eileen Chen" position="Tech Member" pronouns="she/her" :imageSrc="eileen" linkedinUrl="https://www.linkedin.com/in/eileendc/"/>
                <RosterCard name="Tyson Cheung" position="Tech Member" pronouns="he/him" :imageSrc="tyson" linkedinUrl="https://www.linkedin.com/in/tyson-cheung"/>
                <RosterCard name="Arya Gijare" position="Tech Member" pronouns="she/her" :imageSrc="arya" linkedinUrl="https://www.linkedin.com/in/arya-gijare/"/>
                <RosterCard name="Sanya Gupta" position="Tech Member" pronouns="she/her" :imageSrc="sanya" linkedinUrl="https://www.linkedin.com/in/sanya-gupta7"/>
                <RosterCard name="Joanne Lee" position="Tech Member" pronouns="she/her" :imageSrc="joanne" linkedinUrl="https://www.linkedin.com/in/joanneynlee"/>
                <RosterCard name="Devon Lai" position="Tech Member" pronouns="he/him" :imageSrc="devon" linkedinUrl="http://www.linkedin.com/in/devon-lai"/>
                <RosterCard name="Harrison Padgett" position="Tech Member" pronouns="he/him" :imageSrc="harrison" linkedinUrl="https://www.linkedin.com/in/harrison-padgett"/>
                <RosterCard name="Swathi Pulipati" position="Tech Member" pronouns="she/her" :imageSrc="swathi" linkedinUrl="https://linkedin.com/in/swathi-pulipati-1b450b232"/>
                <RosterCard name="Thirunavukkarasu (Thiru) Sethuraman" position="Tech Member" pronouns="he/him" :imageSrc="thiru" linkedinUrl="https://www.linkedin.com/in/thirus27"/>
                <RosterCard name="Srujana Theerthala" position="Tech Member" pronouns="she/her" :imageSrc="srujana" linkedinUrl="https://www.linkedin.com/in/srujana-theerthala-165671262"/>
                <RosterCard name="Harini Thirukonda" position="Tech Member" pronouns="she/her" :imageSrc="harini" linkedinUrl="https://www.linkedin.com/in/harini-thirukonda-190036238/"/>

                <div class="team-name">Senior Advisors</div>
                <RosterCard name="Eric Chen" position="Senior Advisor" pronouns="he/him" :imageSrc="eric"/>
                <RosterCard name="Anthony Huynh" position="Senior Advisor" pronouns="he/him" :imageSrc="anthony"/>
                <RosterCard name="Amrit Magesh" position="Senior Advisor" pronouns="he/him" :imageSrc="amrit" linkedinUrl="http://www.linkedin.com/in/amrit-magesh"/>
                <RosterCard name="Eunice Oh" position="Senior Advisor" pronouns="she/they" :imageSrc="eunice" linkedinUrl="https://www.linkedin.com/in/oh-eunice/"/>

            </div>
            <!-- <div class="image image-late-day"></div> -->
            <!-- <div class="image image-sunset"></div> -->
            <!-- <div class="image image-night"></div> -->
            <!-- <div class="image image-sunrise"></div> -->
        </div>
    </div>
</template>

<script lang="ts">
import anjali from '../assets/img/images/headshots/anjali.jpg'
import sharvari from '../assets/img/images/headshots/sharvari.jpg'

import rishi from '../assets/img/images/headshots/rishiagarwal.jpg';
import saharsh from'../assets/img/images/headshots/saharashmaloo2.jpg';
import nikita from'../assets/img/images/headshots/nikitaarya.jpg';
import melanie from'../assets/img/images/headshots/melaniechen.jpg';
import aditri from'../assets/img/images/headshots/aditrigadigi.jpg';
import jennifer from'../assets/img/images/headshots/jenniferli.jpg';
import bhavini from'../assets/img/images/headshots/bhavinipandey.jpg';

import mohe from '../assets/img/images/headshots/mohe.jpg';
import eileen from '../assets/img/images/headshots/eileenchen.jpg';
import tyson from '../assets/img/images/headshots/tysoncheung.jpg';
import arya from '../assets/img/images/headshots/aryagijare.jpg';
import sanya from '../assets/img/images/headshots/sanyagupta.jpg';
import joanne from '../assets/img/images/headshots/joannelee.jpg';
import devon from '../assets/img/images/headshots/devonlai.jpg';
import harrison from '../assets/img/images/headshots/harrisonpadgett.jpg';
import swathi from '../assets/img/images/headshots/swathipulipati.jpg';
import thiru from '../assets/img/images/headshots/thirusethuraman.jpg';
import srujana from '../assets/img/images/headshots/srujanatheerthala.jpg';
import harini from '../assets/img/images/headshots/harinithirukonda.jpg';

import eric from '../assets/img/images/headshots/eric.jpg'
import anthony from '../assets/img/images/headshots/anthony.jpg'
import amrit from '../assets/img/images/headshots/amrit.jpg'
import eunice from '../assets/img/images/headshots/eunice.jpg'

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
    },data() {
        return {
            anjali,
            sharvari,
            rishi,
            saharsh,
            nikita,
            melanie,
            aditri,
            jennifer,
            bhavini,
            mohe,
            eileen,
            tyson,
            arya,
            sanya,
            joanne,
            devon,
            harrison,
            swathi,
            thiru,
            srujana,
            harini,
            eric,
            anthony,
            amrit,
            eunice,
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

.team-name {
    font-family: Aleo;
    font-weight: 700;
    font-size: 4vh;
    letter-spacing: 0%;
    text-align: center;
    color: #FFFFFF;
    width: 100%;
    padding-top: 5vh;
    padding-bottom: 2vh;
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
    justify-content: center;
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