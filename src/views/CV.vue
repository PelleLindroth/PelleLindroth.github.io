<template>
  <div class="cv-view-wrapper">
    <div class="presentation-container">
      <div class="presentation">
        <p>
          <img :src="getProfilePic" alt="Profile picture" />
          {{ $t('cv.intro-one') }}
        </p>
        <p v-html="$t('cv.intro-two')"></p>
        <p>
          {{ $t('cv.intro-three')
          }}<span @click="$router.push('/contact')">{{
            $root.$i18n.locale === 'sv' ? 'hör gärna av dig!' : 'get in touch!'
          }}</span>
        </p>

        <img
          class="arrow"
          src="@/assets/icons/arrow-down.svg"
          alt="Arrow down"
        />
      </div>
    </div>
    <div class="cv-container">
      <section class="skills">
        <h3>
          <em>{{ $t('cv.skills.skill-header') }}</em>
        </h3>
        <div class="skills-content-boxes">
          <div class="skills-content">
            <p>{{ $t('cv.skills.skill-one') }}</p>

            <ul>
              <li>
                <div class="icon-container">
                  <img
                    src="../assets/tech-logos/javascript-logo.svg"
                    alt="Javascript Logo"
                  />
                </div>
                Javascript (ES6)
              </li>
              <li>
                <div class="icon-container">
                  <img
                    src="../assets/tech-logos/java-logo.svg"
                    alt="Java Logo"
                  />
                </div>
                Java
              </li>

              <li>
                <div class="icon-container">
                  <img
                    src="../assets/tech-logos/html-5-logo.svg"
                    alt="HTML 5 Logo"
                  />
                </div>
                HTML 5
              </li>
              <li>
                <div class="icon-container">
                  <img
                    src="../assets/tech-logos/css-3-logo.svg"
                    alt="CSS 3 Logo"
                  />
                </div>
                CSS 3
              </li>
            </ul>
            <p>{{ $t('cv.skills.skill-two') }}</p>

            <ul>
              <li>
                <div class="icon-container">
                  <img
                    src="../assets/tech-logos/react-logo.svg"
                    alt="React Logo"
                  />
                </div>
                React
              </li>
              <li>
                <div class="icon-container">
                  <img
                    src="../assets/tech-logos/redux-logo.svg"
                    alt="Redux Logo"
                  />
                </div>
                Redux
              </li>
              <li>
                <div class="icon-container">
                  <img src="../assets/tech-logos/vue-logo.svg" alt="Vue Logo" />
                </div>
                Vue
              </li>
              <li>
                <div class="icon-container">
                  <img
                    src="../assets/tech-logos/sass-logo.svg"
                    alt="Sass Logo"
                  />
                </div>
                SASS
              </li>
            </ul>
            <p>{{ $t('cv.skills.skill-three') }}</p>

            <ul>
              <li>
                <div class="icon-container">
                  <img
                    src="../assets/tech-logos/nodejs-logo.svg"
                    alt="Node.js Logo"
                  />
                </div>
                Node.js (Express)
              </li>
            </ul>
          </div>
          <div class="skills-content">
            <p>{{ $t('cv.skills.skill-four') }}</p>

            <ul>
              <li>
                <div class="icon-container">
                  <img
                    src="../assets/tech-logos/mongodb-logo.png"
                    alt="MongoDB Logo"
                  />
                </div>
                MongoDB
              </li>
              <li>
                <div class="icon-container">
                  <img
                    src="../assets/tech-logos/firebase-logo.svg"
                    alt="Firebase Logo"
                  />
                </div>
                Google Firebase
              </li>
            </ul>
            <p>{{ $t('cv.skills.skill-five') }}</p>

            <ul>
              <li>
                <div class="icon-container">
                  <img
                    src="../assets/tech-logos/vscode-logo.svg"
                    alt="VS Code Logo"
                  />
                </div>
                VS Code
              </li>
              <li>
                <div class="icon-container">
                  <img
                    src="../assets/tech-logos/intellij-idea-logo.svg"
                    alt="IntelliJ IDEA Logo"
                  />
                </div>
                IntelliJ IDEA
              </li>
              <li>
                <div class="icon-container">
                  <img
                    src="../assets/tech-logos/netbeans-logo.svg"
                    alt="Netbeans Logo"
                  />
                </div>
                Netbeans
              </li>
              <li>
                <div class="icon-container">
                  <img
                    src="../assets/tech-logos/postman-icon.svg"
                    alt="Postman Logo"
                  />
                </div>
                Postman
              </li>
              <li>
                <div class="icon-container">
                  <img
                    src="../assets/tech-logos/figma-logo.svg"
                    alt="Figma Logo"
                  />
                </div>
                Figma
              </li>
              <li>
                <div class="icon-container">
                  <img
                    src="../assets/tech-logos/mongodb-logo.png"
                    alt="MongoDB Compass Logo"
                  />
                </div>
                MongoDB Compass
              </li>
            </ul>

            <p>{{ $t('cv.skills.skill-six') }}</p>

            <ul>
              <li>
                <div class="icon-container">
                  <img
                    src="../assets/tech-logos/jest-logo.svg"
                    alt="Jest Logo"
                  />
                </div>
                Jest
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section class="jobs">
        <h3>
          <em>{{ $t('cv.occupations.occ-header') }}</em>
        </h3>
        <div class="job-boxes">
          <div class="job-box">
            <h4>{{ $t('cv.occupations.occ-one') }}</h4>
            <hr />
            <p>
              <span>{{ $t('cv.where') }} </span
              >{{ $t('cv.occupations.occ-one-where') }}
            </p>
            <p>
              <span>{{ $t('cv.when') }} </span
              >{{ $t('cv.occupations.occ-one-when') }}
            </p>
            <hr class="invisible" />
            <p class="job-description">
              {{ $t('cv.occupations.occ-one-description') }}
            </p>
          </div>
          <div class="job-box">
            <h4>{{ $t('cv.occupations.occ-two') }}</h4>
            <hr />
            <p>
              <span>{{ $t('cv.where') }} </span
              >{{ $t('cv.occupations.occ-two-where') }}
            </p>
            <p>
              <span>{{ $t('cv.when') }} </span
              >{{ $t('cv.occupations.occ-two-when') }}
            </p>
            <hr class="invisible" />
            <p class="job-description">
              {{ $t('cv.occupations.occ-two-description') }}
            </p>
          </div>
          <div class="job-box">
            <h4>{{ $t('cv.occupations.occ-three') }}</h4>
            <hr />
            <p>
              <span>{{ $t('cv.where') }} </span
              >{{ $t('cv.occupations.occ-three-where') }}
            </p>
            <p>
              <span>{{ $t('cv.when') }} </span
              >{{ $t('cv.occupations.occ-three-when') }}
            </p>
            <hr class="invisible" />
            <p class="job-description">
              {{ $t('cv.occupations.occ-three-description') }}
            </p>
          </div>
          <div class="job-box">
            <h4>{{ $t('cv.occupations.occ-four') }}</h4>
            <hr />
            <p>
              <span>{{ $t('cv.where') }} </span
              >{{ $t('cv.occupations.occ-four-where') }}
            </p>
            <p>
              <span>{{ $t('cv.when') }} </span
              >{{ $t('cv.occupations.occ-four-when') }}
            </p>
            <hr class="invisible" />
            <p class="job-description">
              {{ $t('cv.occupations.occ-four-description') }}
            </p>
          </div>
        </div>
      </section>
      <section class="education">
        <h3>
          <em>{{ $t('cv.education.edu-header') }}</em>
        </h3>
        <div class="education-boxes">
          <div class="education-box">
            <h4>{{ $t('cv.education.edu-one') }}</h4>
            <hr />
            <p>
              <span>{{ $t('cv.where') }} </span
              >{{ $t('cv.education.edu-one-where') }}
            </p>
            <p>
              <span>{{ $t('cv.when') }} </span
              >{{ $t('cv.education.edu-one-when') }}
            </p>
          </div>
          <div class="education-box">
            <h4>{{ $t('cv.education.edu-two') }}</h4>
            <hr />
            <p>
              <span>{{ $t('cv.where') }} </span
              >{{ $t('cv.education.edu-two-where') }}
            </p>
            <p>
              <span>{{ $t('cv.when') }} </span
              >{{ $t('cv.education.edu-two-when') }}
            </p>
          </div>
          <div class="education-box">
            <h4>{{ $t('cv.education.edu-three') }}</h4>
            <hr />
            <p>
              <span>{{ $t('cv.where') }} </span
              >{{ $t('cv.education.edu-three-where') }}
            </p>
            <p>
              <span>{{ $t('cv.when') }} </span
              >{{ $t('cv.education.edu-three-when') }}
            </p>
          </div>
          <div class="education-box">
            <h4>{{ $t('cv.education.edu-four') }}</h4>
            <hr />
            <p>
              <span>{{ $t('cv.where') }} </span
              >{{ $t('cv.education.edu-four-where') }}
            </p>
            <p>
              <span>{{ $t('cv.when') }} </span
              >{{ $t('cv.education.edu-four-when') }}
            </p>
          </div>
          <div class="education-box">
            <h4>{{ $t('cv.education.edu-five') }}</h4>
            <hr />
            <p>
              <span>{{ $t('cv.where') }} </span
              >{{ $t('cv.education.edu-five-where') }}
            </p>
            <p>
              <span>{{ $t('cv.when') }} </span
              >{{ $t('cv.education.edu-five-when') }}
            </p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    document.title = this.title
  },
  computed: {
    getProfilePic() {
      return require('@/assets/profile-picture.png')
    },
    title() {
      return this.$root.$i18n.locale == 'sv'
        ? 'Pelle Lindroth | Om mig'
        : 'Pelle Lindroth | About me'
    },
  },
  updated() {
    document.title = this.title
  },
}
</script>

<style lang="scss" scoped>
$mobile-cutoff: 750px;

.cv-view-wrapper {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(44, 64px);
  margin: 4rem auto 0;
  max-width: 120rem;

  @media screen and (max-width: 1150px) and (min-width: 651px) {
    grid-template-rows: repeat(52, 64px);
  }

  @media screen and (max-width: $mobile-cutoff) {
    gap: 1rem;
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: repeat(120, 1.6rem);
    margin: auto;
    padding: 0 1rem;
    width: 100vw;
    min-height: 100vh;
  }

  .presentation-container {
    grid-column: 1 / span 7;
    grid-row: 1 / span 7;

    @media screen and (max-width: $mobile-cutoff) {
      grid-column: 1 / span 8;
      grid-row: 2 / span 16;
      margin-right: 2rem;
    }

    .presentation {
      font-size: 2.2rem;
      font-weight: 300;

      img {
        float: left;
        margin-right: 1.5rem;
        shape-outside: circle(50%);
        width: 14rem;

        @media screen and (max-width: $mobile-cutoff) {
          width: 6rem;
        }
      }

      @media screen and (max-width: $mobile-cutoff) {
        font-size: 1.5rem;
      }

      a {
        color: #ececec;
        cursor: pointer;
        font-weight: 400;
        text-decoration: none;
      }

      span {
        cursor: pointer;
        font-weight: 500;
      }

      .arrow {
        margin-top: 4rem;
        width: 10rem;

        @media screen and (max-width: $mobile-cutoff) {
          margin: 1.5rem 0 0 calc(50% - 2.5rem);
          width: 5rem;
        }
      }
    }
  }

  section {
    margin-bottom: 10rem;

    @media screen and (max-width: $mobile-cutoff) {
      margin-bottom: 6rem;
    }
  }

  .cv-container {
    display: flex;
    flex-direction: column;
    grid-column: 1 / span 12;
    grid-row: 10 / auto;

    @media screen and (max-width: $mobile-cutoff) {
      grid-column: 1 / span 8;
      grid-row: 21 / auto;
    }

    h3 {
      background-color: rgba(255, 2555, 255, 0.1);
      color: #fcd577;
      font-family: 'Kanit', sans-serif;
      font-size: 3.5rem;
      font-weight: 700;
      letter-spacing: 1.3px;
      margin-bottom: 4rem;
      padding-left: 1rem;
      text-shadow: 0 0 1rem #fcd577;

      @media screen and (max-width: $mobile-cutoff) {
        font-size: 2rem;
        letter-spacing: 0.2px;
        margin-bottom: 3rem;
      }
    }

    h4 {
      font-size: 2.8rem;
      margin-bottom: 0.5rem;
      text-shadow: 0px 0px 4px #fff;

      @media screen and (max-width: $mobile-cutoff) {
        font-size: 1.8rem;
      }
    }

    p {
      font-size: 2.4rem;
      font-weight: 300;

      @media screen and (max-width: $mobile-cutoff) {
        font-size: 1.5rem;
      }
    }

    hr {
      border: 1px solid #fff;
      margin-bottom: 1rem;
      margin-top: 0.5rem;

      &.invisible {
        border: 1px solid #333;
        margin-bottom: 0.5rem;
      }
    }

    span {
      font-weight: 700;
    }

    .skills-content-boxes {
      display: flex;

      @media screen and (max-width: $mobile-cutoff) {
        flex-direction: column;
      }

      .skills-content {
        margin-right: 5rem;
        min-width: 50rem;

        @media screen and (max-width: $mobile-cutoff) {
          margin-right: 0;
          max-width: 80%;
          min-width: 0;
        }

        p {
          font-size: 2.6rem;
          font-weight: 700;
          margin-bottom: 1rem;
          text-shadow: 0px 0px 3px #fff;

          @media screen and (max-width: $mobile-cutoff) {
            font-size: 1.6rem;
            font-weight: 500;
          }
        }

        ul {
          list-style: none;
          margin-bottom: 3rem;
        }

        li {
          align-items: center;
          display: flex;
          font-size: 2.4rem;
          font-weight: 300;
          line-height: 1.2;
          margin-bottom: 0.5rem;
          padding-left: 1rem;

          @media screen and (max-width: $mobile-cutoff) {
            font-size: 1.4rem;
            margin-bottom: 0.5rem;
          }

          .icon-container {
            display: flex;
            justify-content: flex-start;
            min-width: 4.5rem;

            @media screen and (max-width: $mobile-cutoff) {
              min-width: 3rem;
            }

            img {
              height: 2.4rem;

              @media screen and (max-width: $mobile-cutoff) {
                height: 1.6rem;
              }
            }
          }
        }
      }
    }
  }

  .jobs {
    .job-boxes {
      display: flex;
      flex-wrap: wrap;

      .job-box {
        font-size: 2.4rem;
        font-weight: 300;
        margin-bottom: 5rem;
        margin-right: 5rem;
        max-width: 50rem;

        @media screen and (max-width: $mobile-cutoff) {
          font-size: 1.5rem;
          max-width: 100%;
        }
      }
    }
  }

  .education {
    padding-bottom: 30rem;

    @media screen and (max-width: $mobile-cutoff) {
      padding-bottom: 10rem;
    }

    .education-boxes {
      display: flex;
      flex-wrap: wrap;

      .education-box {
        margin-bottom: 5rem;
        margin-right: 5rem;
        min-width: 50rem;

        @media screen and (max-width: $mobile-cutoff) {
          margin-bottom: 3rem;
          min-width: 0;
          max-width: 100%;
        }
      }
    }
  }
}
</style>
