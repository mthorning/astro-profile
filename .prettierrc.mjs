// .prettierrc.mjs
/** @type {import("prettier").Config} */
export default {
  printWidth: 80,
  tabWidth: 2,
  plugins: ['prettier-plugin-astro'],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
};
