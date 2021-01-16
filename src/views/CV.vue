<template>
  <div class="cv-view-wrapper">
    <div class="presentation-container">
      <div class="presentation">
        <p>
          <img src="@/assets/profile-picture.png" alt="Profile picture" />
          Jag går för närvarande första året på den 2-åriga
          Javascriptutbildningen på IT-Högskolan i Stockholm. Utbildningen
          innefattar förutom frontend- och backendutveckling i Javascript även
          grafisk design och UX, crossplatform-utveckling, agila arbetsmetoder
          och mycket annat.<br /><br />I min framtida yrkesroll hoppas jag få
          tillfälle att arbeta både med frontend- och backend, kanske helst med
          lutning åt det senare. Jag trivs bra när jag får bygga nya saker och
          lösa problem och eftersom jag ägnat en stor del av livet åt musik har
          jag lätt att se likheter mellan programmering och musikskapande. Den
          kick jag brukade få från att skapa musik och text får jag numera
          mestadels genom att koda... <br /><br />Jag söker nu LIA-praktik för
          hösten 2021. Om du tror att jag skulle passa in på ditt företag,
          <router-link to="/contact">hör gärna av dig</router-link>!
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
        <h3><em>KOMPETENS</em></h3>
        <div class="skills-content-boxes">
          <div class="skills-content">
            <p>Språk</p>

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
            <p>Bibliotek och ramverk</p>

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
            <p>Backend</p>

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
            <p>Databashantering & autentisering</p>

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
            <p>Mjukvara</p>

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

            <p>Testning</p>

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
        <h3><em>TIDIGARE JOBB (I URVAL)</em></h3>
        <div class="job-boxes">
          <div class="job-box">
            <h4>Copywriter / SEO writer</h4>
            <hr />
            <p><span>Var: </span>Defiso Media</p>
            <p><span>När: </span>2018-2020</p>
            <hr class="invisible" />
            <p class="job-description">
              Skrev content till kunders landningssidor och till deras egna
              hemsidor. I jobbet ingick mycket research, viss kundkontakt,
              design och publicering via CMS samt såklart en hel del skrivande.
            </p>
          </div>
          <div class="job-box">
            <h4>Kompositörsuppdrag</h4>
            <hr />
            <p><span>Var: </span>Uppsala Stadsteater</p>
            <p><span>När: </span>2018</p>
            <hr class="invisible" />
            <p class="job-description">
              Skrev musik och texter till föreställningen Uppgång & Fall på
              Uppsala Stadsteater. Jobbet innefattade även inspelning av musiken
              och sångrep med skådespelarna.
            </p>
          </div>
          <div class="job-box">
            <h4>Aktivitetscoach / vårdare</h4>
            <hr />
            <p><span>Var: </span>Stockholms kommun / Frösunda LSS</p>
            <p><span>När: </span>Periodvis 2001 - 2017</p>
            <hr class="invisible" />
            <p class="job-description">
              Har haft flera olika arbeten inom LSS, både på gruppboenden och i
              daglig verksamhet. Förutom rena omsorgstjänster har jobbet
              innefattat fysiskt rehab- och terapiarbete, arbete med alternativa
              kommunikationsformer och handledning i exempelvis musik och
              teater.
            </p>
          </div>
          <div class="job-box">
            <h4>Musiker</h4>
            <hr />
            <p><span>Var: </span>Frilans</p>
            <p><span>När: </span>1992-</p>
            <hr class="invisible" />
            <p class="job-description">
              Skrivit, spelat in och släppt musik och turnerat med en rad
              grupper som Moder Jords Massiva, Hynek, The Chrysler, Liljor och
              med soloprojektet Parken.
            </p>
          </div>
        </div>
      </section>
      <section class="education">
        <h3><em>UTBILDNINGAR</em></h3>
        <div class="education-boxes">
          <div class="education-box">
            <h4>Javascriptutveckling</h4>
            <hr />
            <p><span>Var: </span>IT-Högskolan i Stockholm</p>
            <p><span>När: </span>Aug 2020 - Jun 2022</p>
          </div>
          <div class="education-box">
            <h4>OOP with Java 1 & 2</h4>
            <hr />
            <p><span>Var: </span>Helsingfors Universitet (online)</p>
            <p><span>När: </span>Dec 2019 - Feb 2020</p>
          </div>
          <div class="education-box">
            <h4>Historia</h4>
            <hr />
            <p><span>Var: </span>Södertörns Högskola</p>
            <p><span>När: </span>Jan 2003 - Maj 2003</p>
          </div>
          <div class="education-box">
            <h4>Musikvetenskap</h4>
            <hr />
            <p><span>Var: </span>Stockholms Universitet</p>
            <p><span>När: </span>Aug 2000 - Jun 2001</p>
          </div>
          <div class="education-box">
            <h4>Engelska och engelsk litteratur</h4>
            <hr />
            <p><span>Var: </span>Stockholms Universitet</p>
            <p><span>När: </span>Aug 2001 - Jun 2002</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  beforeCreate() {
    document.title = 'Pelle Lindroth | Om mig'
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
