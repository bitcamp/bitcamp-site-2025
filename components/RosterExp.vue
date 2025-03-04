<template>
    <div id="exp" class="container">
        <div class="team-name">Experience</div>
        <div class="section">
            <RosterCard name="Avanti Athavale" position="Position" pronouns="she/her" :imageSrc="avanti"
                linkedinUrl="https://www.linkedin.com/in/avantiathavale/" />
            <RosterCard name="Aditi Chalasani" position="Position" pronouns="she/her" :imageSrc="aditi"
                linkedinUrl="https://www.linkedin.com/in/aditichalasani/" />
            <RosterCard name="Debarshi Dey" position="Position" pronouns="he/him" :imageSrc="debarshi"
                linkedinUrl="https://www.linkedin.com/in/debarshi-dey/" />
            <RosterCard name="Sifene (Sif) Fufa" position="Position" pronouns="she/them"
                linkedinUrl="https://www.linkedin.com/in/sifene-fufa-a8975b33b//" />
            <RosterCard name="Samuel (Sam) Galita" position="Position" pronouns="he/him" :imageSrc="sam"
                linkedinUrl="https://www.linkedin.com/in/samuel-galita-7498a5225/" />
            <RosterCard name="Jaskaran (Jas) Gill" position="Position" pronouns="he/him" :imageSrc="jas"
                linkedinUrl="https://www.linkedin.com/in/jaskaran-gill123/" />
            <RosterCard name="Alex Luo" position="Position" pronouns="he/him" :imageSrc="alex"
                linkedinUrl="https://www.linkedin.com/in/alexbluo/" />
            <RosterCard name="Nithika Ramanathan" position="Position" pronouns="she/her" :imageSrc="nithika"
                linkedinUrl="https://www.linkedin.com/in/nithika-ramanathan/" />
            <RosterCard name="Michelle Rhee" position="Position" pronouns="she/her" :imageSrc="michelle"
                linkedinUrl="https://www.linkedin.com/in/michelle-rhee-900903292/" />
            <RosterCard name="Anannya Trehan" position="Position" pronouns="she/her" :imageSrc="anannya"
                linkedinUrl="https://www.linkedin.com/in/anannya-trehan/" />
            <RosterCard name="Michelle Yu" position="Position" pronouns="she/her" :imageSrc="michelleY"
                linkedinUrl="https://www.linkedin.com/in/michelle-yu-57122b246/" />
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
            avanti, aditi, debarshi, sam, jas, alex, nithika, michelle, anannya, michelleY
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