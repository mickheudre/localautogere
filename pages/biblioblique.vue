<template>
    <div class="mt-16">
        <h1 class="font-brand text-4xl uppercase"> {{ evenements.titre }} </h1>
        <div class="">
            <nuxt-content :document="evenements" class=""/>
        </div>
    </div>
</template>

<script>
export default {
    
  async asyncData( {$content, params } ) {
        const evenements = await $content('biblioblique').fetch()
    return { evenements }
  },
    head () {
    return {
      title: `La Biblioblique`,
      meta: [
        { hid: 'description', name: 'description', content: 'La biblioblique est une bibliothèque libre, gratuite et sans inscription. Il est possible de venir emprunter un livre pendant les permanences du Local Autogéré' }
      ]
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