<template>
  <div class="tracks-page gradient">
    <div class="tracks-container">
      <div class="title-container">
        <img src="@/assets/img/icons/foot-1.svg" class="foot" />
        <img src="@/assets/img/icons/foot-2.svg" class="foot" />
        <img src="@/assets/img/icons/TRACKS (1).svg" class="title" />
        <img src="@/assets/img/icons/foot-3.svg" class="foot" />
        <img src="@/assets/img/icons/foot-4.svg" class="foot" />
      </div>

      <div class="tracks-grid">
        <div
          v-for="(track, index) in tracks"
          :key="track.title"
          class="track-card"
          :class="index % 2 === 0 ? 'left' : 'right'"
        >
          <!-- Conditional Rendering for Specific Track -->
          <div v-if="track.title === 'Cybersecurity Track'" class="special-icon">
          <!-- Special Track Icon -->
          <img :src="track.icon" :alt="track.title" class="special-icon" />
          </div>
          <div v-else class="default-icon-div">
          <!-- Default Track Icon -->
          <img :src="track.icon" :alt="track.title" class="track-icon" />
          </div>

          <!-- Track Text Container -->
          <div class="track-text-cont">
            <h2 class="track-title">{{ track.title }}</h2>
            <p class="track-description">{{ track.description }}</p>
          </div>
        </div>
      </div>
      <div class="tracks-grid1">
        <div
          v-for="(track, index) in tracks1"
          :key="track.title"
          class="track-card"
          :class="index % 2 === 0 ? 'right' : 'left'"
        >
          <!-- Track Icon -->
          <img :src="track.icon" :alt="track.title" class="track-icon" />

          <!-- Track Text Container -->
          <div class="track-text-cont">
            <h2 class="track-title">{{ track.title }}</h2>
            <p class="track-description">{{ track.description }}</p>
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
        },
        {
          title: "Machine Learning",
          description:
            "If you're wowed by recent AI advancements like ChatGPT, this is the track for you! We will expand upon specialized learning experiences by hosting a series of workshops with content related to building and hosting ML models, unsupervised learning, and discussions of recent AI advancements.",
          icon: mlLogo,
        },
        {
          title: "Cybersecurity Track",
          description:
            "One of our newest tracks! Explore the realm of cybersecurity and understand various aspects of the field through interactive workshops that include discussions of web vulnerabilities, real-world applications of combating security weaknesses, and ethical decision-making.",
          icon: cyberLogo,
        },
      ],
      tracks1: [
        {
          title: "Quantum Track",
          description:
            "Hackers will delve into the field of quantum computing with exclusive mentors, sponsors, and workshops! Hackers will use their knowledge of Python and other computing skills on educational and interactive Quantum Track activities. If you've been a previous participant of the Quantum track, there will be new, challenging prompts for you to tackle!",
          icon: quantumLogo,
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
  background: linear-gradient(to bottom, #ff5b01, #ffcc66);
  display: flex;
  justify-content: center;
  padding: 4vw 2vw;
}

.tracks-container {
  text-align: center;
  max-width: 85%;
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
}

.title-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8vw;
  margin-bottom: 2rem;
  flex-wrap: wrap;
}

.title {
  width: 30vw;
  max-width: 600px;
  margin-bottom: 2rem;
}

.foot {
  width: 8vw;
  max-width: 200px;
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
  align-items: center;
}

.tracks-grid1 {
  display: flex;
  gap: 8rem;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
}

.track-card {
  display: flex;
  max-width: 36.5rem;
  text-align: center;
  flex-direction: column;
  align-items: center;
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
  max-width: 200px;
  height: auto;
}

.special-icon {
  width: 9vw;
  max-width: 200px;
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
  text-align: right; /* Adjust text alignment for the right side */
}

@media (max-width: 766px) {
  .tracks-container {
    padding: 5vh 3vw;
    border-radius: 0;
    border: none;
    box-shadow: none;
    max-width: 100%;
    background: url("/assets/img/images/Group 20.svg");
    background-size: cover;
  }

  .gradient {
    padding: 0;
  }

  .track-icon {
    width: 29vw;
    max-width: 29vw;
    height: auto;
  }

  .special-icon {
    width: 29vw;
    max-width: 29vw;
    height: auto;
    padding-bottom: 4vw;
}

  .track-text-cont {
    display: flex;
    width: 80vw;
    text-align: center;
    flex-direction: column;
    align-items: center;
  }

  .title {
    width: 80vw; /* Dynamically scale title width */
    height: auto; /* Let height adjust automatically */
    padding-top: 11vh;
  }

  .track-card.left {
  flex-direction: row;
}

  .track-card.right {
  flex-direction: row-reverse;
  text-align: right; /* Adjust text alignment for the right side */
}

  .tracks-grid {
    display: flex;
    flex-direction: column;
    gap: 19vh;
    padding-bottom: 14vh;
  }

  .tracks-grid1 {
    display: flex;
    flex-direction: column;
    gap: 24vh; /* Adjust gap for smaller grids */
    padding-bottom: 8vh;
}

  .foot {
    display: none;
  }

  .track-card {
    flex-direction: row;
    align-content: center;
    max-width: 100%;
    height: 21vh;
    justify-items: left;
    gap: 1vw;
  }

  .track-title {
    font-size: 1.7em; /* Scale font size dynamically */
    max-width: 100%;
    margin-top: 1vh;
    margin-bottom: 1vh;
  }

  .track-description {
    font-size: 1em; /* Scale font size for readability */
    max-width: 85%;
  }
}
</style>
