<template>
  <div class="contact-view-wrapper">
    <div v-show="messageSubmitted" class="messageModal">
      <div class="message-box">
        <p>{{ messageResult }}</p>
        <button @click="closeModal" class="ok-button">OK</button>
      </div>
    </div>
    <div class="link-container">
      <a href="https://github.com/PelleLindroth" target="_blank">
        <div class="icon-container">
          <img src="../assets/github-icon.svg" alt="GitHub Icon" />
        </div>
        GitHub (ITHS-konto)
        <img class="go-icon" src="../assets/go-arrow.svg" alt="Arrow Right Icon"
      /></a>
      <a href="https://github.com/Pellin" target="_blank">
        <div class="icon-container">
          <img src="../assets/github-icon.svg" alt="GitHub Icon" />
        </div>
        GitHub (Privat konto)
        <img
          class="go-icon"
          src="../assets/go-arrow.svg"
          alt="Arrow Right Icon"
        />
      </a>
      <a
        href="https://www.linkedin.com/in/pelle-lindroth-647247200/"
        target="_blank"
      >
        <div class="icon-container">
          <img src="../assets/linkedin-icon.svg" alt="LinkedIn Icon" />
        </div>
        LinkedIn
        <img class="go-icon" src="../assets/go-arrow.svg" alt="Arrow Right Icon"
      /></a>
      <a href="mailto:pellelindroth@gmail.com" target="_blank">
        <div class="icon-container">
          <img
            :style="{ height: this.$root.isMobile ? '1.2rem' : '1.6rem' }"
            src="../assets/mail-icon.svg"
            alt="Mail Icon"
          />
        </div>
        Skicka ett mail
        <img class="go-icon" src="../assets/go-arrow.svg" alt="Arrow Right Icon"
      /></a>
    </div>
    <form @submit.prevent="sendEmail">
      <h2>Direktmeddelande</h2>
      <textarea
        v-model="message"
        class="message-input"
        name="message"
        type="text"
        placeholder="Skriv en rad..."
      />
      <div class="second-input-row">
        <input
          v-model="email"
          class="mail-input"
          name="user_email"
          type="text"
          placeholder="Din mailadress (valfritt)"
        />
        <button ref="sendButton">{{ buttonText }}</button>
      </div>
    </form>
  </div>
</template>

<script>
import emailjs from 'emailjs-com'

export default {
  created() {
    document.title = 'Pelle Lindroth | Kontakt'
  },
  data() {
    return {
      buttonText: 'SKICKA',
      email: '',
      message: '',
      messageResult: '',
      messageSubmitted: false,
    }
  },
  methods: {
    closeModal() {
      this.messageSubmitted = false
      this.messageResult = ''
    },
    sendEmail(e) {
      this.buttonText = 'SKICKAR...'
      this.$refs.sendButton.style.opacity = '0.5'

      emailjs
        .sendForm(
          'service_e8dqgkj',
          'template_egap81i',
          e.target,
          'user_6gyMF0Og7fTB9LnjcoOnr'
        )
        .then(
          () => {
            this.showSuccess()
          },
          error => {
            this.showFailure(error)
          }
        )
    },
    showSuccess() {
      this.messageSubmitted = true
      this.messageResult = 'Tack, ditt meddelande har skickats!'
      this.email = ''
      this.message = ''
      this.buttonText = 'SKICKA'
      this.$refs.sendButton.style.opacity = '1'
    },
    showFailure() {
      this.messageSubmitted = true
      this.messageResult =
        'Tyvärr gick det inte att skicka meddelandet.\nFörsök gärna igen, eller kontakta mig på mail eller LinkedIn.'
      this.email = ''
      this.message = ''
      this.buttonText = 'SKICKA'
      this.$refs.sendButton.style.opacity = '1'
    },
  },
}
</script>

<style lang="scss" scoped>
$mobile-cutoff: 750px;

.contact-view-wrapper {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(12, 64px);
  margin: 4rem auto 0;
  max-width: 120rem;

  @media screen and (max-width: $mobile-cutoff) {
    gap: 1rem;
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: repeat(20, 1.6rem);
    margin: auto;
    padding: 0 1rem;
    width: 100vw;
    min-height: 100vh;
  }

  .messageModal {
    background-color: rgba(20, 20, 20, 0.8);
    display: grid;
    height: 100vh;
    left: 0;
    width: 100vw;
    place-items: center;
    position: fixed;
    top: 0;

    .message-box {
      align-items: center;
      background-color: #ececec;
      box-sizing: content-box;
      width: 40rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 2rem;

      @media screen and (max-width: $mobile-cutoff) {
        text-align: center;
        width: 80%;
      }

      p {
        color: #333;
        font-size: 2rem;
        margin-bottom: 5rem;
        margin-top: 2rem;
      }

      .ok-button {
        background-color: #333;
        border: none;
        color: #ececec;
        cursor: pointer;
        outline: none;
        padding: 1rem 4rem;
      }
    }
  }

  .link-container {
    display: flex;
    flex-direction: column;
    grid-column: 1 / span 6;
    grid-row: 1 / span 3;
    max-width: 25rem;

    @media screen and (max-width: $mobile-cutoff) {
      grid-row: 2 / span 4;
    }

    a {
      align-items: center;
      color: #ececec;
      display: flex;
      font-size: 1.8rem;
      font-weight: 500;

      margin-bottom: 1rem;
      text-decoration: none;

      @media screen and (max-width: $mobile-cutoff) {
        font-size: 1.4rem;
        margin-bottom: 0.5rem;
        min-height: 2.5rem;
      }

      .icon-container {
        margin-top: 0.5rem;
        min-width: 3rem;

        @media screen and (max-width: $mobile-cutoff) {
          min-width: 2rem;
        }

        img {
          height: 2rem;

          @media screen and (max-width: $mobile-cutoff) {
            height: 1.5rem;
          }
        }
      }

      .go-icon {
        margin-left: 1rem;
        width: 2rem;

        @media screen and (max-width: $mobile-cutoff) {
          margin-left: 1rem;
          width: 1.5rem;
        }
      }
    }
  }

  form {
    display: flex;
    flex-direction: column;
    grid-column: 1 / span 8;
    grid-row: 4 / span 4;
    max-width: 60rem;

    @media screen and (max-width: $mobile-cutoff) {
      grid-row: 7 / span 8;
      width: 99%;
    }

    h2 {
      font-family: 'Kanit', sans-serif;
      font-size: 2.4rem;
      margin-bottom: 1rem;

      @media screen and (max-width: $mobile-cutoff) {
        font-size: 2rem;
      }
    }

    input,
    textarea {
      background-color: #ececec;
      border-radius: 0;
      color: #333;
    }

    .message-input {
      border: none;
      font-family: 'Roboto', sans-serif;
      font-size: 1.4rem;
      height: 17rem;
      max-width: 100%;
      outline: none;
      padding: 1rem;
      resize: none;
    }

    .second-input-row {
      display: flex;
      margin-top: 1rem;
      max-width: 100%;

      .mail-input {
        border: none;
        height: 4.4rem;
        outline: none;
        padding: 1rem;
        width: 100%;
      }

      button {
        background-color: #008000;
        border: none;
        color: #ececec;
        cursor: pointer;
        font-weight: 700;
        height: 4.4rem;
        margin-left: 1rem;
        outline: none;
        width: 17rem;

        &:active {
          transform: scale(0.98);
        }
      }
    }
  }
}
</style>
