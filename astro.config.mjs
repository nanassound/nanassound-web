import { defineConfig } from "astro/config";

// https://astro.build/config
import mdx from "@astrojs/mdx";

// https://astro.build/config
import netlify from "@astrojs/netlify";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
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