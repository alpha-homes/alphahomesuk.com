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
  pageContent: contentfulPage (id: "pjjroQ21XGZ0O7Bg3QU10") {
    name
    fullTitle
    shortSummary
    content
  }
}
</page-query>


<template>
  <Layout>
    <div id="generic-container">
      <SVGHero side="left" page="landlords">
        <h1>{{$page.pageContent.name}}</h1>
        <p>{{$page.pageContent.shortSummary}}</p>
      </SVGHero>
      <section class="section is-medium">
        <div class="container content">
          <h1 class="secondary-h1">{{$page.pageContent.fullTitle}}</h1>
          <div v-html="stringify($page.pageContent.content)" />
        </div>
      </section>
    </div>
  </Layout>
</template>

<script>
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import SVGHero from "@/components/svg-hero.vue";

export default {
  metaInfo: {
    title: "Information for Landlords"
  },
  components: {
    SVGHero
  },
  methods: {
    stringify(input) {
      return documentToHtmlString(input);
    }
  }
};
</script>

<style lang="scss">
.landlords-page-hero {
  background-image: url("../assets/img/heroes/Landlords.svg");
}
</style>