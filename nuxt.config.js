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

  serverMiddleware: [
    {
      path: "/api",
      handler: "~/api/index.js"
    }
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    "@nuxtjs/pwa",
    "bootstrap-vue/nuxt",
    "@nuxtjs/axios", // for communicating with api
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
          apiKey: "AIzaSyC5V2PGCGXynULtkeRTMMcxs13wxPCd2HE",
          authDomain: "pemilu-f561a.firebaseapp.com",
          projectId: "pemilu-f561a",
          storageBucket: "pemilu-f561a.appspot.com",
          messagingSenderId: "1006768768666",
          appId: "1:1006768768666:web:2b0c8c2195a21c7a994123",
          measurementId: "G-VJK3F6DLE7",
          databaseURL: ""
        },
        services: {
          auth: {
            static: true,
            preload: true,
            persistence: "local", // default
            initialize: {
              onAuthStateChangedMutation: "auth/ON_AUTH_STATE_CHANGED_MUTATION",
              subscribeManually: false
            },
            ssr: false // default
          },
          firestore: true
        }
      }
    ]
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
};
