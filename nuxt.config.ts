// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["@mdi/font/css/materialdesignicons.min.css", "vuetify/lib/styles/main.sass"],
  modules: ["@pinia/nuxt"],
  build: {
    transpile: ["vuetify"],
  },
  vite: {
    define: {
      "process.env.DEBUG": false,
    },
  },
});
