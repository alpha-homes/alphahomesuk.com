<template>
  <div class="contact-form">
    <b-field label="Name">
      <b-input v-model="name"></b-input>
    </b-field>

    <!-- <b-field label="Email" type="is-danger" message="This email is invalid"> -->
    <b-field label="Email">
      <b-input type="email" value="" maxlength="30"></b-input>
    </b-field>

    <b-field label="Message">
      <b-input maxlength="200" type="textarea"></b-input>
    </b-field>
    <button type="submit" class="button is-outlined is-large is-fullwidth">Submit</button>
  </div>
</template>

<script>
export default {
  name: 'ContactForm'
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
}
</style>
