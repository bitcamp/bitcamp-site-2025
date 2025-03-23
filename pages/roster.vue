<template>
  <div class="wrapper" ref="wrapperRef">
    <NavbarRoster />
    <div class="app-container">
      <div class="image image-day"></div>
      <div class="image image-late-day"></div>
      <div class="image image-sunset"></div>
      <div class="image image-night"></div>
      <div class="image image-sunrise"></div>
      <div class="roster-container">
        <div class="color-container">
          <RosterExec />
          <RosterDirector />
          <RosterDesign />
          <RosterEvents />
          <RosterExp />
          <RosterLog />
          <RosterMark />
          <RosterSponsFin />
          <RosterTech />
          <RosterSenior />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import NavbarRoster from '~/components/NavbarRoster.vue'
import RosterExec from '~/components/RosterExec.vue'
import RosterDirector from '~/components/RosterDirector.vue'
import RosterDesign from '~/components/RosterDesign.vue'
import RosterEvents from '~/components/RosterEvents.vue'
import RosterExp from '~/components/RosterExp.vue'
import RosterLog from '~/components/RosterLog.vue'
import RosterMark from '~/components/RosterMark.vue'
import RosterSenior from '~/components/RosterSenior.vue'
import RosterTech from '~/components/RosterTech.vue'
import RosterSponsFin from '~/components/RosterSponsFin.vue'

import { ref, onMounted, onBeforeUnmount } from 'vue';
export default {
  name: 'HomePage',
  components: { RosterDesign, RosterDirector, RosterExec, RosterExp, RosterLog, RosterMark, RosterSenior, RosterSponsFin, RosterTech },

  setup() {
    const wrapperRef = ref<HTMLElement | null>(null);
    const handleScroll = () => {
      if (!wrapperRef.value) return;
      const scrollTop = wrapperRef.value.scrollTop;
      const visibleHeight = wrapperRef.value.clientHeight;
      const totalHeight = wrapperRef.value.scrollHeight - visibleHeight;
      const fraction = scrollTop / totalHeight;

      const dayEl = wrapperRef.value.querySelector('.image-day') as HTMLElement;
      const lateEl = wrapperRef.value.querySelector('.image-late-day') as HTMLElement;
      const sunsetEl = wrapperRef.value.querySelector('.image-sunset') as HTMLElement;
      const nightEl = wrapperRef.value.querySelector('.image-night') as HTMLElement;
      const sunriseEl = wrapperRef.value.querySelector('.image-sunrise') as HTMLElement;

      dayEl.style.opacity = fraction < 0.20 ? `${Math.max(0.9, 1 - fraction * 5)}` : '0';  // Half transparent instead of fully white
      lateEl.style.opacity = fraction >= 0.10 && fraction < 0.40 ? `${Math.max(0.9, 1 - (fraction - 0.20) * 5)}` : '0';
      sunsetEl.style.opacity = fraction >= 0.30 && fraction < 0.60 ? `${Math.max(0.9, 1 - (fraction - 0.40) * 5)}` : '0';
      nightEl.style.opacity = fraction >= 0.50 && fraction < 0.80 ? `${Math.max(0.9, 1 - (fraction - 0.60) * 5)}` : '0';
      sunriseEl.style.opacity = fraction >= 0.70 ? `${Math.max(0.9, 1 - (fraction - 0.80) * 5)}` : '0';
    };

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
    };
  },
};

</script>

<style scoped>
.wrapper {
  overflow-y: auto;
  position: relative;
  height: 100vh;
}

.app-container {
  display: flex;
  flex-direction: column;
  align-content: center;
  flex-wrap: wrap;
  font-family: 'Aleo', sans-serif;
  margin-top: 2rem;

  @media only screen and (max-width: 993px) {
    margin-top: 0rem;
  }
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
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  background-size: cover;
  transition: opacity 0.2s linear;
  /* Smooth transition for opacity */
}

.image-day {
  background-image: url("../assets/img/images/Daybeachmockup.webp");
  z-index: 1;
  opacity: 1;
}

.image-late-day {
  background-image: url("../assets/img/images/LateDaybeachmockup.webp");
  z-index: 2;
  opacity: 0;
}

.image-sunset {
  background-image: url("../assets/img/images/Sunsetbeachmockup.webp");
  z-index: 3;
  opacity: 0;
}

.image-night {
  background-image: url("../assets/img/images/Nightbeachmockup.webp");
  z-index: 4;
  opacity: 0;
}

.image-sunrise {
  background-image: url("../assets/img/images/Sunrisebeachmockup.webp");
  z-index: 5;
  opacity: 0;
}

.roster-container {
  display: flex;
  flex-wrap: wrap;
  /* background-color: rgba(20, 53, 66, 0.69);
    width: 69%; */
  justify-content: center;
  z-index: 99999;
}

.color-container {
  padding-top: 2.5rem;
  background-color: rgba(20, 53, 66, 0.69);
  width: 69%;
}
</style>