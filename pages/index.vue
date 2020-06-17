<template>
<div class="flex flex-col justify-center items-center">
<div class="my-4">
  <h1 class="font-brand max-w-xs text-5xl uppercase leading-tight text-center" > {{ doc.titre }}</h1>
  <h2 class="font-serif text-xl text-center"> {{ doc.soustitre}} </h2>
  </div>
  <img class="my-6 md:my-6 max-w-xs sm:max-w-md" :src="image" alt="" />
  <div class="">
  <h3 class="font-serif max-w-xs my-2 px-10 py-2 bg-black text-white uppercase text-center"> {{ doc.horaires }} </h3>
  <div class="md:fixed md:left-0 md:inset-y-0 flex flex-col justify-center mr-12">
    <h3 class="transform md:-rotate-90  md:left-0 md:-ml-8 font-serif text-center"> {{ doc.adresse }} </h3>
  </div>
  <div class="md:fixed md:right-0 md:w-48 md:inset-y-0 md:flex md:flex-col md:justify-center md:mr-24">
    <div class="border-l-2 pl-4 border-black">
      <h6 class="font-serif font-bold text-2xl mb-0">Actualités</h6>
      <nuxt-content :document="news[0]" class="my-0" />
    </div>
  </div>
  </div>
  </div>
</template>

<script>
export default {
  async asyncData( {$content, params } ) {
    const doc = await $content('index').fetch()
    const news = await $content('news').sortBy('date','desc').limit(1).fetch()
    return { doc, news }
  },
  computed: {
      image() {
          return require('../assets/images/' + this.doc.image)
      }
  }
}
</script>

<style>

.nuxt-content p {
  @apply my-0;
}
</style>