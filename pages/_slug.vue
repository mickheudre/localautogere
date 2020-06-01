<template>
  <nuxt-content :document="doc" />
</template>

<script>
export default {
  async asyncData( {$content, params } ) {
    const doc = await $content(params.slug || 'index').fetch()
    console.log(doc)
    return { doc }
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

h1 {
  font-family: 'lack';
  font-size: 3em;
  text-transform: uppercase;
}

</style>