<template>
  <div>
    <div
      class="projects-view-wrapper"
      :style="{ gridTemplateRows: calculateRows }"
    >
      <ImageModal
        v-if="showModal"
        @closeModal="closeModal"
        :showModal="showModal"
        :image="modalImage"
      />
      <div class="page-description">
        <em
          >Projekt i urval. Skoluppgifter och grejer jag pysslat med innan
          utbildningen och vid sidan av. Teknikerna växlar mellan React, Vue och
          Native Javascript (ES6).</em
        >
      </div>
      <ProjectDescription
        v-for="project of this.projects"
        :key="project.id"
        :project="project"
      />
      <ProjectImageContainer
        v-for="project of this.projects"
        :key="'image ' + project.id"
        :project="project"
        @openModal="openModal"
      />
    </div>
  </div>
</template>

<script>
import ProjectDescription from '../components/ProjectDescription'
import ProjectImageContainer from '../components/ProjectImageContainer'
import ImageModal from '../components/ImageModal'
import projects from '../data/projects'

export default {
  components: {
    ImageModal,
    ProjectDescription,
    ProjectImageContainer,
  },
  computed: {
    calculateRows() {
      let multiplier = this.$root.isMobile ? 5 : 6
      return `repeat(${this.projects.length * multiplier}, 64px)`
    },
  },
  created() {
    document.title = 'Pelle Lindroth | Projekt'
  },
  data() {
    return {
      modalImage: null,
      projects,
      showModal: false,
    }
  },
  methods: {
    closeModal() {
      this.showModal = false
      document.body.style.overflow = 'scroll'
    },
    openModal(e) {
      this.modalImage = e
      this.showModal = true
      document.body.style.overflow = 'hidden'
    },
  },
}
</script>

<style lang="scss" scoped>
$mobile-cutoff: 750px;

.projects-view-wrapper {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(12, 1fr);
  margin: 4rem auto 0;
  max-width: 120rem;

  @media screen and (max-width: $mobile-cutoff) {
    gap: 1rem;
    grid-template-columns: repeat(8, 1fr);
    margin: auto;
    padding: 0 1rem;
    width: 100vw;
    min-height: 100vh;
  }

  .page-description {
    color: white;
    font-size: 2rem;
    font-weight: 300;
    grid-column: 1 / span 6;
    grid-row: 1 / span 2;

    @media screen and (max-width: $mobile-cutoff) {
      font-size: 1.4rem;
      grid-column: 1 / span 8;
      grid-row: 1 / span 3;
      margin-top: 3rem;
    }
  }
}
</style>
