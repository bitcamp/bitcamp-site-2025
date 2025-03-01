<template>
  <div class="profile-card">
  <!-- Profile Image + LinkedIn Badge -->
  <div class="profile-header">
      <div class="profile-image">
      <div class="linkedin-badge">
          <img 
          src="assets/img/icons/linkedin.webp" 
          alt="LinkedIn" 
          />
      </div>
      </div>
  </div>

  <!-- Name -->
  <h2 class="name">{{ name }}</h2>

  <!-- Position -->
  <p class="position">{{ position }}</p>

  <!-- Pronouns -->
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
    default: 'Software Engineer'
  },
  pronouns: {
    type: String,
    default: 'he/him'
  }
}
};
</script>

<style scoped>
  /* Import the Aleo font */
  @import url('https://fonts.googleapis.com/css2?family=Aleo&display=swap');

  /* Container (without background) */
  .roster-container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    font-family: 'Aleo', sans-serif;
  }
  
  /* Profile Card */
  .profile-card {
    color: white;
    padding: 20px;
    border-radius: 10px;
    text-align: center;
    width: 220px;
  }
  
  /* Profile Image */
  .profile-image {
    width: 80px;
    height: 80px;
    background-color: #b0c4de;
    border-radius: 50%;
    margin: 0 auto 10px;
    position: relative; /* Needed for absolute positioning of the badge */
  }
  
  /* LinkedIn Badge (overlapping top-left of profile image) */
  .linkedin-badge {
    position: absolute;
    top: -8px;      /* Adjust to control vertical overlap */
    left: -8px;     /* Adjust to control horizontal overlap */
    width: 30px;    /* Increased badge size */
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
    width: 35px;    /* Increase the logo size */
    height: 35px;
    border-radius: 50%;
    object-fit: contain;
    padding: 2px;   /* Adjust for spacing between the logo and the badge border */
  }
  
  /* Text Styles */
  .name {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px; /* Keeps the spacing below the name */
  }
  
  .position {
    font-size: 14px;
    margin-bottom: 0; /* Removes extra spacing after the position */
  }
  
  .pronouns {
    font-size: 12px;
    font-style: italic;
    margin-top: 0; /* Removes extra spacing above the pronouns */
  }
</style>
