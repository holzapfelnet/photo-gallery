<template>
  <div class="photo-gallery">
    <div
      v-for="(photo, index) in photos"
      :key="index"
      class="photo-container"
      :class="{ landscape: isLandscape(photo), portrait: isPortrait(photo) }"
      @click="showOverlay(photo)"
    >
      <img v-lazy="photo.src" :alt="photo.alt" />
    </div>
     <!-- Vollbild-Overlay -->
     <div v-if="selectedPhoto" class="overlay" @click="closeOverlay">
      <img :src="selectedPhoto.fullSrc" :alt="selectedPhoto.alt" class="overlay-image" />
    </div>
  </div>
</template>

<script>
export default {


  name: "PhotoGallery",
  data() {

  
    return {
      selectedPhoto: null,
      photos: []
    };
  },
  methods: {
    isLandscape(photo) {
      return photo.width > photo.height;
    },
    isPortrait(photo) {
      return photo.height > photo.width;
    },
    showOverlay(photo) {
      this.selectedPhoto = photo;
    },
    closeOverlay() {
      this.selectedPhoto = null;
    },
    handleEscape(event) {
      if (event.key === "Escape") {
        this.closeOverlay();
      }
    }
  },
  mounted() {
    window.addEventListener("keydown", this.handleEscape);
    const jsonUrl = process.env.VUE_APP_JSON_URL;
   
    fetch(jsonUrl)
      .then(response => response.json())
      .then(data => {
        this.photos = data;
      });
  },
  beforeUnmount() {
    window.removeEventListener("keydown", this.handleEscape);
  },
};

</script>

<style scoped>
.photo-gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-auto-rows: 300px;
  gap: 10px;
}

.photo-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: flex;
}

.landscape {
  grid-column: span 2;
}

.portrait {
  grid-column: span 1;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.overlay-image {
  max-width: 90%;
  max-height: 90%;
}

.overlay-image:hover {
  cursor: zoom-out;
}
</style>
