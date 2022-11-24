<template>
  <div class="min-h-screen flex flex-col justify-center items-center py-12">
    <div class="flex flex-col justify-center items-center">
      <div class="my-4">
        <h1 class="font-brand max-w-xs text-5xl uppercase leading-tight text-center" > {{ doc.titre }}</h1>
        <h2 class="font-serif text-xl text-center"> {{ doc.soustitre}} </h2>
      </div>
      <img class="my-6 md:my-6 max-w-sm md:max-w-md xl:max-w-xl" :src="image" alt="" />
      <h3 class="font-serif max-w-xs my-2 px-10 py-2 bg-black text-white uppercase text-center"> {{ doc.horaires }} </h3>
    </div>
    <div class="md:fixed md:left-0 md:inset-y-0 flex flex-col justify-center md:mr-12">
      <h3 class="md:transform md:-rotate-90  md:left-0 md:-ml-8 font-serif text-center"> {{ doc.adresse }} </h3>
    </div>
    <div class="xl:fixed xl:right-0 xl:w-64 xl:inset-y-0 xl:flex xl:flex-col justify-center my-8 xl:mr-16 desktop:mr-32">
      <div class="border-black">
        <h6 class="font-serif font-bold text-2xl pb-0">Actualités</h6>
          <iframe 
          src="https://localautogere-events.vercel.app/"
          style="top: 0;left: 0;width: 100%;height: 100%;"
          loading="lazy"
          ></iframe>
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

<style scoped>

.nuxt-content p {
  @apply my-0;
}
</style>