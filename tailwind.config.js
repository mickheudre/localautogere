/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  purge: [
    './**/*.html',
    './**/*.vue',
    './**/*.jsx',
  ],
  theme: {
    fontFamily: {
      'serif': ['Crimson Text'],
      'brand':['lack line'],
      'sans': ['Source Sans Pro'],
    },
    extend: {
      screens: {
        'desktop': '1400px',
      }
    }
  },
  variants: {},
  plugins: []
}

