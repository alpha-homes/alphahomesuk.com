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
  pageContent: contentfulPage (id: "7B58Ku38VcZUaNpo6l9byT") {
    name
    fullTitle
    shortSummary
    content
  }
}
</page-query>

<template>
  <Layout>
    <!-- Learn how to use images here: https://gridsome.org/docs/images -->

    <section class="hero is-info is-medium">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">Contact Us</h1>
          <h2 class="subtitle">Large subtitle</h2>
          <p>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.</p>
        </div>
      </div>
    </section>

    <section class="section is-medium">
      <div class="columns">
        <div class="column is-12">
          <section class="container content">
            <h1 id="information">{{$page.pageContent.fullTitle}}</h1>
            <p v-html="content" />
          </section>
        </div>
      </div>
    </section>
  </Layout>
</template>

<script>
import HomepageHero from "~/components/homepage-hero.vue";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";

export default {
  metaInfo: {
    title: "Contact Us"
  },
  components: {
    HomepageHero
  },
  computed: {
    content() {
      return documentToHtmlString(this.$page.pageContent.content);
    }
  }
};
</script>

<style>
</style>
