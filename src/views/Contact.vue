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
          <img src="../assets/icons/github-icon.svg" alt="GitHub Icon" />
        </div>
        {{ $t('contact.gh-iths') }}
        <img
          class="go-icon"
          src="../assets/icons/go-arrow.svg"
          alt="Arrow Right Icon"
      /></a>
      <a href="https://github.com/Pellin" target="_blank">
        <div class="icon-container">
          <img src="../assets/icons/github-icon.svg" alt="GitHub Icon" />
        </div>
        {{ $t('contact.gh-private') }}
        <img
          class="go-icon"
          src="../assets/icons/go-arrow.svg"
          alt="Arrow Right Icon"
        />
      </a>
      <a
        href="https://www.linkedin.com/in/pelle-lindroth-647247200/"
        target="_blank"
      >
        <div class="icon-container">
          <img src="../assets/icons/linkedin-icon.svg" alt="LinkedIn Icon" />
        </div>
        {{ $t('contact.linked-in') }}
        <img
          class="go-icon"
          src="../assets/icons/go-arrow.svg"
          alt="Arrow Right Icon"
      /></a>
      <a href="mailto:pellelindroth@gmail.com" target="_blank">
        <div class="icon-container">
          <img
            :style="{ height: this.$root.isMobile ? '1.2rem' : '1.6rem' }"
            src="../assets/icons/mail-icon.svg"
            alt="Mail Icon"
          />
        </div>
        {{ $t('contact.mail') }}
        <img
          class="go-icon"
          src="../assets/icons/go-arrow.svg"
          alt="Arrow Right Icon"
      /></a>
    </div>

    <form @submit.prevent="sendEmail">
      <h2>{{ $t('contact.direct-message.dm-header') }}</h2>
      <textarea
        v-model="message"
        class="message-input"
        name="message"
        type="text"
        :placeholder="messagePlaceholder"
      />
      <div class="second-input-row">
        <input
          v-model="email"
          class="mail-input"
          name="user_email"
          type="text"
          :placeholder="mailPlaceholder"
        />
        <button ref="sendButton">{{ buttonText }}</button>
      </div>
    </form>
    <img class="envelope" src="../assets/pile.png" alt="Envelopes" />
  </div>
</template>

<script>
import emailjs from 'emailjs-com'

export default {
  computed: {
    mailPlaceholder() {
      if (this.$root.$i18n.locale === 'sv') {
        return 'Din emailadress (valfritt)'
      } else {
        return 'Your email address (optional)'
      }
    },
    messagePlaceholder() {
      if (this.$root.$i18n.locale === 'sv') {
        return 'Skriv en rad...'
      } else {
        return 'Drop a line...'
      }
    },
  },
  created() {
    document.title =
      this.$root.$i18n.locale === 'sv'
        ? 'Pelle Lindroth | Kontakt'
        : 'Pelle Lindroth | Contact'
  },
  data() {
    return {
      buttonText: this.$root.$i18n.locale === 'sv' ? 'SKICKA' : 'SEND',
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
      this.buttonText =
        this.$root.$i18n.locale === 'sv' ? 'SKICKAR...' : 'SENDING'
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
      this.messageResult =
        this.$root.$i18n.locale === 'sv'
          ? 'Tack, ditt meddelande har skickats!'
          : 'Thanks, your message has been sent!'
      this.email = ''
      this.message = ''
      this.buttonText = this.$root.$i18n.locale === 'sv' ? 'SKICKA' : 'SEND'
      this.$refs.sendButton.style.opacity = '1'
    },
    showFailure() {
      this.messageSubmitted = true
      this.messageResult =
        this.$root.$i18n.locale === 'sv'
          ? 'Tyvärr gick det inte att skicka meddelandet.\nFörsök gärna igen, eller kontakta mig på mail eller LinkedIn.'
          : "Sorry, couldn't process your message.\nPlease try again later or get in touch through mail or LinkedIn."
      this.email = ''
      this.message = ''
      this.buttonText = this.$root.$i18n.locale === 'sv' ? 'SKICKA' : 'SEND'
      this.$refs.sendButton.style.opacity = '1'
    },
  },
  updated() {
    document.title =
      this.$root.$i18n.locale === 'sv'
        ? 'Pelle Lindroth | Kontakt'
        : 'Pelle Lindroth | Contact'

    this.buttonText = this.$root.$i18n.locale === 'sv' ? 'SKICKA' : 'SEND'
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
  overflow: hidden;

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
    background-color: rgba(20, 20, 20, 0.4);
    display: grid;
    height: 100vh;
    left: 0;
    width: 100vw;
    place-items: center;
    position: fixed;
    top: 0;
    z-index: 2;

    .message-box {
      align-items: center;
      background-color: rgba(236, 236, 236, 1);
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
        border-radius: 5px;
        color: #ececec;
        cursor: pointer;
        font-weight: 700;
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
    z-index: 1;

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
      background-color: rgba(236, 236, 236, 0.9);
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
        background-color: rgba(0, 128, 0, 0.8);
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

  .envelope {
    grid-column: 3 / span 9;
    grid-row: 1;
    margin-top: -2;
    width: 90rem;
    opacity: 0.8;

    @media screen and (max-width: $mobile-cutoff) {
      grid-column: 3 / span 6;
      grid-row: 4;
      width: 40rem;
    }
  }
}
</style>
