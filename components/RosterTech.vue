<template>
    <div id="tech" class="container">
        <div class="team-name">Tech</div>
        <div class="section">
            <RosterCard name="Mohe Edeen Abu Maizer" position="Tech Member" pronouns="he/him" :imageSrc="mohe"
                linkedinUrl="https://www.linkedin.com/in/moheedeen/" />
            <RosterCard name="Eileen Chen" position="Tech Member" pronouns="she/her" :imageSrc="eileen"
                linkedinUrl="https://www.linkedin.com/in/eileendc/" />
            <RosterCard name="Tyson Cheung" position="Tech Member" pronouns="he/him" :imageSrc="tyson"
                linkedinUrl="https://www.linkedin.com/in/tyson-cheung" />
            <RosterCard name="Arya Gijare" position="Tech Member" pronouns="she/her" :imageSrc="arya"
                linkedinUrl="https://www.linkedin.com/in/arya-gijare/" />
            <RosterCard name="Sanya Gupta" position="Tech Member" pronouns="she/her" :imageSrc="sanya"
                linkedinUrl="https://www.linkedin.com/in/sanya-gupta7" />
            <RosterCard name="Joanne Lee" position="Tech Member" pronouns="she/her" :imageSrc="joanne"
                linkedinUrl="https://www.linkedin.com/in/joanneynlee" />
            <RosterCard name="Devon Lai" position="Tech Member" pronouns="he/him" :imageSrc="devon"
                linkedinUrl="http://www.linkedin.com/in/devon-lai" />
            <RosterCard name="Harrison Padgett" position="Tech Member" pronouns="he/him" :imageSrc="harrison"
                linkedinUrl="https://www.linkedin.com/in/harrison-padgett" />
            <RosterCard name="Swathi Pulipati" position="Tech Member" pronouns="she/her" :imageSrc="swathi"
                linkedinUrl="https://linkedin.com/in/swathi-pulipati-1b450b232" />
            <RosterCard name="Thirunavukkarasu (Thiru) Sethuraman" position="Tech Member" pronouns="he/him"
                :imageSrc="thiru" linkedinUrl="https://www.linkedin.com/in/thirus27" />
            <RosterCard name="Srujana Theerthala" position="Tech Member" pronouns="she/her" :imageSrc="srujana"
                linkedinUrl="https://www.linkedin.com/in/srujana-theerthala-165671262" />
            <RosterCard name="Harini Thirukonda" position="Tech Member" pronouns="she/her" :imageSrc="harini"
                linkedinUrl="https://www.linkedin.com/in/harini-thirukonda-190036238/" />
        </div>
    </div>
</template>

<script lang="ts">
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
            mohe, eileen, tyson, arya, sanya, joanne, devon, harrison, swathi, thiru, srujana, harini
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