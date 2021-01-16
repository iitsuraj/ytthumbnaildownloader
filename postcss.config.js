module.exports = {
  plugins: [
    "tailwindcss",
    "tailwindcss",
    "autoprefixer",
    [
      "@fullhuman/postcss-purgecss",
      process.env.NODE_ENV === "production"
        ? {
            // the paths to all template files
            content: [
              "./src/pages/**/*.{js,jsx,ts,tsx}",
              "./src/components/**/*.{js,jsx,ts,tsx}",
            ],
            // function used to extract class names from the templates
            defaultExtractor: (content) =>
              content.match(/[\w-/:]+(?<!:)/g) || [],
          }
        : false,
    ],
  ],
};
