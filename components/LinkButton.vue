<template>
  <a class="button" :href="link">
    <h3 class="button-text">{{ text }}</h3>
  </a>
</template>

<script lang="ts">
export default {
  name: 'LinkButton',
  props: {
    text: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.button {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1vw;
  border-radius: 1rem;
  background-color: var(--color-bitcamp);
  transition: 0.4s;
  width: 25%;
  margin: 0 auto;
  margin-top: 1vw;
  margin-bottom: 1vw;
}

.button:hover {
  background-color: hsla(227, 42%, 13%, 1);
  transition: 0.4s;
}

.button-text {
  font-size: 2.5rem;
}

/* mobile view */
@media (max-width: 768px) {
  .button {
    margin-top: 17px;
    padding: 2vw;
    width: 45%;

  }

  .button-text {
    font-size: 3rem;
  }
}
</style>
