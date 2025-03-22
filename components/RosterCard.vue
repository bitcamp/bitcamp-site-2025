<template>
  <div class="profile-card">
    <div class="profile-header">
      <div class="profile-image">
        <img v-if="imageSrc" :src="imageSrc" alt="Profile Image" class="profile-pic" loading="lazy" />
        <img v-else src="" alt="Default Profile" class="profile-pic default-profile" loading="lazy" />

        <a v-if="linkedinUrl" :href="linkedinUrl" target="_blank" rel="noopener noreferrer" class="linkedin-badge">
          <img src="assets/img/icons/linkedin.webp" alt="LinkedIn" loading="lazy" />
        </a>
        <div v-else class="linkedin-badge">
          <img src="assets/img/icons/linkedin.webp" alt="LinkedIn" loading="lazy" />
        </div>
      </div>
    </div>

    <h2 class="name">{{ name }}</h2>

    <p class="position">{{ position }}</p>

    <p class="pronouns"><i>{{ pronouns }}</i></p>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: 'John Doe'
    },
    position: {
      type: String,
      default: 'Position'
    },
    pronouns: {
      type: String,
      default: 'he/him'
    },
    imageSrc: {
      type: String,
      default: '' // Profile image URL
    },
    linkedinUrl: {
      type: String,
      default: '' // LinkedIn profile URL
    }
  }
};
</script>

<style scoped>
/* Import the Aleo font */
@import url('https://fonts.googleapis.com/css2?family=Aleo&display=swap');

/* Profile Card */
.profile-card {
  color: white;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  width: 220px;
  opacity: 100%;
}

/* Profile Image */
.profile-image {
  width: 80px;
  height: 80px;
  background-color: #b0c4de;
  border-radius: 50%;
  margin: 0 auto 10px;
  position: relative;
  opacity: 100%;
  /* Needed for absolute positioning of the badge */
}

.profile-pic {
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 100%;
  /* Maintain aspect ratio and cover the area */
  border-radius: 50%;
}

/* LinkedIn Badge (overlapping top-left of profile image) */
.linkedin-badge {
  position: absolute;
  top: -8px;
  left: -8px;
  width: 30px;
  height: 30px;
  background: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.linkedin-badge img {
  width: 35px;
  height: 35px;
  border-radius: 50%;
  object-fit: contain;
  padding: 2px;
}

.name {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
}

.position {
  font-size: 14px;
  margin-bottom: 0;
}

.pronouns {
  font-size: 12px;
  font-style: italic;
  margin-top: 0;
}
</style>