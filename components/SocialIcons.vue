<template>
  <div class="social-icon-container">
    <a href="https://www.instagram.com/bitcamp">
      <img src="/assets/img/icons/instagram.svg" class="social-icon" />
    </a>
    <a href="https://www.facebook.com/bitcmp">
      <img src="/assets/img/icons/facebook.svg" class="social-icon" />
    </a>
    <a href="https://twitter.com/bitcmp">
      <img src="/assets/img/icons/twitter.svg" class="social-icon" />
    </a>
    <a href="https://www.tiktok.com/@bitcamp_umd">
      <img src="/assets/img/icons/tiktok.svg" class="social-icon tiktok-icon" />
    </a>
  </div>
</template>

<script lang="ts">
export default {
  name: 'SocialIcons',
};
</script>

<style>

.social-icon-container {
  display: flex;
  z-index: 10;
}

.social-icon {
  width: 3vw;
  display: inline-block;
  padding: 0.75vw;
  transition: transform 0.3s;
}

.social-icon:hover {
  transform: scale(1.4);
}

.tiktok-icon {
  margin-left: -0.25vw;
  margin-right: -0.5vw;
}

/* mobile view - icon size */
@media (max-width: 768px) {
  .social-icon {
    width: 8vw;
    padding: 1vw;
  }
}
</style>
