<template>
    <div class="mt-16">
        <div id="content" class="">
            <nuxt-content :document="evenements" class=""/>
        </div>
        <a id="back-to-top" @click="backToTop" class="fixed bottom-0 mb-16 -mr-4 right-0 transform rotate-90 ">← Haut de la page</a>
    </div>
</template>

<script>
export default {
    scrollToTop: true,
    async asyncData( {$content, params } ) {
        const evenements = await $content('evenements').fetch()
    return { evenements }
  },
  data() {
      return {
          years: ['2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', 
          '2016', '2017', '2018', '2019' ],
      }
  },
  methods: {
     backToTop: function() {
    window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth'
  })
    }
  },
  computed: {
      showBackToTop() {
          return document.heigth > window.heigth
      }
  }
}
</script>

<style>
h2 {
  @apply font-brand text-4xl sticky bg-white;
}

</style>