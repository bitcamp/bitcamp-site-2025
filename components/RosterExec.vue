<template>
    <div id="exec" class="container">
        <div class="team-name">Co-Executives</div>
        <div class="section">
            <RosterCard name="Anjali Samavedam" position="Co-Executive Director" pronouns="she/her" :imageSrc="anjali"
                linkedinUrl="https://www.linkedin.com/in/anjali-samavedam/" />
            <RosterCard name="Sharvari Tirodkar" position="Co-Executive Director" pronouns="she/her"
                :imageSrc="sharvari" linkedinUrl="http://linkedin.com/in/stirodka/" />
        </div>
    </div>
</template>

<script lang="ts">
import anjali from '../assets/img/images/headshots/anjali.jpg'
import sharvari from '../assets/img/images/headshots/sharvari.jpg'

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
            anjali,
            sharvari,
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