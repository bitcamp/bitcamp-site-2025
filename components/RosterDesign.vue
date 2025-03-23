<template>
    <div id="design" class="container">
        <div class="team-name">Design</div>
        <div class="section">
            <RosterCard name="Adrien Rozario" position="Design Organizer" pronouns="she/her"
                linkedinUrl="https://www.linkedin.com/in/adrien-rozario-847b68249/" :imageSrc="adrien" />
            <RosterCard name="Angela Zhang" position="Design Organizer" pronouns="she/her"
                linkedinUrl="https://www.linkedin.com/in/angela-zhang915/" :imageSrc="angela" />
            <RosterCard name="Dahn Kim" position="Design Organizer" pronouns="she/her"
                linkedinUrl="https://www.linkedin.com/in/dahn-kim-a92934254/" :imageSrc="dahn" />
            <RosterCard name="Kyra Yip" position="Design Organizer" pronouns="she/her"
                linkedinUrl="https://www.linkedin.com/in/kyra-skye-yip/" :imageSrc="kyra" />
            <RosterCard name="Olivia Zhang" position="Design Organizer" pronouns="she/her"
                linkedinUrl="https://www.linkedin.com/in/oliviaszhang" :imageSrc="olivia" />
            <RosterCard name="Tracy Anne Tan" position="Design Organizer" pronouns="she/her"
                linkedinUrl="https://www.linkedin.com/in/tracy-anne-tan-69a37a27b" :imageSrc="tracy" />
            <RosterCard name="Trisha Anand" position="Design Organizer" pronouns="she/her"
                linkedinUrl="https://www.linkedin.com/in/anandtrisha/" :imageSrc="trish" />
            <RosterCard name="Vivian Howe" position="Design Organizer" pronouns="she/her"
                linkedinUrl="https://www.linkedin.com/in/vivianhowe/" :imageSrc="vivian" />
            <RosterCard name="Wendy Tu" position="Design Organizer" pronouns="she/her"
                linkedinUrl="https://www.linkedin.com/in/wendy-tu-umd/" :imageSrc="wendy" />
        </div>
    </div>
</template>

<script lang="ts">
import adrien from '../assets/img/images/headshots/Adrien.jpg';
import angela from '../assets/img/images/headshots/Angela.jpg';
import dahn from '../assets/img/images/headshots/Dahn.jpg';
import kyra from '../assets/img/images/headshots/Kyra.jpg';
import olivia from '../assets/img/images/headshots/Olivia.jpg';
import tracy from '../assets/img/images/headshots/Tracy.jpg';
import trish from '../assets/img/images/headshots/Trisha.jpg';
import vivian from '../assets/img/images/headshots/Vivian.jpg';
import wendy from '../assets/img/images/headshots/Wendy.jpg';

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
            adrien,
            angela,
            dahn,
            kyra,
            olivia,
            tracy,
            trish,
            vivian,
            wendy
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