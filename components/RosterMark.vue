<template>
    <div id="mark" class="container">
        <div class="team-name">Marketing</div>
        <div class="section">
            <RosterCard name="Sameer Chawla" position="Marketing Organizer" pronouns="he/him" :imageSrc="sameer"
                linkedinUrl="https://www.linkedin.com/in/sameer-chawla01/" />
            <RosterCard name="Kai Chen" position="Marketing Organizer" pronouns="he/him" :imageSrc="kai"
                linkedinUrl="https://www.linkedin.com/in/kaiichen/" />
            <RosterCard name="Ben DiMarco" position="Marketing Organizer" pronouns="he/him" :imageSrc="ben"
                linkedinUrl="https://www.linkedin.com/in/bendimarco/" />
            <RosterCard name="Srinidhi (Sri) Guruvayurappan" position="Marketing Organizer" pronouns="she/her"
                :imageSrc="sri" linkedinUrl="https://www.linkedin.com/in/srinidhi-guruvayurappan-1a40a829a/" />
            <RosterCard name="Purva Jani" position="Marketing Organizer" pronouns="she/her" :imageSrc="purva"
                linkedinUrl="https://www.linkedin.com/in/purva-jani/" />
            <RosterCard name="Kaylee Kim" position="Marketing Organizer" pronouns="she/her" :imageSrc="kaylee"
                linkedinUrl="https://www.linkedin.com/in/kaylee-k/" />
            <RosterCard name="Richard Mukam Jr" position="Marketing Organizer" pronouns="he/him" :imageSrc="richard"
                linkedinUrl="https://www.linkedin.com/in/richardmukamjr/" />
            <RosterCard name="Grace Yang" position="Marketing Organizer" pronouns="she/her" :imageSrc="grace"
                linkedinUrl="https://www.linkedin.com/in/graceyang2027/" />
        </div>
    </div>
</template>

<script lang="ts">
import sameer from '../assets/img/images/headshots/Sameer.png';
import kai from '../assets/img/images/headshots/Kai.png';
import ben from '../assets/img/images/headshots/Ben.png';
import sri from '../assets/img/images/headshots/Sri.png';
import purva from '../assets/img/images/headshots/Purva.png';
import kaylee from '../assets/img/images/headshots/Kaylee.png';
import richard from '../assets/img/images/headshots/Richard.png';
import grace from '../assets/img/images/headshots/Grace.png';

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
            sameer, kai, sri, purva, kaylee, richard, grace, ben
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