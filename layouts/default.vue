<template>
<div>
  <nav class="flex justify-between flex-wrap p-2">
  <div class="flex items-center flex-shrink-0 mx-6 ">
    <span class="uppercase text-xl">Le local Autogéré</span>
  </div>
  <div class="">
      <a href="#responsive-header" class="text-lg block  sm:inline-block  mx-6 hover:underline capitalize font-semibold">
        Présentation
      </a>
      <a href="#responsive-header" class="text-lg block  sm:inline-block  mx-6 hover:underline capitalize font-semibold">
        évènemenents
      </a>
      <a href="#responsive-header" class="text-lg block  sm:inline-block mx-6 hover:underline capitalize font-semibold" >
        Blog
      </a>
  </div>
</nav>
  <div class="container mx-auto max-w-screen-sm">
    <nuxt />
  </div>
</div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Crimson+Text:ital,wght@0,400;1,600&family=Noto+Serif:ital,wght@0,700;1,400&display=swap');

@font-face {
font-family: 'lack';
src: url('../assets/fonts/lack-line-regular.otf') format('truetype');
font-weight: normal;
font-style: normal;
}

span {
  font-family: 'lack';
}

a {
  font-family: 'Crimson Text';
}
</style>
