<template>
  <div class="event-text-only">
    <div class="event-theme">Explore The Past Ten Years of Bitcamp</div>
  </div>
  <div class="gradient">
    <div class="section-container">
      <div class="past-grid-container">
        <div class="past-grid">
          <template v-for="year in years" :key="year">
            <EventCard :year="year" :theme="themes[year]" />
          </template>
        </div>
      </div>
      <div class="footer">
        <div class="floatie-text past-grid-container">
          <div class="links">
            <a href="http://mlh.io/code-of-conduct">MLH Code of Conduct</a> |
            <a href="/sponsor" target="_blank">Sponsor Us</a> |
            <a href="/brand.pdf">Brand Guidelines</a> |
            <a href="mailto:hello@bit.camp">Contact Us</a>
            <div class="copyright">
              Copyright &copy; 2019 - 2024 Bitcamp. All Rights Reserved.
            </div>
          </div>
          <img class="elvis" src="../assets/img/images/elvis.svg" alt="elvis">
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import EventCard from '~/components/EventCard.vue';
export default {
  name: 'PastEventsGrid',
  components: { EventCard },
  data() {
    return {
      years: [2024, 2023, 2022, 2021, 2019, 2018, 2017, 2016, 2015, 2014] as const,
      themes: {
        2024: 'All About the Journey',
        2023: 'Find Your Frontier',
        2022: 'Adventure Awaits',
        2021: 'Explore Together',
        2019: 'Build With Purpose',
        2018: 'Mark Your Trail',
        2017: 'Build Together',
        2016: 'Explore New Grounds',
        2015: 'Imagine Tomorrow',
        2014: 'A New Hackathon',
      },
    };
  },
};
</script>

<style scoped>
.elvis {
  width: 125px;
  height: 125px;
  transform: rotate(4.426deg);
}

.event-text {
  position: absolute;
  bottom: 0;
  padding: 0px 0px 20px 25px;
}

.event-text-only {
  margin: 0px 60px 0 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.event-text h3 {
  font-family: Aleo;
  font-weight: 700;
  font-size: 4rem;
}

.event-theme {
  font-family: Aleo;
  font-weight: bold;
  font-size: 4rem;

  text-align: center;
  padding-top: 3rem;
  padding-bottom: 4rem;
}

.footer {
  /* position: relative; */
  box-sizing: border-box;
  margin-top: 5vw;
  height: 15vw;
  width: 100vw;
  overflow: hidden;
}

.links a {
  text-decoration: underline;
}

.floatie-text {
  position: absolute;
  text-align: center;
  margin: auto;
  left: 0;
  right: 0;
  bottom: 5vw;
  font-size: 1.5vw;
}

@media (max-width: 976px) {
  .floatie-text {
    font-size: 2vw;
  }
}

@media (max-width: 768px) {
  .floatie-text {
    font-size: 2.5vw;
  }

  .elvis {
    width: 75px;
    height: 75px;
  }
}

.gradient {
  background: linear-gradient(180deg, #13192E 0%, #393D64 60.5%, #656080 81.83%, #BD9290 95.5%);
}

.section-container {
  position: relative;
}

.past-grid-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}

.past-grid {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 100rem;
  padding: 0 3rem 0 3rem;
}

@keyframes bb-rotate {

  0%,
  100% {
    transform: rotate(-5deg);
  }

  50% {
    transform: rotate(-8deg);
  }
}

@keyframes circle-rotate {

  0%,
  100% {
    transform: rotate(-2deg);
  }

  50% {
    transform: rotate(2deg);
  }
}

.bb-rotate-div {
  animation: bb-rotate 8s ease infinite reverse;
}

.circle-rotate-div {
  animation: circle-rotate 8s ease infinite reverse;
}

.bob-div {
  animation: floatie-bob 6s ease infinite reverse;
}

.bb-floatie {
  width: 50vw;
  margin-left: -2vw;
  margin-bottom: -12vw;
}

.bb-floatie-text {
  position: absolute;
  transform: rotate(-20.5deg);
  font-size: 2.8vw;
  top: 13vw;
  left: 7.5vw;
}

.circle-floatie {
  width: 75vw;
  margin-left: 60vw;
  margin-top: -75vh;
  margin-bottom: -4vw;
}

/* mobile view */

/* bb floatie size */
@media (max-width: 768px) {
  .bb-floatie {
    width: 70vw;
    margin-left: -5vw;
    margin-bottom: -20vw;
  }

  .bb-floatie-text {
    font-size: 5vw;
    top: 17.5vw;
    left: 2.5vw;
  }
}

/* circle floatie position */
@media (max-width: 920px) {
  .circle-rotate-div {
    position: absolute;
    margin-top: 0;
    left: 0;
    top: 0vh;
  }

  .circle-floatie {
    width: 100vw;
    margin-top: 70vh;
  }
}
</style>
