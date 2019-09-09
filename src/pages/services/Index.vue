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
  pageContent: contentfulPage (id: "6wSJJeSlrW0s3sL4Xni8rS") {
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
      <section id="services-page-hero" class="hero is-fullheight has-svg-background left">
        <div class="hero-body">
          <div class="body-content-padding"></div>
          <div class="body-content">
            <div class="content">
              <h1>{{$page.pageContent.name}}</h1>
              <p>{{$page.pageContent.shortSummary}}</p>
            </div>
          </div>
        </div>
      </section>
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

export default {
  metaInfo: {
    title: "Services"
  },
  methods: {
    stringify(input) {
      return documentToHtmlString(input);
    }
  }
};
</script>

<style lang="scss">
#services-page-hero {
  background-image: url("../../assets/img/heroes/Services.svg");
}
</style>