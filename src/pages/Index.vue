<page-query>
query {
    basics: contentfulBasics (id: "6M3Fw83o4xqKJDHj0mNlc5") {
  	  name
      phone
      email
      boroughs
      tagline
      altTaglines
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
    <div id="homepage-container">
      <HomepageHero
        size="fullheight"
        :taglines="[
          this.$page.basics.tagline,
          ...this.$page.basics.altTaglines
        ]"
      >
        <template v-slot:title>We are Alpha Homes</template>
        <template v-slot:text>{{$page.pageContent.shortSummary}}</template>
      </HomepageHero>

      <section class="section is-medium">
        <div class="columns">
          <div class="column is-12">
            <section class="container content">
              <div id="information">
                <h1 class="has-text-centered" id="welcome">{{$page.pageContent.fullTitle}}</h1>
                <div id="homepage-content" v-html="stringify($page.pageContent.content)"/>
              </div>
            </section>
          </div>
        </div>
      </section>
      <section class="section is-medium">
        <section class="container has-text-grey">
          <p class="is-size-6 has-text-centered">
            <a href="/services">Click here</a> to learn more about the services we can provide for you, or
            <a
              href="/contact"
            >click here to get in contact with us.</a>
          </p>
        </section>
      </section>
    </div>
  </Layout>
</template>

<script>
import HomepageHero from "~/components/home/homepage-hero.vue";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";

export default {
  metaInfo: {
    title: "London Property Specialists Since 2008"
  },
  components: {
    HomepageHero
  },
  methods: {
    stringify(input) {
      return documentToHtmlString(input);
    }
  }
};
</script>

<style lang="scss">
#homepage-container {
  h1#welcome {
    margin-bottom: 1em;
  }

  #homepage-content {
    p:first-child {
      text-align: center;
      margin-bottom: 1em;
    }
  }
}
</style>
