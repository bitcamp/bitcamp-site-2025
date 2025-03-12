<template>
    <div id="dir" class="container">
        <div class="team-name">Directors</div>
        <div class="section">
            <RosterCard name="Soumika (Mika) Pendem" position="Design Director" pronouns="she/her"
                linkedinUrl="https://www.linkedin.com/in/soumika-pendem/" :imageSrc="mika" />
            <RosterCard name="Nitya Venkatiahgari" position="Events Director" pronouns="she/her"
                linkedinUrl="https://linkedin.com/in/nitya-venkatiahgari" :imageSrc="nitya" />
            <RosterCard name="Ananya Nagireddy" position="Experience Director" pronouns="she/her"
                linkedinUrl="https://www.linkedin.com/in/ananya-nagireddy-70233a1a0/" :imageSrc="ananya" />
            <RosterCard name="Julia Chen" position="Logistics Director" pronouns="she/her"
                linkedinUrl="https://www.linkedin.com/in/julia-z-chen/" :imageSrc="julia" />
            <RosterCard name="Neha Veeragandham" position="Logistics Director" pronouns="she/her"
                linkedinUrl="https://www.linkedin.com/in/nehaveeragandham/" :imageSrc="neha" />
            <RosterCard name="Amber Chen" position="Marketing Director" pronouns="she/her"
                linkedinUrl="https://www.linkedin.com/in/amber--chen/" :imageSrc="amber" />
            <RosterCard name="Beatrice Chung" position="Sponsorship Director" pronouns="she/her"
                linkedinUrl="https://www.linkedin.com/in/beatricechung/" :imageSrc="beatrice" />
            <RosterCard name="Daniel Chung" position="Finance Director" pronouns="he/him"
                linkedinUrl="https://www.linkedin.com/in/daniel03chung/" :imageSrc="daniel" />
            <RosterCard name="Saloni Shah" position="Tech Director" pronouns="she/her"
                linkedinUrl="https://www.linkedin.com/in/saloni-k-shah/" :imageSrc="saloni" />
            <RosterCard name="Sai Pranav Theerthala" position="Tech Director" pronouns="he/him"
                linkedinUrl="https://www.linkedin.com/in/sai-pranav-theerthala" :imageSrc="sai" />
        </div>
    </div>
</template>

<script lang="ts">
import amber from '../assets/img/images/headshots/Amber.png';
import ananya from '../assets/img/images/headshots/Ananya.jpg';
import beatrice from '../assets/img/images/headshots/beatricechung.jpg';
import daniel from '../assets/img/images/headshots/danielchung1.jpg';
import julia from '../assets/img/images/headshots/juliachen.jpg';
import mika from '../assets/img/images/headshots/Mika.jpg';
import neha from '../assets/img/images/headshots/nehaveeragandham.jpg';
import nitya from '../assets/img/images/headshots/Nitya.jpg';
import saloni from '../assets/img/images/headshots/salonishah.jpg';
import sai from '../assets/img/images/headshots/saipranavtheerthala1.jpg'

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
            mika, nitya, ananya, julia, neha, amber, beatrice, daniel, saloni, sai
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