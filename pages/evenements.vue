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
    async asyncData( {$content, params } ) {
        const evenements = await $content('evenements').limit(1).fetch()
        console.log(evenements)
    return { evenements }
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