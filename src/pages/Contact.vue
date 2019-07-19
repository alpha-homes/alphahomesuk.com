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
  <Layout class="contact-page">
    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <div id="contact-page-container">
      <section class="hero is-medium is-primary-dark">
        <div class="hero-body">
          <div class="content container">
            <h1 class="title">Contact Us</h1>
            <h2 class="subtitle">How can we help?</h2>
            <p>{{$page.pageContent.shortSummary}}</p>
          </div>
        </div>
      </section>
      <section class="section">
        <div class="container">
          <div class="columns is-4">
            <div class="column is-8 is-family-sans-serif">
              <h1 class="title is-size-4" id="information">{{$page.pageContent.fullTitle}}</h1>
              <ContactForm/>
            </div>
            <div class="column is-4">
              <div class="other-ways content">
                <div v-html="stringify(content)"/>
                <h2>by Post</h2>
                <p>Need to send us something the old fashioned way?</p>

                <ul class="contact-postal-address is-size-5 is-family-sans-serif has-text-grey">
                  <li v-for="(line, index) in address" :key="line">{{line}}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
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
  methods: {
    stringify(input) {
      return documentToHtmlString(input);
    }
  },
  computed: {
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

#contact-page-container {
  padding-bottom: 50pt;
  ul.contact-postal-address {
    font-weight: 400;
    list-style: none;
    margin-left: 12pt;
    li {
      display: block;
      margin: 0;
    }
  }
  .other-ways {
    padding-right: 10pt;
  }
}
</style>
