<template>
  <div class="gradient">
    <div class="section-container">
      <div class="footer">
        <div class="floatie-text past-grid-container">
          <div class="links">
            <a href="http://mlh.io/code-of-conduct">MLH Code of Conduct</a> |
            <a href="/sponsor" target="_blank">Sponsor Us</a> |
            <a href="/brand.pdf">Brand Guidelines</a> |
            <a href="mailto:hello@bit.camp">Contact Us</a>
            <div class="copyright">
              Copyright &copy; 2019 - 2025 Bitcamp. All Rights Reserved.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'PastEventsGrid',
  components: {},
  data() {
    return {
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
  bottom: 6.5vw;
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
  background-color: #540000;
  ;
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
