/* eslint-disable prettier/prettier */
<template>
  <div>
    <transition name="fade">
      <div v-if="formSubmitted" class="c-modal">
        <div class="c-container">
          Thank you!
        </div>
      </div>
    </transition>
    <form @submit.prevent>
      <div class="row gtr-uniform">
        <div class="col-6 col-12-xsmall">
          <input
            v-model.trim="submitForm.name"
            type="text"
            name="name"
            id="name"
            placeholder="Name"
          />
        </div>
        <div class="col-6 col-12-xsmall">
          <input
            v-model.trim="submitForm.email"
            type="email"
            name="email"
            id="email"
            placeholder="Email"
          />
        </div>
        <div class="col-12">
          <textarea
            v-model.trim="submitForm.message"
            name="message"
            id="message"
            placeholder="Message"
            rows="6"
          ></textarea>
        </div>
        <div class="col-12">
          <ul class="actions">
            <li @click="submit">
              <input
                :disabled="notOk()"
                type="submit"
                class="primary"
                value="Send Message"
              />
            </li>
            <li @click="resetForm">
              <input type="reset" value="Reset Form" />
            </li>
          </ul>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { db } from "@/firebase";

export default {
  name: "Form",
  data() {
    return {
      submitForm: {
        name: "",
        email: "",
        message: "",
      },
      formSubmitted: false,
    };
  },
  firestore() {
    return {
      submissions: db.collection("submissions"),
    };
  },
  methods: {
    notOk() {
      if (this.submitForm.name.length != 0 && this.checkEmailFormatt()) {
        return false;
      } else {
        return true;
      }
    },
    checkEmailFormatt() {
      // eslint-disable-next-line no-useless-escape
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(this.submitForm.email).toLowerCase());
    },
    resetForm() {
      this.submitForm.name = "";
      this.submitForm.email = "";
      this.submitForm.message = "";
    },
    submit: function() {
      this.formSubmitted = true;
      this.$firestore.submissions
        .add({
          name: this.submitForm.name,
          email: this.submitForm.email,
          message: this.submitForm.message,
          timestamp: new Date(),
        })
        .then(() => {
          this.resetForm();
          setTimeout(() => (this.formSubmitted = false), 2000);
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style lang="scss" scoped>
.c-modal {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(52, 73, 94, 0.4);
  z-index: 999;

  .c-container {
    position: relative;
    max-width: 600px;
    margin: 30vh auto 0;
    padding: 2rem;
    border-radius: 3px;
    background: #fff;
    box-shadow: 0 0 20px 0 rgba(52, 73, 94, 0.5);
    color: #109e9e;
    text-align: center;
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
