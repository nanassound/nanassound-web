import { defineConfig } from "astro/config";

// https://astro.build/config
import mdx from "@astrojs/mdx";

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
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  redirects: {
    '/products/softwares/airbending': '/products/software/airbending',
    '/eurorack-modules': '/products/eurorack-modules'
  }
});