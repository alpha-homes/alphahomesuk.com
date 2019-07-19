<page-query>
query {
    basics: contentfulBasics (id: "6M3Fw83o4xqKJDHj0mNlc5") {
  	  name
      phone
      email
      boroughs
    
      addressLine1
      addressLine2
      addressLine3
      postcode
      companyNumber
      businessAddress
  }
  pageContent: contentfulPage (id: "7gJxXf0Vohay057y6fYQ26") {
    name
    fullTitle
    shortSummary
    content
  }
}
</page-query>

<template>
  <Layout id="contact-page" class="has-text-light has-background-info">
    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <section class="hero is-info has-text-light">
      <div class="hero-body">
        <div class="content container">
          <h1 class="title has-text-light">Contact Us</h1>
          <h2 class="subtitle">How can we help?</h2>
          <p>{{$page.pageContent.shortSummary}}</p>
        </div>
      </div>
    </section>
    <section class="is-info section">
      <div class="columns">
        <div class="column is-12">
          <section class="container has-text-light">
            <div class="columns">
              <div class="column is-family-sans-serif has-text-light">
                <h1
                  class="title has-text-light is-size-4"
                  id="information"
                >{{$page.pageContent.fullTitle}}</h1>
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
              <div class="column container content">
                <div v-html="content" />
                <h3>by Post</h3>
                <p>Need to send us something the old fashioned way?</p>

                <p>Our address is:</p>
                <ul class="contact-postal-address is-italic">
                  <li v-for="(line, index) in address" :key="line">{{line}}</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  </Layout>
</template>

<script>
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import ContactForm from "~/components/contact-form.vue";

export default {
  metaInfo: {
    title: "Contact Us"
  },
  components: {
    ContactForm
  },
  computed: {
    content() {
      return documentToHtmlString(this.$page.pageContent.content);
    },
    address() {
      return [
        this.$page.basics.name,
        this.$page.basics.addressLine1,
        this.$page.basics.addressLine2,
        this.$page.basics.addressLine3,
        this.$page.basics.postcode
      ];
    }
  }
};
</script>

<style lang="scss">
input {
  font-family: $ah-header;
}
ul.contact-postal-address {
  list-style: none;
  margin-left: 12pt;
  li {
    display: block;
    margin: 0;
  }
}

#contact-page {
  .content {
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    ul {
      color: #ffffff;
    }
  }
}
</style>
