<template>
  <div class="projects-view-wrapper">
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
      :color="project.color"
      :column="project.column"
      :row="project.row"
      :projectTitle="project.title"
      :projectDescription="project.description"
    />
    <div
      class="image-container"
      v-for="project of this.projects"
      :key="'image ' + project.id"
      :style="{
        gridRow: `${project.row[0]} / span ${project.row[1]}`,
      }"
    ></div>
  </div>
</template>

<script>
import ProjectDescription from '../components/ProjectDescription'
import projects from '../assets/projects'

export default {
  components: {
    ProjectDescription,
  },
  data() {
    return {
      projects,
    }
  },
  created() {
    document.title = 'Pelle Lindroth | Projekt'
  },
}
</script>

<style lang="scss" scoped>
$mobile-cutoff: 650px;

.projects-view-wrapper {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(20, 64px);
  margin: 4rem auto 0;
  max-width: 120rem;

  @media screen and (max-width: $mobile-cutoff) {
    gap: 1rem;
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: repeat(auto-fill, 1.6rem);
    margin: auto;
    padding: 0 1rem;
    width: 100vw;
    min-height: 100vh;
  }

  .page-description {
    color: white;
    font-size: 2.4rem;
    font-weight: 300;
    grid-column: 1 / span 6;
    grid-row: 1 / span 2;

    @media screen and (max-width: $mobile-cutoff) {
      font-size: 1.4rem;
      grid-column: 1 / span 8;
      grid-row: 2 / span 3;
    }
  }

  .image-container {
    border: 1px solid white;
    grid-column: 4 / span 6;
  }
}
</style>
