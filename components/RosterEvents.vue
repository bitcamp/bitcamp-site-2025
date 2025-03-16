<template>
    <div id="events" class="container">
        <div class="team-name">Events</div>
        <div class="section">
            <RosterCard name="Adrian Alphons" position="Events Organizer" pronouns="he/him" :imageSrc="adrian" />
            <RosterCard name="Anunithaa (Anu) Rajakumaresan" position="Events Organizer" pronouns="she/her"
                linkedinUrl="https://www.linkedin.com/in/anunithaa-rajakumaresan-180261238/" :imageSrc="anu" />
            <RosterCard name="Hannah Chen" position="Events Organizer" pronouns="she/her"
                linkedinUrl="https://www.linkedin.com/in/hannah-chen-30099b27b" :imageSrc="hannah" />
            <RosterCard name="Harleen Green" position="Events Organizer" pronouns="she/her"
                linkedinUrl="https://www.linkedin.com/in/harleengreen" :imageSrc="harleen" />
            <RosterCard name="Ishaan Bhardvaj" position="Events Organizer" pronouns="he/him"
                linkedinUrl="https://www.linkedin.com/in/ishaan-b-bhardvaj" :imageSrc="ishaan" />
            <RosterCard name="Meilin Yuan" position="Events Organizer" pronouns="she/her"
                linkedinUrl="https://www.linkedin.com/in/meilinyuan" :imageSrc="meilin" />
            <RosterCard name="Saanvi Kataria" position="Events Organizer" pronouns="she/her"
                linkedinUrl="https://www.linkedin.com/in/-saanvikataria" :imageSrc="saanvi" />
            <RosterCard name="Sofia (Sofie) Douglass" position="Events Organizer" pronouns="she/her"
                :imageSrc="sofie" />
        </div>
    </div>
</template>

<script lang="ts">
import adrian from '../assets/img/images/headshots/Adrian.jpg';
import anu from '../assets/img/images/headshots/Anunithaa.jpg';
import hannah from '../assets/img/images/headshots/Hannah.jpg';
import harleen from '../assets/img/images/headshots/Harleen.jpg';
import ishaan from '../assets/img/images/headshots/Ishaan.jpg';
import meilin from '../assets/img/images/headshots/Meilin.jpg';
import saanvi from '../assets/img/images/headshots/Saanvi.jpg';
import sofie from '../assets/img/images/headshots/Sofie.jpg';

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
            adrian, anu, hannah, harleen, ishaan, meilin, saanvi, sofie
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