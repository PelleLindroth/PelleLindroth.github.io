<template>
  <div id="app">
    <header>
      <router-link to="/">
        <img src="./assets/portfolio-logo.svg" alt="Portfolio logo"
      /></router-link>
      <nav>
        <router-link to="/projects">{{
          english ? 'Projects' : 'Projekt'
        }}</router-link>
        <router-link to="/cv">CV</router-link>
        <router-link to="/contact">{{
          english ? 'Contact' : 'Kontakt'
        }}</router-link>
      </nav>
      <!-- <div v-if="english" class="flag-container" title="Language">
        <div
          class="flag"
          :class="{ uk: english }"
          @click="this.$root.toggleLanguage"
        />
      </div> -->
    </header>
    <router-view />
    <footer>
      <p>© Pelle Lindroth 2021</p>
    </footer>
  </div>
</template>

<script>
export default {
  // computed: {
  //   english() {
  //     return this.$root.english
  //   },
  // },
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Righteous&family=Roboto:ital,wght@0,300;0,400;0,700;0,900;1,300&display=swap');
$mobile-cutoff: 650px;

:root {
  font-size: 10px;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  background-color: #333;
  height: 100vh;
}

#app {
  color: #ececec;
  cursor: default;
  font-family: 'Roboto', sans-serif;
  padding: 0 2rem;

  @media screen and (max-width: $mobile-cutoff) {
    padding: 0;
  }

  header {
    align-items: center;
    border-bottom: 1px solid #ececec;
    display: flex;
    height: 7.7rem;
    justify-content: space-between;
    margin: 4rem auto 0;
    max-width: 120rem;
    padding: 0 0 3rem;

    @media screen and (max-width: $mobile-cutoff) {
      border-bottom: 1px solid #ececec;
      height: 6rem;
      margin: 0 auto;
      width: 100%;
      padding: 0 1rem;

      img {
        width: 14rem;
      }
    }

    nav {
      align-items: center;
      display: flex;
      justify-content: space-between;
      margin-left: 30rem;
      width: 32rem;

      @media screen and (max-width: $mobile-cutoff) {
        margin-left: 0;
        max-width: 16.3rem;
      }

      a {
        color: #ececec;
        font-size: 1.8rem;
        font-weight: 700;
        text-align: center;
        text-decoration: none;
        min-width: 11.5rem;

        @media screen and (max-width: $mobile-cutoff) {
          font-size: 1.3rem;

          min-width: 5rem;
        }
      }

      .router-link-active {
        color: #fcd577;
        font-size: 2rem;

        @media screen and (max-width: $mobile-cutoff) {
          font-size: 1.3rem;
        }
      }
    }

    .flag-container {
      cursor: pointer;
      display: grid;
      place-items: center;
      width: 11.5rem;

      .flag {
        background-image: url('./assets/swedish-flag.svg');
        background-position: -0.5rem 0;
        background-repeat: no-repeat;
        background-size: cover;
        border: 1px solid #ececec;
        border-radius: 50%;
        height: 2.7rem;
        width: 2.7rem;
      }

      .uk {
        background-image: url('./assets/swedish-flag.svg');
        background-position: -1.3rem 0;
      }
    }
  }

  footer {
    background-color: #555555;
    display: grid;
    height: 8rem;
    margin-left: -2rem;
    place-items: center;
    width: 100vw;

    @media screen and (max-width: $mobile-cutoff) {
      height: 6rem;
      margin-left: 0;
    }

    p {
      color: #fcd577;
      font-size: 1.5rem;
      font-weight: 500;

      @media screen and (max-width: $mobile-cutoff) {
        font-size: 1.2rem;
        font-weight: 300;
      }
    }
  }
}
</style>
