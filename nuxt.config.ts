export default defineNuxtConfig({
  srcDir: "./src",
  modules: [
    "@unocss/nuxt",
  ],
  unocss: {
    preflight: true,
  },
  app: {
    head: {
      title: "NUXTIFY",
      htmlAttrs: {
        lang: "zh-CN",
      },
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { charset: "utf-8" },
        { name: "theme-color", content: "#ffffff" },
        { name: "apple-mobile-web-app-capable", content: "yes" },
        { name: "apple-mobile-web-app-status-bar-style", content: "black" },
        { name: "apple-mobile-web-app-title", content: "NUXTIFY" },
        { name: "msapplication-TileColor", content: "#ffffff" },
        // { name: "msapplication-TileImage", content: "/favicon.png" },
        { name: "application-name", content: "NUXTIFY" },
        { hid: "description", name: "description", content: "NUXTIFY" },
        { hid: "og:title", property: "og:title", content: "NUXTIFY" },
        { hid: "og:description", property: "og:description", content: "NUXTIFY" },
        // { hid: "og:image", property: "og:image", content: "/favicon.png" },
        { hid: "og:url", property: "og:url", content: "https://example.com" },
        { hid: "og:site_name", property: "og:site_name", content: "NUXTIFY" },
        { hid: "og:type", property: "og:type", content: "website" },
        { hid: "og:locale", property: "og:locale", content: "en_US" },
        { hid: "twitter:card", name: "twitter:card", content: "summary" },
        { hid: "twitter:title", name: "twitter:title", content: "NUXTIFY" },
        { hid: "twitter:description", name: "twitter:description", content: "NUXTIFY" },
        // { hid: "twitter:image", name: "twitter:image", content: "/favicon.png" },
        { hid: "twitter:site", name: "twitter:site", content: "https://example.com" },
      ],
    },
  },
  experimental: {
    reactivityTransform: true,
  },
});
