 <template>
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
</style> 