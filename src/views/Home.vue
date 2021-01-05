<template>
  <div class="home-view-wrapper">
    <ImageModal
      v-if="showModal"
      @closeModal="closeModal"
      :showModal="showModal"
      :image="modalImage"
    />
    <div class="title">
      <em>{{ english ? 'Latest project:' : 'Senaste projekt:' }}</em>
    </div>
    <h2>Brewdog Punk Wiki</h2>
    <p class="project-description">
      Skolprojekt i Native JS-kursen på ITHS, byggt med hjälp av bryggeriet
      Brewdogs eget
      <a class="api-link" href="https://punkapi.com/" target="_blank"
        >Punk API</a
      >. Jag provade att göra om projektet i Vue. OBS! Ej mobilanpassad ännu.
    </p>
    <div class="links">
      <a
        href="https://github.com/PelleLindroth/brewdog-punk-wiki"
        class="link"
        target="_blank"
      >
        <img src="../assets/github-icon.svg" alt="Github Icon" />
        <p>Se kod på GitHub</p>
      </a>
      <a
        href="https://pellelindroth.github.io/brewdog-punk-wiki/"
        class="link"
        target="_blank"
      >
        <img src="../assets/web-icon.svg" alt="Web Icon" />
        <p>Se sidan live</p>
      </a>
    </div>
    <div class="main">
      <img
        class="main"
        @click="openModal"
        src="../assets/beerwiki-screenshot-1.png"
        alt="beerwiki-screenshot-1.png"
      />
    </div>
    <div class="thumbnails">
      <div>
        <img
          @click="openModal"
          class="small1"
          src="../assets/beerwiki-screenshot-2.png"
          alt="beerwiki-screenshot-2.png"
        />
      </div>
      <div>
        <img
          class="small2"
          @click="openModal"
          src="../assets/beerwiki-screenshot-3.png"
          alt="beerwiki-screenshot-3.png"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ImageModal from '../components/ImageModal'

export default {
  created() {
    document.title = 'Pelle Lindroth | Portfolio'
  },
  name: 'Home',
  components: {
    ImageModal,
  },
  computed: {
    english() {
      return this.$root.english
    },
  },
  data() {
    return {
      modalImage: null,
      showModal: false,
    }
  },
  methods: {
    closeModal() {
      this.showModal = false
      document.body.style.overflow = 'scroll'
    },
    openModal(e) {
      this.modalImage = e.target.getAttribute('alt')
      this.showModal = true
      document.body.style.overflow = 'hidden'
    },
  },
}
</script>

<style lang="scss" scoped>
$mobile-cutoff: 750px;

.home-view-wrapper {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(auto-fill, 64px);
  margin: 4rem auto 0;
  max-width: 120rem;
  min-height: 100vh;

  @media screen and (max-width: $mobile-cutoff) {
    gap: 1rem;
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: repeat(auto-fill, 1.6rem);
    margin: auto;
    padding: 0 1rem;
    width: 100vw;
    min-height: 100vh;
  }

  .image-modal {
    align-items: center;
    background-color: rgba(20, 20, 20, 0.7);
    height: 100vh;
    display: flex;
    width: 100vw;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;

    @media screen and (max-width: $mobile-cutoff) {
      background-color: rgba(20, 20, 20, 0.9);
    }

    .close-icon {
      cursor: pointer;
      position: fixed;
      right: 3rem;
      top: 3rem;
      width: 7rem;

      @media screen and (max-width: $mobile-cutoff) {
        width: 5rem;
      }
    }

    img {
      margin: auto;
      width: 80%;

      @media screen and (max-width: $mobile-cutoff) {
        width: 100%;
      }
    }
  }

  .title {
    display: flex;
    font-size: 2.4rem;
    font-weight: 300;
    grid-column: 1 / span 2;
    grid-row: 1;

    @media screen and (max-width: $mobile-cutoff) {
      grid-column: 1 / span 3;
      grid-row: 2;
      font-size: 1.4rem;
    }
  }

  h2 {
    color: #3298af;
    font-family: 'Righteous', cursive;
    grid-column: 1 / span 3;
    grid-row: 2;
    font-size: 4.8rem;

    @media screen and (max-width: $mobile-cutoff) {
      font-size: 2.6rem;
      grid-column: 1 / span 4;
      grid-row: 3 / span 2;
      letter-spacing: -0.5px;
    }
  }

  .project-description {
    font-size: 1.8rem;
    font-weight: 300;
    grid-column: 1 / span 3;
    grid-row: 4 / span 2;

    @media screen and (max-width: $mobile-cutoff) {
      font-size: 1rem;
      grid-column: 5 / span 4;
      grid-row: 3 / span 3;
    }

    a {
      color: #ececec;
      text-decoration: none;
    }
  }

  .links {
    grid-column: 1 / span 3;
    grid-row: 6;

    @media screen and (max-width: $mobile-cutoff) {
      grid-column: 1 / span 4;
      grid-row: 16 / span 2;
    }

    .link {
      align-items: center;
      display: flex;

      margin-top: 5px;
      text-decoration: none;

      img {
        margin-right: 1rem;
        width: 2rem;

        @media screen and (max-width: $mobile-cutoff) {
          width: 1.2rem;
        }
      }
      p {
        color: #ececec;
        font-size: 1.4rem;
        font-weight: 500;

        @media screen and (max-width: $mobile-cutoff) {
          font-size: 1rem;
        }
      }
    }
  }

  .main {
    grid-column: 4 / span 6;
    grid-row: 2 / span 4;
    overflow: hidden;

    @media screen and (max-width: $mobile-cutoff) {
      grid-column: 1 / span 8;
      grid-row: 6 / span 7;
      object-fit: contain;
    }

    img {
      cursor: pointer;
      max-width: 100%;
    }
  }

  .thumbnails {
    cursor: pointer;
    display: flex;
    grid-column: 4 / span 4;
    grid-row: 6;
    justify-content: flex-start;

    @media screen and (max-width: $mobile-cutoff) {
      grid-column: 1 / span 8;
      grid-row: 13 / span 3;
    }

    .small1 {
      margin-right: 1.5rem;
      max-width: 12rem;
      object-fit: contain;
    }

    .small2 {
      margin: 0;
      max-width: 12rem;
      object-fit: contain;
    }
  }

  .main.div,
  .thumbnails.div {
    border: 2px solid #ececec;
  }
}
</style>
