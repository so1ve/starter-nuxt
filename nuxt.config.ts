export default defineNuxtConfig({
	srcDir: "./src",
	modules: ["@unocss/nuxt"],
	app: {
		head: {
			title: "starter-nuxt",
			htmlAttrs: {
				lang: "zh-CN",
			},
			meta: [
				{ name: "viewport", content: "width=device-width, initial-scale=1" },
				{ charset: "utf-8" },
				{ name: "theme-color", content: "#ffffff" },
				{ name: "apple-mobile-web-app-capable", content: "yes" },
				{ name: "apple-mobile-web-app-status-bar-style", content: "black" },
				{ name: "apple-mobile-web-app-title", content: "starter-nuxt" },
				{ name: "msapplication-TileColor", content: "#ffffff" },
				// { name: "msapplication-TileImage", content: "/favicon.png" },
				{ name: "application-name", content: "starter-nuxt" },
				{ hid: "description", name: "description", content: "starter-nuxt" },
				{ hid: "og:title", property: "og:title", content: "starter-nuxt" },
				{
					hid: "og:description",
					property: "og:description",
					content: "starter-nuxt",
				},
				// { hid: "og:image", property: "og:image", content: "/favicon.png" },
				{ hid: "og:url", property: "og:url", content: "https://example.com" },
				{
					hid: "og:site_name",
					property: "og:site_name",
					content: "starter-nuxt",
				},
				{ hid: "og:type", property: "og:type", content: "website" },
				{ hid: "og:locale", property: "og:locale", content: "en_US" },
				{ hid: "twitter:card", name: "twitter:card", content: "summary" },
				{
					hid: "twitter:title",
					name: "twitter:title",
					content: "starter-nuxt",
				},
				{
					hid: "twitter:description",
					name: "twitter:description",
					content: "starter-nuxt",
				},
				// { hid: "twitter:image", name: "twitter:image", content: "/favicon.png" },
				{
					hid: "twitter:site",
					name: "twitter:site",
					content: "https://example.com",
				},
			],
		},
	},
	typescript: {
		shim: false,
	},
	unocss: {
		preflight: true,
	},
});
