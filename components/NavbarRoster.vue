<template>
    <header>
        <nav>
            <div class="non-pages">
                <div id="logo-container">
                    <a tag="img" href="/">
                        <img id="logo-with-text" src="~/public/bitcamp-brand/logos/logotype.png" />
                        <img id="logo-image" src="~/public/bitcamp-brand/logos/bitcamp.png" />
                    </a>
                </div>
                <div class="hamburgerContainer">
                    <button class="hamburger hamburger--spin" type="button" style="color: #ffffff"
                        :class="{ 'is-active': showDropdown }" @click="toggleDropdown">
                        <span class="hamburger-box">
                            <span class="hamburger-inner"></span>
                        </span>
                    </button>
                </div>
            </div>
            <ul v-if="showDropdown || bigScreen" class="nav-pages">
                <div id="logo-container-inner">
                    <a tag="img" href="/">
                        <img id="logo-with-text" src="~/public/bitcamp-brand/logos/logotype.png" />
                        <img id="logo-image" src="~/public/bitcamp-brand/logos/bitcamp.png" />
                    </a>
                </div>
                <li class="page">
                    <a href="#exec" class="page-type">Co-Executives</a>
                </li>

                <li class="page">
                    <a href="#dir" class="page-type">Directors</a>
                </li>
                <li class="page">
                    <a href="#design" class="page-type">Design</a>
                </li>
                <li class="page">
                    <a href="#events" class="page-type">Events</a>
                </li>
                <li class="page">
                    <a href="#exp" class="page-type">Experience</a>
                </li>
                <li class="page">
                    <a href="#log" class="page-type">Logistics</a>
                </li>
                <li class="page">
                    <a href="#mark" class="page-type">Marketing</a>
                </li>
                <li class="page">
                    <a href="#sponsfin" class="page-type">Sponsorship and Finance</a>
                </li>
                <li class="page">
                    <a href="#tech" class="page-type">Tech</a>
                </li>
                <li class="page">
                    <a href="#old" class="page-type">Senior Advisors</a>
                </li>
            </ul>
        </nav>
    </header>

    <div>
        <slot />
    </div>
</template>

<script lang="ts">
export default {
    name: 'NavbarComponent',
};
</script>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const showDropdown = ref(false);
const bigScreen = ref(false);

onMounted(() => {
    const startSize = window.innerWidth;
    if (startSize > 992) {
        bigScreen.value = true;
    } else {
        bigScreen.value = false;
    }
    window.addEventListener('resize', onresize);
    window.addEventListener('scroll', setColorAndOpacity);
});

onUnmounted(() => {
    window.removeEventListener('resize', onresize);
    window.removeEventListener('scroll', setColorAndOpacity);
});

function onresize() {
    const screenSize = window.innerWidth;

    if (screenSize <= 992) {
        bigScreen.value = false;
    } else {
        bigScreen.value = true;
        showDropdown.value = false;
    }

    setColorAndOpacity();
}

function setColorAndOpacity() {
    var header = document.getElementsByTagName('header')[0];
}

function toggleDropdown() {
    showDropdown.value = !showDropdown.value;
    setColorAndOpacity();
}
</script>

<style scoped lang="scss">
$bitcamp: var(--color-bitcamp);
$mango: var(--color-mango);

header {
    z-index: 100000; // should be higher than everything else
    position: fixed;
    border: 0;
    width: 100%;
    margin-left: 50%;
    transform: translateX(-50%);
    background-color: #3d565c;
}

nav {
    position: relative;
    margin: 0vw;
    font-family: Aleo;
}

#logo-container {
    // position: absolute;
    // margin-left: 5%;
    margin-top: 0.5%;
    height: 100%;
    width: 6.9%;
}

#logo-container-inner {
    // position: absolute;
    // margin-left: 5%;
    margin-top: 0.5%;
    height: 100%;
    width: 6.9%;
}

#logo-with-text {
    max-height: 100%;
    max-width: 100%;
    object-fit: cover;
}

#logo-image {
    display: none;
}

.page-type {
    color: #FFFFFF;
    font-family: Aleo;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}

.page-type:hover {
    color: #223a32;
}

.nav-pages {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
}

.nav-pages li {
    display: flex;
    align-items: center;
    text-decoration: none !important;
    z-index: 3;

    &.page {
        margin-top: 4px;
    }
}

.nav-pages li a {
    text-decoration: none;
    font-size: 1.2vw;
}

.divider-large-screen {
    background-image: linear-gradient(180deg, lightgray, white);
    position: relative;
    padding: 0.2%;
    width: auto;
}

.dropdown-page {
    display: flex;
    flex-direction: column;
    width: auto;
    align-content: flex-start;
}

.dropdown-page:hover .dropdown-elements-container {
    display: flex;
}

.dropdown-elements-container {
    display: none;
    flex-direction: column;
    align-self: flex-start;
    width: 100%;
    position: relative;
    background-color: white;
    text-decoration: none !important;
}

.dropdown-elements {
    display: flex;
    flex-direction: column;
    align-self: center;
    align-items: flex-end;
    position: absolute;
    border: 0.1vw solid gray;
    border-radius: 10%;
    z-index: 1;
    background: white;
    height: fit-content;
    font-family: Avenir;
    width: 130%;
    position: absolute;
    text-decoration: none !important;
}

.dropdown-page:hover .dropdown-text {
    color: $mango;
    text-decoration: underline;
}

.dropdown-elements li {
    display: flex;
    flex-direction: column;
    text-align: left;
    position: relative;
    width: 90%;
    font-size: 0.6rem;
    margin: 4%;
}

.dropdown-elements li a {
    width: 100%;
    margin-left: 5%;
}

.non-pages {
    display: none;
}

.dropdown-elements li:hover a {
    color: $bitcamp;
    border-radius: 0.5rem;
    width: 100%;
    text-decoration: none !important;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: $bitcamp;
        opacity: 0.3;
        border-radius: 0.5rem;
        z-index: -1;
    }
}

.hamburgerContainer {
    z-index: 999999 !important;
    position: relative;
}

.divider {
    background-image: linear-gradient(180deg, lightgray, white);
    position: relative;
    padding: 0.2%;
    width: auto;
}

@media only screen and (max-width: 992px) {
    header {
        z-index: 100000; // should be higher than everything else
        position: fixed;
        border: 0;
        width: 100%;
        transform: translateX(-50%);
        background-color: transparent;
    }


    nav {
        display: flex;
        flex-direction: column;
        align-self: flex-start;
        margin: 0;
    }

    .non-pages {
        display: flex;
        flex-direction: row;
        align-items: center;
        height: 100%;
        justify-content: space-between;
        flex-wrap: wrap;
    }

    #logo-with-text {
        display: none;
        position: relative;
    }

    #logo-image {
        display: flex;
        max-width: 100%;
        width: 70px;
        min-width: 70px;
        height: 70px;
        min-height: 70px;
    }

    .nav-pages {
        margin-left: 0;
        width: 20%;
        min-width: 150px;
        font-size: 32px;
        background-color: #3d565c;
        position: absolute;
        right: 0;
        flex-direction: column;
        align-self: flex-start;
        margin-top: 50px;
        padding-left: 20px;
        border-radius: 20px;

    }

    .nav-pages li {
        margin-top: 1vw;
        width: 100%;

    }

    .nav-pages li a {
        font-size: 2rem;
        font-weight: 600;
        display: block;
        margin-top: 10px;
        margin-bottom: 10px;
        width: 100%;
        text-align: left;
    }

    .hamburgerContainer {
        position: relative;
        display: flex;
        margin-right: 1vw;
        align-items: flex-end;
        flex-direction: column;
    }

    .hamburgerBars {
        display: flex;
        flex-direction: column;
        cursor: pointer;
    }

    .dropdown-elements {
        align-self: flex-start;
        margin-left: 2vw;
        position: relative;
        border: none;
    }

    #logo-container-inner {
        display: none;
    }

    .dropdown-elements li {
        margin: 2%;
    }

    .dropdown-elements li:hover a {
        background-color: white;
    }

    .bar1,
    .bar2,
    .bar3 {
        width: 5vw;
        height: 0.75vw;
        margin: 0.5vw 0vw;
        border-radius: 1rem;
        background-color: #ffffff;
    }

    .divider {
        display: none;
    }

    .hamburger {
        padding: 25px 15px;
        display: flex;
        cursor: pointer;
        transition-property: opacity, filter;
        transition-duration: 0.15s;
        transition-timing-function: linear;
        font: inherit;
        color: inherit;
        text-transform: none;
        background-color: transparent;
        border: 0;
        margin: 0;
        overflow: visible;
    }

    .hamburger:hover {
        opacity: 0.7;
    }

    .hamburger.is-active:hover {
        opacity: 0.7;
    }

    .hamburger.is-active .hamburger-inner,
    .hamburger.is-active .hamburger-inner::before,
    .hamburger.is-active .hamburger-inner::after {
        background-color: #ffffff;
    }

    .hamburger-box {
        width: 40px;
        height: 24px;
        display: inline-block;
        position: relative;
    }

    .hamburger-inner {
        display: block;
        top: 50%;
        margin-top: -2px;
    }

    .hamburger-inner,
    .hamburger-inner::before,
    .hamburger-inner::after {
        width: 40px;
        height: 4px;
        background-color: #ffffff;
        border-radius: 4px;
        position: absolute;
        transition-property: transform;
        transition-duration: 0.15s;
        transition-timing-function: ease;
    }

    .hamburger-inner::before,
    .hamburger-inner::after {
        content: '';
        display: block;
    }

    .hamburger-inner::before {
        top: -10px;
    }

    .hamburger-inner::after {
        bottom: -10px;
    }

    /*
        * Spin
        */
    .hamburger--spin .hamburger-inner {
        transition-duration: 0.22s;
        transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }

    .hamburger--spin .hamburger-inner::before {
        transition: top 0.1s 0.25s ease-in, opacity 0.1s ease-in;
    }

    .hamburger--spin .hamburger-inner::after {
        transition: bottom 0.1s 0.25s ease-in,
            transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }

    .hamburger--spin.is-active .hamburger-inner {
        transform: rotate(225deg);
        transition-delay: 0.12s;
        transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }

    .hamburger--spin.is-active .hamburger-inner::before {
        top: 0;
        opacity: 0;
        transition: top 0.1s ease-out, opacity 0.1s 0.12s ease-out;
    }

    .hamburger--spin.is-active .hamburger-inner::after {
        bottom: 0;
        transform: rotate(-90deg);
        transition: bottom 0.1s ease-out,
            transform 0.22s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1);
    }
}
</style>