<template>
    <div class="mt-16">
        <div id="content" class="">
            <nuxt-content :document="evenements" class=""/>
        </div>
        <a id="back-to-top" @click="backToTop" class="fixed bottom-0 mb-24 -mr-4 right-0 transform rotate-90 ">← Haut de la page</a>
    </div>
</template>

<script>
export default {
    async asyncData( {$content, params } ) {
        const evenements = await $content('evenements').limit(1).fetch()
    return { evenements }
  },
    head() {
    return {
      title: `Evénements`,
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Rencontres, concerts, expositions... Le local autogéré accueille différents événements tout au long de l'année."
        }
      ]
    };
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