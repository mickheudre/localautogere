<template>
  <div class="pt-16 md:pt-32 px-4">
    <h2 class="font-brand text-4xl sticky bg-white top-64"> {{ evenements.titre }}</h2>
    <img class="max-w-xs sm:max-w-md my-12 md:my-24 mx-auto" src="../assets/images/biblioblique.png">
    <div>
      <nuxt-content :document="evenements" class />
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const evenements = await $content("biblioblique").fetch();
    return { evenements };
  },
  head() {
    return {
      title: `La Biblioblique`,
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "La biblioblique est une bibliothèque libre, gratuite et sans inscription. Il est possible de venir emprunter un livre pendant les permanences du Local Autogéré"
        }
      ]
    };
  },
};
</script>
