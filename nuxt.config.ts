// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["@mdi/font/css/materialdesignicons.min.css", "vuetify/lib/styles/main.sass"],
  modules: ["@pinia/nuxt"],
  plugins: [{ src: "~/plugins/fontawesome.js", ssr: false }],
  build: {
    transpile: ["vuetify", "fontawesome"],
  },
  vite: {
    define: {
      "process.env.DEBUG": false,
    },
  },
});
