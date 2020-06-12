<template>
    <div class="mt-16">
        <h1 class="font-brand text-4xl uppercase"> Présentation </h1>
        <div class="">
            <nuxt-content :document="evenements" class=""/>
        </div>
        <a id="back-to-top" @click="backToTop" class="fixed bottom-0 mb-16 -mr-4 right-0 transform rotate-90 ">← Haut de la page</a>
    </div>
</template>

<script>
export default {
    scrollToTop: true,
    async asyncData( {$content, params } ) {
        const evenements = await $content('presentation').fetch()
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
  }
}
</script>

<style>
h2 {
  @apply font-brand text-4xl sticky bg-white;
  top: 64px;
}

</style>