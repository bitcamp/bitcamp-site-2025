<template>
    <div id="log" class="container">
        <div class="team-name">Logistics</div>
        <div class="section">
            <RosterCard name="Anoushka Arora" position="Logistics Organizer" pronouns="she/her" :imageSrc="anoushka"
                linkedinUrl="https://www.linkedin.com/in/anoushka-arora-b77929153/" />
            <RosterCard name="Sneha Balur" position="Logistics Organizer" pronouns="she/her" :imageSrc="sneha"
                linkedinUrl="https://www.linkedin.com/in/sneha-balur/" />
            <RosterCard name="James (Jim) Joseph Barry" position="Logistics Organizer" pronouns="he/him" :imageSrc="jim"
                linkedinUrl="https://www.linkedin.com/in/james-barry-good-choice/?profileId=ACoAAFB_MukBscIhyXIavb9ybwfFmzfPhNf033k" />
            <RosterCard name="Anshu Chandrasekhar" position="Logistics Organizer" pronouns="she/her" :imageSrc="anshu"
                linkedinUrl="https://www.linkedin.com/in/anshu-chandrasekhar/" />
            <RosterCard name="Shreya Gavarapattu" position="Logistics Organizer" pronouns="she/her" :imageSrc="shreya"
                linkedinUrl="https://www.linkedin.com/in/shreyagav/" />
            <RosterCard name="Naomi Kaul" position="Logistics Organizer" pronouns="she/her" :imageSrc="naomi"
                linkedinUrl="https://www.linkedin.com/in/naomi-kaul-a1b1341ba/" />
            <RosterCard name="Tiffany Liu" position="Logistics Organizer" pronouns="she/her" :imageSrc="tiffany"
                linkedinUrl="https://www.linkedin.com/in/tiffany-liu-776628244/" />
            <RosterCard name="Benjamin (Ben) Losey" position="Logistics Organizer" pronouns="he/him" :imageSrc="ben"
                linkedinUrl="https://www.linkedin.com/in/benjamin-losey/" />
            <RosterCard name="Charis Wang" position="Logistics Organizer" pronouns="she/her" :imageSrc="charis"
                linkedinUrl="https://www.linkedin.com/in/charswng/" />
            <RosterCard name="Ryan Zhao" position="Logistics Organizer" pronouns="he/him" :imageSrc="ryan"
                linkedinUrl="https://www.linkedin.com/in/ryanzhao27/" />
            <RosterCard name="Jessica Zhou" position="Logistics Organizer" pronouns="she/her" :imageSrc="jessica"
                linkedinUrl="https://www.linkedin.com/in/jessica-zhou-2a53021b3/" />
        </div>
    </div>
</template>

<script lang="ts">
import anoushka from '/assets/img/images/headshots/anoushkaarora.jpg';
import sneha from 'assets/img/images/headshots/snehabalur.jpg';
import jim from '/assets/img/images/headshots/jamesbarry.jpg';
import anshu from '/assets/img/images/headshots/anshuchandrasekhar.jpg';
import shreya from '/assets/img/images/headshots/shreyagavarapattu.jpg';
import naomi from '/assets/img/images/headshots/naomikaul.jpg';
import tiffany from '/assets/img/images/headshots/tiffanyliu.jpg';
import ben from '/assets/img/images/headshots/benjaminlosey.jpg';
import charis from '/assets/img/images/headshots/chariswang.jpg';
import ryan from '/assets/img/images/headshots/ryanzhao.jpg';
import jessica from '/assets/img/images/headshots/jessicazhou.jpg';

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
            anoushka, sneha, jim, anshu, shreya, naomi, tiffany, ben, charis, ryan, jessica
        }
    }
};

</script>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
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

.section {
    display: flex;
    justify-content: center;
    align-content: center;
    flex-wrap: wrap;
    width: 100%;
}
</style>