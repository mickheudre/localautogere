import path from 'path'

export default {
  target: 'static',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    htmlAttrs: {
      lang: 'fr',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '~assets/css/tailwind.css', 
  ],
  /*
  ** Plugins to load before mounting the App
  */
  webfontloader: {
    google: {
      families: ['Crimson Text:400,700', "Source Sans Pro:400,600,700"],
    }
  },
  router: {
    base: '/localautogere'
  },
  content: {
    apiPrefix: 'localautogere'
  },
  plugins: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxt/content',
    'nuxt-purgecss',
    'nuxt-webfontloader',
  ],
  /*
  ** Build configuration
  */
 build: {
  extractCSS: true,
  postcss: {
    plugins: {
      'postcss-import': {},
      tailwindcss: path.resolve(__dirname, './tailwind.config.js'),
      'postcss-nested': {}
    }
  },
  preset: {
    stage: 1 // see https://tailwindcss.com/docs/using-with-preprocessors#future-css-featuress
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        tailwindConfig: {
          test: /tailwind\.config/,
          chunks: 'all',
          priority: 10,
          name: true
        }
      }
    }
  }
}
}
