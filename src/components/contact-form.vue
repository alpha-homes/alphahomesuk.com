<template>
  <div class="contact-form">
    <b-field label="Name">
      <b-input v-model="name"></b-input>
    </b-field>

    <!-- <b-field label="Email" type="is-danger" message="This email is invalid"> -->
    <b-field label="Email">
      <b-input type="email" value="john@" maxlength="30"></b-input>
    </b-field>

    <b-field label="Message">
      <b-input maxlength="200" type="textarea"></b-input>
    </b-field>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>
