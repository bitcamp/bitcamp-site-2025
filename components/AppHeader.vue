<template>
  <div class="header-container">
    <img src="../assets/img/images/bitcamp-lightup.svg" width="300" alt="Bitcamp" />
    <div class="header-content">
      <h1 class="header-title">We’re out exploring, but we’ll see you in April 2025!</h1>
      <div class="socials">
        <p>In the meantime, follow our socials for updates and indicate your interest in Bitcamp 2025 here.</p>
        <SocialIcons />
      </div>
      <div class="header-body">
        <LinkButton text="I'm Interested!" link="https://forms.gle/zbJnXHsDyQxaereH9" />
      </div>
      <a id="mlh-trust-badge" class="mlh-display"
        href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2025-season&utm_content=white"
        target="_blank"><img
          src="https://s3.amazonaws.com/logged-assets/trust-badge/2025/mlh-trust-badge-2025-white.svg"
          alt="Major League Hacking 2025 Hackathon Season" style="width:100%">
      </a>
    </div>

    <div class="graphics">
      <img class="trees" src="../assets/img/images/trees.svg" alt="trees">
      <img class="trees-small" src="../assets/img/images/trees-small.svg" alt="trees">
      <img class="campfire" src="../assets/img/images/campfire.svg" alt="campfire">
    </div>
  </div>
</template>

<script lang="ts">
import LinkButton from '~/components/LinkButton.vue';
import SocialIcons from '~/components/SocialIcons.vue';
export default {
  name: 'AppHeader',
  components: { LinkButton, SocialIcons },
};
</script>

<style scoped>
.header-container {
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-bottom: 30vw;
  margin-bottom: 15vw;
  padding-top: 75px;
  gap: 1.8vw;
  text-align: center;
  background: linear-gradient(180deg, hsla(227, 42%, 13%, 1), hsla(234, 27%, 31%, 1));
}

.header-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5vw;
  font-size: 2.5rem;
  margin-top: 0px;
  z-index: 5;
}

.header-title {
  width: 70vw;
  line-height: 1.3;
  font-size: 4rem;
  padding-left: 4px;
  padding-right: 4px;
}

.header-body {
  min-width: 45vw;
  width: 85vw;
}

.button-container {
  margin-top: 0.5vw;
}

.mlh-display {
  display: block;
  max-width: 100px;
  min-width: 60px;
  position: fixed;
  right: 50px;
  top: 0;
  width: 10%;
  z-index: 10000000;
}

.graphics {
  display: flex;
  justify-content: center;
}

.trees {
  position: absolute;
  width: 100vw;
  bottom: -5vw;
  left: 0vw;
  z-index: 1;

  @media (max-width: 768) {
    display: none;
  }
}

.trees-small {
  position: absolute;
  width: 100vw;
  bottom: -5vw;
  left: 0vw;
  z-index: 1;
  display: none;
}

.campfire {
  position: absolute;
  bottom: -13vw;
  z-index: 1;
  width: 30vw;
}

.socials {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 75vw;
}

/* mobile view - header size */
@media (max-width: 768px) {
  .header-container {
    gap: 5vw;
  }

  .header-content {
    gap: 3vw;
    top: 15vw;
    right: 22vw;
    font-size: 2.8rem;
    padding-left: 2vw;
    padding-right: 2vw;
    gap: 10vw;
  }

  .header-title {
    width: auto;
    /* one line */
    line-height: 1.2;
  }

  .header-body {
    width: 85vw;
    line-height: 1.3;
    z-index: 5;
    white-space: normal;
  }
}

@media (max-width: 978px) {
  .trees {
    display: none;
  }

  .trees-small {
    display: block;
  }
}
</style>