<script>
    import { servicesData } from "$lib/data/data.js";
</script>

<div id="services" class="relative mt-20 border-b border-neutral-800 min-h-[800px]">
    <div class="text-center">
        <span class="bg-neutral-900 text-orange-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">Services</span>

        <h2 class="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">Explore 
            <span class="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">Our Services</span></h2>
    </div>

    <div class="flex flex-wrap mt-10 lg:mt-20">
        {#each servicesData as feature}
            <div class="w-full sm:w-1/2 lg:w-1/3">
                <div class="flex">
                    <div class="flex mx-6 h-10 w-10 p-2 bg-neutral-900 text-orange-700 justify-center items-center rounded-full">
                        <svelte:component this={feature.icon} strokeWidth={1.5} />
                    </div>
                    <div>
                    <h5 class="mt-1 mb-6 text-xl">{feature.text}</h5>
                    <p class="text-md p-2 mb-20 text-neutral-500">{feature.description}</p>
                    </div>
                </div>
            </div>
        {/each}
    </div>
    <div class="py-3 text-center">
        <a href="/services" class="text-white">Know More</a>
    </div>
</div>