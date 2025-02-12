<template>
  <div id="tracks" class="tracks-page gradient">
    <div class="tracks-container">
      <div class="title-container">
        <img src="@/assets/img/icons/foot-1.svg" class="foot" />
        <img src="@/assets/img/icons/foot-2.svg" class="foot" />
        <img src="@/assets/img/icons/TRACKS (1).svg" class="title" />
        <img src="@/assets/img/icons/foot-3.svg" class="foot" />
        <img src="@/assets/img/icons/foot-4.svg" class="foot" />
      </div>

      <div class="tracks-grid">
        <div class="track-card left">
          <!-- Track Text Container -->
          <img :src="tracks[0].icon" :alt="tracks[0].title" class="track-icon" />

          <div class="track-text-cont">
            <h2 class="track-title">{{ tracks[0].title }}</h2>
            <p class="track-description">{{ tracks[0].description }}</p>
          </div>
        </div>
        <img :src="tracks[0].feet" :alt="tracks[0].title" class="feet" />

        <div class="track-card right">
          <!-- Track Text Container -->
          <img :src="tracks[1].icon" :alt="tracks[1].title" class="track-icon" />

          <div class="track-text-cont">
            <h2 class="track-title">{{ tracks[1].title }}</h2>
            <p class="track-description">{{ tracks[1].description }}</p>
          </div>
        </div>
        <img :src="tracks[1].feet" :alt="tracks[1].title" class="feet" />

        <div class="track-card left">
          <!-- Track Text Container -->
          <img :src="tracks[2].icon" :alt="tracks[2].title" class="track-icon" />

          <div class="track-text-cont">
            <h2 class="track-title">{{ tracks[2].title }}</h2>
            <p class="track-description">{{ tracks[2].description }}</p>
          </div>
        </div>
        <img :src="tracks[2].feet" :alt="tracks[2].title" class="feet" />

        <div class="track-card right">
          <!-- Track Text Container -->
          <img :src="tracks[3].icon" :alt="tracks[3].title" class="track-icon" />

          <div class="track-text-cont">
            <h2 class="track-title">{{ tracks[3].title }}</h2>
            <p class="track-description">{{ tracks[3].description }}</p>
          </div>
        </div>
        <img :src="tracks[3].feet" :alt="tracks[3].title" class="feet" />

        <div class="track-card left">
          <!-- Track Text Container -->
          <img :src="tracks[4].icon" :alt="tracks[4].title" class="track-icon" />

          <div class="track-text-cont">
            <h2 class="track-title">{{ tracks[4].title }}</h2>
            <p class="track-description">{{ tracks[4].description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import quantumLogo from "@/assets/img/icons/quantum-logo.svg";
import appDevLogo from "@/assets/img/icons/appdev-logo.svg";
import cyberLogo from "@/assets/img/icons/cyber-logo.svg";
import generalLogo from "@/assets/img/icons/general-logo.svg";
import mlLogo from "@/assets/img/icons/ml-logo.svg";
import generalFeet from "@/assets/img/icons/generalFeet.svg";
import mlFeet from "@/assets/img/icons/mlFeet.svg";
import quantamFeet from "@/assets/img/icons/quantamFeet.svg";
import cyberFeet from "@/assets/img/icons/cyberFeet.svg";

export default {
  name: "TracksPage",
  data() {
    return {
      tracks: [
        {
          title: "General Track",
          description:
            "For any and all hackers! Build the perfect hack using hardware, software, and collaboration with other tech-lovers, design thinkers, and students - all skill and experience levels are welcome!",
          icon: generalLogo,
          feet: generalFeet,
        },
        {
          title: "Machine Learning",
          description:
            "If you are amazed by AI breakthroughs like ChatGPT and driven to create something just as impactful, then this is your track! Dive into hands-on workshops where you'll learn to build and deploy machine learning models, gain proficiency in essential ML techniques, and discuss innovations reshaping the AI landscape. By the end of this track, you’ll have a portfolio-ready project to showcase!",
          icon: mlLogo,
          feet: mlFeet,
        },
        {
          title: "Cybersecurity Track",
          description:
            "One of our newest tracks! Explore the realm of cybersecurity and understand various aspects of the field through interactive workshops that include discussions of web vulnerabilities, real-world applications of combating security weaknesses, and ethical decision-making.",
          icon: cyberLogo,
          feet: cyberFeet,
        },
        {
          title: "Quantum Track",
          description:
            "Hackers will delve into the field of quantum computing with exclusive mentors, sponsors, and workshops! Hackers will use their knowledge of Python and other computing skills on educational and interactive Quantum Track activities. If you've been a previous participant of the Quantum track, there will be new, challenging prompts for you to tackle!",
          icon: quantumLogo,
          feet: quantamFeet,
        },
        {
          title: "App Development Track",
          description:
            "Ever wondered how to turn your innovative app idea into a reality? Ready to turn your concepts into cutting-edge applications? Join the App Dev track - we'll introduce you to different aspects of development including the software development life cycle, development tools such as Flutter, and full-stack development through access to exclusive workshops and mentors as you work on your hack!",
          icon: appDevLogo,
        },
      ],
    };
  },
};
</script>

<style scoped>
.gradient {
  background: linear-gradient(to bottom, #5d3006, #6e1708);
  display: flex;
  justify-content: center;
  padding: 4vw 2vw;
}


@media screen and (max-width: 1024px) {
  .gradient {
    background: linear-gradient(to bottom, #5d3006, #b94923);
    display: flex;
    justify-content: center;
    padding: 4vw 2vw;
  }
}

.tracks-container {
  text-align: center;
  max-width: 90vw;
  width: 100%;
  background: #b94923;
  border-radius: 75px;
  padding: 2rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border: 1.3vw solid #ffd978;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: -25rem;
  z-index: 1000;
}

.title-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8vw;
  margin-bottom: 2vw;
  flex-wrap: wrap;
}

.title {
  width: 30vw;
  max-width: 90vw;
  height: 10vw;
  margin-bottom: 2vw;
}

.foot {
  width: 8vw;
  max-width: 8vw;
  height: auto;
  padding: 2vw;
}

.tracks-grid {
  display: flex;
  gap: 8rem;
  width: 100%;
  padding-bottom: 8rem;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: first baseline;
}

.track-card {
  display: flex;
  max-width: 36.5rem;
  text-align: center;
  flex-direction: column;
  align-items: center;
  justify-content: first baseline;
}

.track-text-cont {
  display: flex;
  max-width: 36.5rem;
  text-align: center;
  flex-direction: column;
  align-items: center;
  padding-top: 1rem;
}

.track-icon {
  width: 9vw;
  max-width: 9vw;
  height: auto;
}

.track-title {
  font-size: 2.7rem;
  font-weight: bold;
  margin-top: 1rem;
  margin-bottom: 3rem;
  color: #f8f8f8;
}

.track-description {
  font-size: 1.8rem;
  color: #f8f8f8;
}

.track-card.left {
  flex-direction: column;
}

.track-card.right {
  flex-direction: column;
  text-align: right;
  /* Adjust text alignment for the right side */
}

.feet {
  display: none;
}

@media (max-width: 796px) {
  .tracks-container {
    padding: 10vh 3vw;
    border-radius: 0;
    border: none;
    box-shadow: none;
    max-width: 95vw;
    background: url("/assets/img/images/tracks-background.webp");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    z-index: 0;
  }

  .gradient {
    padding: 0;
    background: none;
  }

  .track-icon {
    width: 28vw;
    max-width: 28vw;
    height: auto;
  }

  .special-icon {
    width: 28vw;
    max-width: 28vw;
    height: auto;
    padding-bottom: 6vw;
  }

  .track-text-cont {
    display: flex;
    width: 80vw;
    text-align: center;
    flex-direction: column;
    align-items: center;
  }

  .title {
    width: 80vw;
    /* Dynamically scale title width */
    height: auto;
    /* Let height adjust automatically */
    padding-top: 32vw;
  }

  .feet {
    display: flex;
    flex-direction: row;
    align-content: center;
    width: 80vw;
    height: auto;
    justify-items: left;

  }

  .title-container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.8vw;
    margin-bottom: 2vw;
    flex-wrap: wrap;
  }

  .track-card.left {
    flex-direction: row;
  }

  .track-card.right {
    flex-direction: row-reverse;
    text-align: right;
    /* Adjust text alignment for the right side */
  }

  .tracks-grid {
    gap: 0rem;
    display: flex;
    flex-direction: column;
    padding-bottom: 0;
    align-items: center;
  }

  .foot {
    display: none;
  }

  .track-card {
    flex-direction: row;
    align-content: center;
    max-width: 95%;
    height: auto;
    justify-items: left;
    gap: 1vw;
  }

  .track-title {
    font-size: 1.7em;
    /* Scale font size dynamically */
    max-width: 100%;
    margin-top: 1vh;
    margin-bottom: 1vh;
  }

  .track-description {
    font-size: 1em;
    /* Scale font size for readability */
    max-width: 85%;
  }
}

@media (max-width: 400px) {
  .feet {
    display: flex;
    flex-direction: row;
    align-content: center;
    width: 80vw;
    height: auto;
    justify-items: left;
  }

  .tracks-container {
    padding: 15vh 3vw;
    border-radius: 0;
    border: none;
    box-shadow: none;
    max-width: 95vw;
    background: url("/assets/img/images/tracks-background.webp");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    z-index: 0;
  }
}
</style>
