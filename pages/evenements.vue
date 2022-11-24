<template>
    <div class=" relative">
    <div class="h-screen pt-16 md:pt-32 px-4 pb-4 overflow-hidden absolute w-full">
        <h2 class="font-brand text-4xl bg-white mb-6"> Evenements</h2>
        <div class="my-8 italic">Vous pouvez retrouver la liste des évènemenents passés dans la page <NuxtLink class="underline" to="/archives">Archives</NuxtLink></div>
        <div class="h-full w-full" >
            <iframe 
            src="https://localautogere-events.vercel.app/agenda"
            loading="lazy"
            style="top: 0;left: 0;width: 100%; height: 100%;"
            ></iframe>
        </div>
        
    </div>
</div>
</template>
</template>

<script>
export default {
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
};
</script>
