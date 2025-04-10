<template>
  <div class="wrapper" ref="el">
    <div class="app-container">
      <Navbar />
      <LandingPage />
      <div class="transition0"></div>
      <TracksPage />
      <CampGamesPage />
      <div class="transition1"></div>
      <TeamPage />
      <Schedule :styles="{ height: '80vh', minHeight: '60rem' }" />
      <FAQSponsorPage />
      <FooterContent />
    </div>
  </div>
</template>


<script lang="ts" setup>
useHead({
  title: 'Bitcamp',
  meta: [
    {
      name: 'description',
      content:
        "Bitcamp is a place for exploration. You will have 36 hours to delve into your curiosities, learn something new, and make something awesome. With world-class mentors and hundreds of fellow campers, you're in for an amazing time. If you're ready for an adventure, see you by the fire!",
    },
    {
      property: 'og:title',
      content: 'Bitcamp 2025',
    },
    {
      property: 'og:site_name',
      content: 'Bitcamp 2025',
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
      content: 'Bitcamp 2025',
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
});
</script>
<script lang="ts">
// import { Break } from '#build/components';
import Navbar from '~/components/Navbar.vue';
import Schedule from '~/components/Schedule.vue';
// import Break from '../components/Break.vue';
// import CampGamesPage from '../components/CampGamesPage.vue';
// import FAQSponsorPage from '../components/FAQSponsorPage.vue';
// import FooterContent from "../components/FooterContent.vue"
// import LandingPage from '../components/LandingPage.vue';
// import TeamPage from '../components/TeamPage.vue';
// import TracksPage from '../components/TracksPage.vue';

export default {
  name: 'HomePage',
  // components: { Navbar, FooterContent, LandingPage, Break, TracksPage, CampGamesPage, TeamPage, FAQSponsorPage },
  components: { Navbar, Schedule },
};
</script>

<style scoped>
.wrapper {
  overflow-y: scroll;
  overflow-x: hidden;
  height: 100dvh;
}

.app-container {
  overflow: hidden;
  /* overflow-y: scroll; */
  display: flex;
  flex-direction: column;
  width: 100vw;
  min-height: 100vh;
  background-size: 100% auto;
  background-repeat: no-repeat;
}

.LandingPage,
.TracksPage,
.CampGamesPage {
  position: absolute;
  width: 100%;
}

.LandingPage {
  top: 0;
  height: 33%;
  /* Adjust height as needed */
  background-color: lightblue;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.TracksPage {
  top: 25%;
  /* Controls overlap with Landing Page */
  height: 50%;
  /* Adjust height as needed */
  background-color: lightgreen;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
}

.CampGamesPage {
  bottom: 0;
  height: 33%;
  /* Adjust height as needed */
  background-color: lightcoral;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.Schedule {
  background: linear-gradient(
    to bottom,
    #31055A 0%,
    #2B0542 8%,
    #580000 100%
  );
}
.transition0 {
  background-image: linear-gradient(#1f470c, #5d3007);
  height: 4vw;
}

@media (max-width: 796px) {
  .transition0 {
    background-image: linear-gradient(#9a9c00, #b94923);
    height: 10vw;
    z-index: 100000;
  }
}

.transition1 {
  background-image: linear-gradient(#500001, #34045A);
  height: 4vw;
}
</style>
