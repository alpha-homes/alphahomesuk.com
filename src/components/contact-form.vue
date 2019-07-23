<template>
  <div class="contact-form">
    <form @submit.prevent="onSubmit">
    <b-field label="Full Name">
      <b-input v-model="name" required :disabled="successful"></b-input>
    </b-field>

    <!-- <b-field label="Email" type="is-danger" message="This email is invalid"> -->
    <b-field label="Email">
      <b-input type="email" required value="" maxlength="30" v-model="email" :disabled="successful"></b-input>
    </b-field>

    <b-field label="Phone Number">
      <b-input type="phone" value="" maxlength="14" v-model="phone" :disabled="successful"></b-input>
    </b-field>

    <b-field label="Message">
      <b-input maxlength="1000" required type="textarea" v-model="message" :disabled="successful" class="is-family-sans-serif"></b-input>
    </b-field>
    <vue-recaptcha ref="recaptcha" @verify="onVerify"
          @expired="onExpired" sitekey="6Lfeoq4UAAAAAALFPgd99va6gf74tDu7Q3jTsTtd">
    
    </vue-recaptcha>
    <button id="submit-button" type="submit" class="g-recaptcha button is-large is-fullwidth" @click="onSubmit" :class="{'is-warning is-loading is-disabled': submitting, 'is-success is-disabled': successful, 'is-outlined': !successful && !submitting}"><span v-if="!successful">Submit</span><span class="icon" v-if="successful"><i class="fas fa-check"></i></span></button>
    </form>
      <b-modal :active.sync="isModalActive" :width="640" scroll="keep">
            <div class="card">
                <div class="card-content">
                    <div class="content">
                        Thank you for your message. We look forward to reading it, and will get back to you as soon as possible.
                    </div>
                </div>
            </div>
        </b-modal>
  </div>
</template>

<script>

  import VueRecaptcha from 'vue-recaptcha';
import { timingSafeEqual } from 'crypto';
import * as emailjs from "emailjs-com";
emailjs.init("user_TyJnrsmJXdUAwTfJKLobO")


export default {
  name: 'ContactForm',
  components: {
    VueRecaptcha
  },
  methods: {
    onSubmit: function () {
      if(!this.submitting){
        // activate spinner
      this.submitting = true;
      if(this.human && this.name && this.email && this.message){
        this.valid = true;
        console.debug("human detected")
        // send form
        const emailData = {
          name: this.name,
          email: this.email,
          phone: this.phone || 'Not Provided',
          text: this.message
        } 

        emailjs.send("default_service", "contact_page", emailData).then(()=>{
          this.submitting = false;
          this.successful = true;
          setTimeout(()=>{
          this.isModalActive = true;
          }, 1000)
        },(error)=>{
          this.submitting = false;
          this.successful = false;
          console.error("email send fail due to error:", error)
        }
        )

          
      } else {
        console.debug("THIS IS BOT. DENYING")
        this.valid = false
        this.submitting = false
      }
      
      }
      
    },
    onVerify: function (response) {
      console.debug('recaptcha verified, setting human to true')
      this.human = true;
    },
    onExpired: function () {
      console.debug('recaptcha expired, setting human to false')
      this.human = false;
    },
    resetRecaptcha () {
      this.$refs.recaptcha.reset() // Direct call reset method
    }
  },
  data() {
    return {
      name: '',
      email: '',
      message: '',
      phone: '',
      human: false,
      valid: false,
      submitting: false,
      successful: false,
      isModalActive: false
    }
  }
};
</script>

<style lang="scss">
.contact-form {
  @include mobile {
    padding: 0px;
  }
  @include tablet {
    padding: 10px;
  }

  padding: 10px;

  #submit-button{
    margin-top: 10pt;
  }
}
</style>
