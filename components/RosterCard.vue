<template>
<div class="cards-container">
    <div class="profile-card">
    <!-- Profile Image + LinkedIn Badge -->
    <div class="profile-header">
        <div class="profile-image">
        <!-- If a photo URL is provided, show the photo -->
        <img v-if="photo" :src="photo" alt="Profile Photo" class="profile-photo" />
        <!-- Otherwise, show a default colored circle -->
        <div v-else class="default-photo"></div>
        <!-- LinkedIn Badge -->
        <a v-if="url" :href="url" target="_blank" rel="noopener noreferrer" class="linkedin-badge">
            <img src="assets/img/icons/linkedin.webp" alt="LinkedIn" />
        </a>
        <div v-else class="linkedin-badge">
            <img src="assets/img/icons/linkedin.webp" alt="LinkedIn" />
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
    },
    url: {
    type: String,
    default: ''
    },
    photo: {
    type: String,
    default: ''
    }
}
};
</script>

<style scoped>
/* Import the Aleo font */
@import url('https://fonts.googleapis.com/css2?family=Aleo&display=swap');

/* Container to center the card and add horizontal padding */
.cards-container {
    display: flex;
    justify-content: center;
}

/* Profile Card */
.profile-card {
    color: rgb(255, 255, 255);
    padding: 10px;
    border-radius: 10px;
    text-align: center;
    width: 140px;
}

/* Profile Image Container */
.profile-image {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    margin: 0 auto 10px;
    position: relative; /* Needed for absolute positioning of the badge */
}

/* Default Photo (fallback) */
.default-photo {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: #ffffff;
}

/* Profile Photo */
.profile-photo {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
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
