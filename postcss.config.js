module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    cssnano:
      process.env.NODE_ENV === "production"
        ? {
            preset: [
              "default",
              {
                discardComments: {
                  removeAll: true,
                },
                normalizeWhitespace: false,
                colormin: true,
                minifyFontValues: true,
                minifyGradients: true,
                minifyParams: true,
                minifySelectors: true,
                reduceIdents: true,
                reduceInitial: true,
                reduceTransforms: true,
                svgo: true,
                zindex: false,
              },
            ],
          }
        : false,
    "@fullhuman/postcss-purgecss":
      process.env.NODE_ENV === "production"
        ? {
            content: [
              "./pages/**/*.{js,jsx,ts,tsx}",
              "./components/**/*.{js,jsx,ts,tsx}",
              "./app/**/*.{js,jsx,ts,tsx}",
            ],
            defaultExtractor: (content) =>
              content.match(/[\w-/:]+(?<!:)/g) || [],
            safelist: {
              standard: ["html", "body"],
              deep: [/^dark:/],
              greedy: [/^prose/, /^aspect-/, /^line-clamp-/],
            },
          }
        : false,
  },
};
