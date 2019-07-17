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
    <!-- Learn how to use images here: https://gridsome.org/docs/images -->

    <HomepageHero size="fullheight" :taglines="taglines">
      <template v-slot:title>We are Alpha Homes</template>
      <template v-slot:text>{{$page.pageContent.shortSummary}}</template>
    </HomepageHero>

    <section class="section">
      <div class="columns">
        <div class="column is-12">
          <section class="container content">
            <h1 id="information">{{$page.pageContent.fullTitle}}</h1>
            <p v-html="content"/>
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
    title: "Alpha Homes - London Property Specialists Since 2008"
  },
  components: {
    HomepageHero
  },
  computed: {
    taglines() {
      const result = [
        this.$page.basics.tagline,
        ...this.$page.basics.altTaglines
      ];
      // console.log(result);
      return result;
    },
    content() {
      return documentToHtmlString(this.$page.pageContent.content);
    }
  }
};
</script>

<style>
</style>
