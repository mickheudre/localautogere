<template>
    <div class="pt-16 md:pt-32 px-4 md:px-0">
        <img class="max-w-xs sm:max-w-md my-12 md:my-24 mx-auto" src="../assets/images/presentation.png">
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