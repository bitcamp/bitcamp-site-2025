<template>
    <div class="wrapper" ref="el">
        <div class="app-container">
            <div class="image image-day"></div>
            <div class="roster-container">
                <div class="organizers-container">
                    <h1>Directors</h1>
                    <RosterCard name="Amber Chen" position="Marketing Director" pronouns="she/her" url="https://www.linkedin.com/in/amber--chen/" />
                    <RosterCard name="Ananya Nagireddy" position="Experience Director" pronouns="she/her" url="https://www.linkedin.com/in/ananya-nagireddy-70233a1a0/" />
                    <RosterCard name="Beatrice Chung" position="Sponsorship Director" pronouns="she/her" url="https://www.linkedin.com/in/beatricechung/" />
                    <RosterCard name="Daniel Chung" position="Finance Director" pronouns="he/him" url="https://www.linkedin.com/in/daniel03chung/" />
                    <RosterCard name="Julia Chen" position="Logistics Director" pronouns="she/her" url="https://www.linkedin.com/in/julia-z-chen/" />
                    <RosterCard name="Neha Veeragandham" position="Logistics Director" pronouns="she/her" url="https://www.linkedin.com/in/nehaveeragandham/" />
                    <RosterCard name="Nitya Venkatiahgari" position="Events Director" pronouns="she/her" url="https://linkedin.com/in/nitya-venkatiahgari" />
                    <RosterCard name="Sai Pranav Theerthala" position="Tech Director" pronouns="he/him" url="https://www.linkedin.com/in/sai-pranav-theerthala" />
                    <RosterCard name="Saloni Shah" position="Tech Director" pronouns="she/her" url="https://www.linkedin.com/in/saloni-k-shah/" />
                    <RosterCard name="Soumika (Mika) Pendem" position="Design Director" pronouns="she/her" url="https://www.linkedin.com/in/soumika-pendem/" />
                    <h1>Design</h1>
                    <RosterCard name="Adrien Rozario" position="Design Organizer" pronouns="they/them" url="https://www.linkedin.com/in/adrien-rozario-847b68249/" />
                    <RosterCard name="Angela Zhang" position="Design Organizer" pronouns="she/her" url="www.linkedin.com/in/angela-zhang915" />
                    <RosterCard name="Dahn Kim" position="Design Organizer" pronouns="they/them" url="https://www.linkedin.com/in/dahn-kim-a92934254/" />
                    <RosterCard name="Kyra Yip" position="Design Organizer" pronouns="she/her" url="https://www.linkedin.com/in/kyra-skye-yip/" />
                    <RosterCard name="Olivia Zhang" position="Design Organizer" pronouns="she/her" url="www.linkedin.com/in/oliviaszhang" />
                    <RosterCard name="Tracy Anne Tan" position="Design Organizer" pronouns="she/her" url="www.linkedin.com/in/tracy-anne-tan-69a37a27b" />
                    <RosterCard name="Trisha Anand" position="Design Organizer" pronouns="she/her" url="https://www.linkedin.com/in/anandtrisha/" />
                    <RosterCard name="Vivian Howe" position="Design Organizer" pronouns="she/her" url="https://www.linkedin.com/in/vivianhowe/" />
                    <RosterCard name="Wendy Tu" position="Design Organizer" pronouns="she/her" url="https://www.linkedin.com/in/wendy-tu-umd/" />
                    <h1>Events</h1>
                    <RosterCard name="Adrian Alphons" position="Events Organizer" pronouns="he/him" />
                    <RosterCard name="Anunithaa (Anu) Rajakumaresan" position="Events Organizer" pronouns="she/her" url="https://www.linkedin.com/in/anunithaa-rajakumaresan-180261238/" />
                    <RosterCard name="Hannah Chen" position="Events Organizer" pronouns="she/her" url="www.linkedin.com/in/hannah-chen-30099b27b" />
                    <RosterCard name="Harleen Green" position="Events Organizer" pronouns="she/her" url="www.linkedin.com/in/harleengreen" />
                    <RosterCard name="Ishaan Bhardvaj" position="Events Organizer" pronouns="he/him" url="https://www.linkedin.com/in/ishaan-b-bhardvaj" />
                    <RosterCard name="Meilin Yuan" position="Events Organizer" pronouns="she/her" url="https://www.linkedin.com/in/meilinyuan" />
                    <RosterCard name="Saanvi Kataria" position="Events Organizer" pronouns="she/her" url="www.linkedin.com/in/-saanvikataria" />
                    <RosterCard name="Sofia (Sofie) Douglass" position="Events Organizer" pronouns="she/her" />
            </div>
        </div>
            <!-- <div class="image image-late-day"></div> -->
            <!-- <div class="image image-sunset"></div> -->
            <!-- <div class="image image-night"></div> -->
            <!-- <div class="image image-sunrise"></div> -->
        </div>
    </div>
</template>

<script lang="ts">

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
    },
};
</script>

<style scoped>
  .organizers-container > h1 {
    flex-basis: 100%;
    text-align: center;
    color: white;
  }
.wrapper {
    overflow-y: scroll;
    overflow-x: hidden;
    height: 100vh;
}

.app-container {
    display: flex;
    flex-direction: column;
    font-family: 'Aleo', sans-serif;
}

.image {
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}

.image-day {
    background-image: url("../assets/img/images/Daybeachmockup.svg");
}

.image-late-day {
    background-image: url("../assets/img/images/LateDaybeachmockup.svg");
}

.image-sunset {
    background-image: url("../assets/img/images/Sunsetbeachmockup.svg");
}

.image-night {
    background-image: url("../assets/img/images/Nightbeachmockup.svg");
}

.image-sunrise {
    background-image: url("../assets/img/images/Sunrisebeachmockup.svg");
}

.roster-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    background-color: #143542;
    width: 61vw;
    width: 90%;
    max-width: 840px; /* 4 cards * (200px each + small gaps) */
    height: 100vh;
    opacity: 0.76;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    overflow-y: auto;
    padding: 10px; /* Optional: adjust horizontal padding if needed */
}


.organizers-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 90%;
    height: auto;
    position: absolute;
}

@media (max-width: 796px) {
    .transition0 {
        background-image: linear-gradient(#9a9c00, #b94923);
        height: 10vw;
        z-index: 100000;
    }
}
</style>

<!-- <template>
    <div class="wrapper" ref="wrapper">
        <div class="bg-layer day"></div>
        <div class="bg-layer lateDay"></div>
        <div class="bg-layer sunset"></div>
        <div class="bg-layer night"></div>
        <div class="bg-layer sunrise"></div>

        <div class="content">
            <h1>Bitcamp Demo</h1>
            <p>Scroll down to see the background transition.</p>
            <div class="filler"></div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, onBeforeUnmount } from 'vue';

export default defineComponent({
    name: 'HomePage',
    setup() {
        const wrapperRef = ref<HTMLElement | null>(null);

        const handleScroll = () => {
            if (!wrapperRef.value) return;

            const scrollTop = wrapperRef.value.scrollTop;
            const visibleHeight = wrapperRef.value.clientHeight;
            const totalHeight = wrapperRef.value.scrollHeight - visibleHeight;
            const fraction = scrollTop / totalHeight; // 0 to 1

            // Query each layer
            const dayEl = wrapperRef.value.querySelector('.day') as HTMLElement;
            const lateEl = wrapperRef.value.querySelector('.lateDay') as HTMLElement;
            const sunsetEl = wrapperRef.value.querySelector('.sunset') as HTMLElement;
            const nightEl = wrapperRef.value.querySelector('.night') as HTMLElement;
            const sunriseEl = wrapperRef.value.querySelector('.sunrise') as HTMLElement;

            // Basic “segment” approach:
            // 0.00 – 0.20: day
            // 0.20 – 0.40: lateDay
            // 0.40 – 0.60: sunset
            // 0.60 – 0.80: night
            // 0.80 – 1.00: sunrise

            dayEl.style.opacity = fraction < 0.20 ? '1' : '0';
            lateEl.style.opacity = fraction >= 0.20 && fraction < 0.40 ? '1' : '0';
            sunsetEl.style.opacity = fraction >= 0.40 && fraction < 0.60 ? '1' : '0';
            nightEl.style.opacity = fraction >= 0.60 && fraction < 0.80 ? '1' : '0';
            sunriseEl.style.opacity = fraction >= 0.80 ? '1' : '0';
        };

        // Attach/remove scroll listener
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
});
</script>

<style scoped>
/* Container that can scroll */
.wrapper {
    height: 100vh;
    overflow-y: scroll;
    position: relative;
}

/* Each background layer is fixed over the viewport */
.bg-layer {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;

    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    transition: opacity 1s ease;
    opacity: 0;
    /* all start invisible */
}

/* Put each background image here */
.day {
    background-image: url("../assets/img/images/Daybeachmockup.svg");
    z-index: 1;
}

.lateDay {
    background-image: url("../assets/img/images/LateDaybeachmockup.svg");
    z-index: 2;
}

.sunset {
    background-image: url("../assets/img/images/Sunsetbeachmockup.svg");
    z-index: 3;
}

.night {
    background-image: url("../assets/img/images/Nightbeachmockup.svg");
    z-index: 4;
}

.sunrise {
    background-image: url("../assets/img/images/Sunrisebeachmockup.svg");
    z-index: 5;
}

/* Foreground content on top */
.content {
    position: relative;
    z-index: 999;
    /* Make it tall so you can actually scroll. */
    min-height: 500vh;
    padding: 2rem;
}

.filler {
    height: 300vh;
    /* Extra space for scrolling demonstration */
}
</style> -->