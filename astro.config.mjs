import { defineConfig } from "astro/config";

// https://astro.build/config
import mdx from "@astrojs/mdx";

// https://astro.build/config
import netlify from "@astrojs/netlify/functions";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://www.nanassound.com',
  markdown: {
    drafts: true
  },
  integrations: [mdx({
    drafts: true
  }), tailwind()],
  output: "server",
  adapter: netlify(),
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
});