export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "web-pemilu",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" }
      // { rel: "stylesheet", type: "text/css", href: "https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // script: [
  //   { src: 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js' },
  //   { src: 'https://code.jquery.com/jquery-3.3.1.slim.min.js' },
  //   { src: 'https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js' }
  // ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ["@/plugins/aos.client"],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    "bootstrap-vue/nuxt",
    [
      "nuxt-fontawesome",
      {
        imports: [
          {
            set: "@fortawesome/free-solid-svg-icons",
            icons: ["fas"]
          },
          {
            set: "@fortawesome/free-brands-svg-icons",
            icons: ["fab"]
          }
        ]
      }
    ],
    [
      "@nuxtjs/firebase",
      {
        config: {
          apiKey: "AIzaSyA5eRtJcUX0VxOmlJzXjr3H_y8BSiZyM60",
          authDomain: "pemilu-c3c44.firebaseapp.com",
          projectId: "pemilu-c3c44",
          storageBucket: "pemilu-c3c44.appspot.com",
          messagingSenderId: "551940857191",
          appId: "1:551940857191:web:f8d4bb242a684ce547a3c2",
          measurementId: "G-0T0MY4TH8T",
          databaseURL: ""
        },
        services: {
          auth: true,
          firestore: true
        }
      }
    ]
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
};
