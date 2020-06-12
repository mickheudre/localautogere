<template>
<div class="flex flex-col justify-center items-center">
<div class="m-4">
  <h1 class="font-brand max-w-xs text-5xl uppercase leading-tight text-center" > {{ doc.titre }}</h1>
  <h2 class="font-serif text-xl text-center"> {{ doc.soustitre}} </h2>
  </div>
  <img class="max-w-xs sm:max-w-md" :src="image" alt="" />
  <div class="my-6">
  <h3 class="font-serif max-w-xs my-2 px-10 py-2 bg-black text-white uppercase text-center"> {{ doc.horaires }} </h3>
  <h3 class="font-serif text-center"> {{ doc.adresse }} </h3>
  </div>
  </div>
</template>

<script>
export default {
  async asyncData( {$content, params } ) {
    const doc = await $content('index').fetch()
    return { doc }
  },
  computed: {
      image() {
          return require('../assets/images/' + this.doc.image)
      }
  }
}
</script>

<style>

</style>