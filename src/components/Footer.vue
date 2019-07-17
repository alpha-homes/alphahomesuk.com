<static-query>
query {
    contentfulBasics (id: "6M3Fw83o4xqKJDHj0mNlc5") {
  	  name
      phone
      email
      boroughs
      tagline
      addressLine1
      addressLine2
      addressLine3
      postcode
      companyNumber
      businessAddress
  }
}
</static-query>

<template>
  <footer class="footer">
    <div class="content has-text-centered has-text-dark">
      <p id="license">
        <i class="far fa-copyright has-text-grey"></i>
        <span class="year has-text-grey-dark">2019</span>
        <g-image
          src="~/assets/img/logo/logo-full-transparent-dark.svg"
          id="alphahomes-footer-logo"
          width="180px"
          class="inline-image"
          alt="Alpha Homes"
        />
      </p>
      <section id="legal" class="has-text-grey is-size-7">
        <p
          id="company-info"
        >ALPHA HOMES LIMITED (company number {{$static.contentfulBasics.companyNumber }}) incorporated in England and Wales. Registered business address: {{$static.contentfulBasics.businessAddress}}.</p>
      </section>
      <p id="credits">
        <span id="rstlss" class="is-size-7 has-text-grey-dark">
          <a href="https://rstlss.org" class="has-text-grey-dark" target="_blank">
            Hand-crafted with
            <i class="fas fa-heart has-text-danger is-size-6" alt="love"></i> in the
            <g-image
              src="~/assets/img/GB.svg"
              width="22px"
              alt="United Kingdom"
              class="inline-image"
            />&nbsp;by
            <g-image
              src="~/assets/img/rstlss.svg"
              width="72px"
              alt="RSTLSS.org"
              class="inline-image"
              id="rstlss-logo"
            />
          </a>
        </span>
      </p>
    </div>

    <cookie-accept-decline
      elementId="cookieacceptdecline"
      :position="'bottom-left'"
      :type="'floating'"
      :disableDecline="true"
      :transitionName="'slideFromBottom'"
      :showPostponeButton="false"
    >
      <!-- Optional -->
      <div
        slot="message"
        class="is-family-sans-serif"
      >We use cookies to ensure you get the best experience on our website.</div>

      <!-- Optional -->
      <div slot="acceptContent" class="is-family-sans-serif">Okay</div>
    </cookie-accept-decline>
  </footer>
</template>

<script>
import "vue-cookie-accept-decline/dist/vue-cookie-accept-decline.css";
import CookieAcceptDecline from "vue-cookie-accept-decline";

export default {
  components: {
    CookieAcceptDecline
  }
};
</script>

<style lang="scss">
.footer {
  font-family: $ah-header;
}

.footer #license .year {
  font-family: $ah-header;
  font-size: 0.9em;
  font-weight: 200;
  position: relative;
  letter-spacing: 1px;
  margin: 0px 0px 0px 5px;
}

.footer #credits {
  margin-top: 2rem;
  cursor: pointer;
}

.inline-image {
  position: relative;
  top: 5px;
  margin: 1px 3px;
}

.inline-image#rstlss-logo {
  top: 6px;
}

.inline-image#alphahomes-footer-logo {
  top: 9px;
  margin: 0 5px;
}
</style>
