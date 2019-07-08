// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from "~/layouts/Default.vue";
import Buefy from "buefy";

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);

  // icons
  head.link.push({
    rel: "stylesheet",
    href:
      "https://cdn.materialdesignicons.com/2.5.94/css/materialdesignicons.min.css"
  });

  // bulma

  // fonts
  head.link.push({
    rel: "stylesheet",
    href:
      "https://fonts.googleapis.com/css?family=Libre+Franklin:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i|Martel:200,300,400,600,700,800,900|Playfair+Display:400,400i,700&display=swap"
  });

  Vue.use(Buefy);
}
