<template>
    <div class="mt-16">
        <div id="content" class="">
            <nuxt-content :document="evenements" class=""/>
        </div>
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
}
</script>

<style>
h2 {
  @apply font-brand text-4xl sticky bg-white;
  top: 64px;
}

</style>