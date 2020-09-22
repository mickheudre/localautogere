<template>
    <div class="mt-16">
        <h2> {{ evenements.titre }} </h2>
        <img class="max-w-xs sm:max-w-md my-10 mx-auto" src="../assets/images/presentation.png">
        <div class="">
            <nuxt-content :document="evenements" class=""/>
        </div>
    </div>
</template>

<script>
export default {
    async asyncData( {$content, params } ) {
        const evenements = await $content('presentation').fetch()
    return { evenements }
  },
  head() {
    return {
      title: `Présentation`,
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Depuis 2005, le Local Autogéré est un infoshop, lieu d'activité, de rencontre, de lutte, d'échange et de diffusion d'information"
        }
      ]
    };
  }
}
</script>