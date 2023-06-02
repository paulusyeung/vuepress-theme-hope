import { theme } from "docs-shared";

// the theme wrapper is located in <root>/docs-shared/src/theme-wrapper.ts
export default theme("copyright2", {
  locales: {
    "/": {
      navbar: ["/", "/guide", "/config", "/demo"],

      sidebar: false,
    },

    "/zh/": {
      navbar: ["/zh/", "/zh/guide", "/zh/config", "/zh/demo"],

      sidebar: false,
    },
  },

  plugins: {
    mdEnhance: {
      codetabs: true,
    },
  },
});
