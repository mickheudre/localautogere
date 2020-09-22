<template>
<div id="default" class=""> 
  <header :class="menuVisible ? 'bg-gray-900' : 'bg-white'" class="z-50 md:mx-12 pt-4 sticky top-0 md:mt-6 md:bg-white md:flex md:items-center pb-0 md:justify-between">
  
  <!-- Logo text or image -->
  <div class="pl-6 md:pl-0 flex items-center justify-between">
    <h1 :class="$route.path == '/' ? 'md:opacity-0' : ''" class=" leading-none text-2xl text-black">
      <nuxt-link class="no-underline font-brand uppercase text-2xl text-white md:text-black" to="/">
        Le Local<br> Autogéré
      </nuxt-link>
    </h1>

      <button class="block md:hidden cursor-pointer ml-auto mr-8 relative w-12 h-12 p-4" @click="showMenu">
      <svg :class="menuVisible ? 'hidden ' : ''" class="fill-current  md:text-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
      <svg :class="menuVisible ? '' : 'hidden '" class="fill-current text-white md:text-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"/></svg>
    </button>
  </div>
  <!-- END Logo text or image -->
  
  
  <!-- Global navigation -->
  <nav :class="menuVisible ? 'fixed md:relative' : 'hidden md:block'" class="pl-6 md:pl-0 py-4 md:py-0 bg-gray-900 md:bg-white w-screen md:w-auto">
    <ul class="list-reset md:flex md:items-center">
      <li class="md:mx-6">
        <nuxt-link class="block no-underline hover:underline py-1 font-semibold text-lg text-white md:text-black" to="/presentation">
          Présentation
        </nuxt-link>
      </li>
      <li class="md:mx-6">
        <nuxt-link class="block no-underline hover:underline py-1 font-semibold text-lg text-white md:text-black" to="/evenements">
          Evénements
        </nuxt-link>
      </li>
      <li class="md:mx-6">
        <nuxt-link class="block no-underline hover:underline py-1 font-semibold text-lg text-white md:text-black" to="/biblioblique">
          Biblioblique
        </nuxt-link>
      </li>
      <!-- <li class="md:mx-6">
        <nuxt-link class="block no-underline hover:underline py-1 font-semibold text-lg text-white md:text-black" to="#">
          Liens
        </nuxt-link>
      </li> -->
    </ul>
  </nav>
  <!-- END Global navigation -->

</header>
  <!-- <header class="sticky bg-white align-top top-0 sm:mt-8 px-12 flex justify-between flex-row flex-wrap">
  <section class="my-6">
    <span :class="$route.path == '/' ? 'opacity-0' : ''" class="font-brand uppercase text-xl">Le local <br> Autogéré</span>
  </section>
  <section class="flex justify-end mt-6">
    <button class="block lg:hidden cursor-pointer ml-auto relative w-12 h-12 p-4" @click="showMenu">
      <svg :class="menuVisible ? '' : 'hidden'" class="fill-current text-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
      <svg :class="menuVisible ? 'hidden' : ''" class="fill-current text-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"/></svg>
    </button>
  <nav class="fixed w-screen sm:w-auto sm:relative top-0 sm:top-auto sm:left-auto mt-6 sm:mt-0 left-0 sm:flex sm:items-stretch lg:flex-no-shrink lg:flex-grow">
    <ul class="sm:flex sm:items-stretch lg:flex-no-shrink lg:flex-grow">
      <li class="flex-no-grow flex-no-shrink relative">
      <nuxt-link to="/presentation" :class="menuVisible ? 'hidden' : ''" class="text-lg font-semibold block sm:inline-block mx-5 hover:underline capitalize font-sans">
        Présentation
      </nuxt-link>
      </li >
      <li class="flex-no-grow flex-no-shrink relative">
      <nuxt-link to="/evenements" :class="menuVisible ? 'hidden' : ''" class="text-lg font-semibold block sm:inline-block mx-5 hover:underline capitalize font-sans">
        évènemenents
      </nuxt-link>
      </li>
      <li class="flex-no-grow flex-no-shrink relative">
      <nuxt-link to="/distro" :class="menuVisible ? 'hidden' : ''" class="text-lg block font-semibold sm:inline-block mx-5 hover:underline capitalize font-sans">
        Biblioblique
      </nuxt-link>
      </li>
      <li class="flex-no-grow flex-no-shrink relative">
      <nuxt-link to="/distro" :class="menuVisible ? 'hidden' : ''" class="text-lg block font-semibold sm:inline-block mx-5 hover:underline capitalize font-sans">
        Liens
      </nuxt-link>
      </li>
      </ul>
  </nav>
  </section>
</header> -->
  <div class="container mx-auto max-w-screen-md">
    <nuxt />
  </div>
  <a id="back-to-top" v-if="$route.path !== '/'" @click="backToTop" class="fixed bottom-0 mb-24 -mr-4 right-0 transform rotate-90 ">← Haut de la page</a>
</div>
</template>

<script>
export default {
  data () {
    return {
      menuVisible: false
    }
  },
  methods: {
    showMenu() {
      this.menuVisible = !this.menuVisible;
    },
     backToTop: function() {
    window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth'
  })
     }
  }
}
</script>

<style>

p {
 @apply mx-0 mt-4 mb-6;
}

</style>

