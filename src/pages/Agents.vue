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
  pageContent: contentfulPage (id: "5B51nja1HuSFDfb0jGuu9n") {
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
      <section class="hero is-bold is-medium is-warning">
        <div class="hero-body">
          <div class="container content">
            <h1 class="has-text-dark">{{$page.pageContent.name}}</h1>
            <p>{{$page.pageContent.shortSummary}}</p>
          </div>
        </div>
      </section>
      <section class="section is-medium">
        <div class="container content">
          <h1 class="secondary-h1">{{$page.pageContent.fullTitle}}</h1>
          <div v-html="stringify($page.pageContent.content)"/>
        </div>
      </section>
    </div>
  </Layout>
</template>

<script>
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";

export default {
  metaInfo: {
    title: "Information for Agents"
  },
  methods: {
    stringify(input) {
      return documentToHtmlString(input);
    }
  }
};
</script>
