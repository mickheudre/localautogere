<template>
  <div class="pt-16 md:pt-32 px-12 md:px-0">
    <h2 class="font-brand text-4xl sticky bg-white top-64">{{ evenements.titre }}</h2>
    <img class="max-w-xs sm:max-w-md my-10 mx-auto" src="../assets/images/local.png">
    <div>
      <nuxt-content :document="evenements" class />
    </div>
    <a class="mx-auto my-12 font-bold text-2xl w-full" href="https://www.helloasso.com/associations/comedon/collectes/appel-a-soutien-pour-le-futur-du-local-autogere">→ Faire un don</a>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const evenements = await $content("dons").fetch();
    return { evenements };
  },
  head() {
    return {
      title: `Appel à dons`,
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

<style>

h3 {
  @apply text-2xl ;
}
p a {
    @apply font-semibold;
}
</style>
