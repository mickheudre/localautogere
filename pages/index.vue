<template>
<div class="mt-8 flex flex-col justify-center items-center">
<div class="m-4">
  <h1 class="max-w-xs text-5xl uppercase leading-tight text-center" > {{ doc.titre }}</h1>
  <h2 class="text-xl text-center"> {{ doc.soustitre}} </h2>
  </div>
  <img class="max-w-xs sm:max-w-md" :src="image" alt="" />
  <div class="my-6">
  <h3 class="max-w-xs my-2 px-10 py-2 bg-black text-white uppercase text-center"> {{ doc.horaires }} </h3>
  <h3 class="text-center"> {{ doc.adresse }} </h3>
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
@font-face {
font-family: 'lack';
src: url('../assets/fonts/lack-line-regular.otf') format('truetype');
font-weight: normal;
font-style: normal;
}

@import url('https://fonts.googleapis.com/css2?family=Noto+Serif:ital@1&display=swap');

h1 {
  font-family: 'lack';
}
h2, h3, h4, h5 {
    font-family: 'Noto';
}

</style>