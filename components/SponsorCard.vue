<template>
    <a :class="{ 'logo-sponsor-big': isBig, 'logo-sponsor': !isBig }" :href="url">
      <img :src="`sponsor-logos/${name}.png`" :alt="name" />
    </a>
  </template>
  
  <script setup lang="ts">
  defineProps<{ 
    name: string;
    url?: string;
    isBig: boolean;
  }>();
  </script>
  
  <style scoped lang="scss">
//   .logo-sponsor {
//     width: auto;
//     text-align: center;
//     grid-column: span 2;
//   }
  
  .logo-sponsor img {
    width: 100%;
    max-width: 30rem;
    height: 10rem;
    object-fit: contain;
    transition: transform 300ms ease-in-out;
    display: block;
    padding-right: 5rem;
    margin: 0 auto;
  }
  
  .logo-sponsor:hover img {
    transform: scale(1.1);
    backface-visibility: hidden;
  }
  
  @media only screen and (max-width: 500px) {
    .logo-sponsor img {
      height: 7.5rem;
    }
  
    .logo-sponsor-big img {
      height: 10rem;
    }
  }
  
  @media only screen and (max-width: 400px) {
    .logo-sponsor img {
      height: 5rem;
    }
  
    .logo-sponsor-big img {
      height: 7.5rem;
    }
  }
  </style>