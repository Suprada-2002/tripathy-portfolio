<script lang="ts">
    import { ayushmanData, supradaData } from "$lib/data/data";
</script>

<svelte:head>
    <title>{supradaData.name}</title>
</svelte:head>

<section class="max-w-7xl mx-auto px-6 space-y-10 py-16 text-white">

    <!-- HERO / INTRO -->
    <div class="fade-in">
        <p class="text-lg text-gray-300">Hi 👋, My Name is</p>
        <h1 class="text-5xl font-bold">{supradaData.name}</h1>
        <p class="text-lg text-gray-400 max-w-xl mt-4">
           {supradaData.desc}
        </p>
    </div>

    <!-- ABOUT (Glassmorphism Card) -->
    <div class="fade-in p-8 rounded-2xl backdrop-blur-md bg-white/10 border border-white/10 shadow-lg">
        <h2 class="text-3xl font-bold mb-4">About Me</h2>
        <p class="text-gray-300 leading-relaxed">
            {ayushmanData.about}
        </p>
                <div class="flex gap-5 mt-3">
            {#each supradaData.socials as s}
                <a href={s.link} target="_blank" rel="noopener noreferrer"
                    class="rounded-sm bg-white/10  backdrop-blur-lg 
                           hover:bg-white/20 transition-all flex items-center justify-center"
                >
                <img src={s.icon} alt="icon" class="h-10 w-10" />
                    <!-- <s.icon class="w-6 h-6 text-white" /> -->
                </a>
            {/each}
        </div>
    </div>

    <!-- SKILLS -->
    <div class="fade-in">
        <h2 class="text-3xl font-bold mb-6">Skills</h2>
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {#each supradaData.skills as skill}
                <div class="p-4 rounded-xl backdrop-blur-md bg-white/10 border border-white/10 text-center">
                    {skill}
                </div>
            {/each}
        </div>
    </div>

    <!-- EXPERIENCE TIMELINE -->
    <div class="fade-in">
        <h2 class="text-3xl font-bold mb-8">Experience</h2>

        <div class="relative ml-6 border-l border-gray-700 max-sm:ml-0 max-sm:border-none">
            {#each supradaData.timeline as item}
            <!-- Gradient Dot-->
            <div
                class="absolute w-3 h-3 bg-gradient-to-r from-orange-500 to-red-800 rounded-full
                       -left-[32px] top-1.5 max-sm:hidden"
            ></div>
            <div class="mb-10 ml-4 relative max-sm:ml-0 max-sm:text-center">

                <p class="text-sm text-gray-400">{item.date}</p>
                <h3 class="text-xl font-semibold">{item.title}</h3>
                <p class="mt-2 text-gray-300">{item.description}</p>
            </div>
            {/each}
        </div>
      </div>

    <!-- PROJECTS -->
    <div class="fade-in">
        <h2 class="text-3xl font-bold mb-6">Projects</h2>
        <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {#each supradaData.projects as project}
                <div class="p-5 rounded-xl backdrop-blur-md bg-white/10 border border-white/10 shadow-lg">
                    <h3 class="font-semibold">{project.title}</h3>
                    <p class="text-gray-400 text-sm mt-2">{project.desc}</p>
                </div>
            {/each}
        </div>
    </div>

    <!-- SERVICES -->
    <div class="fade-in">
        <h2 class="text-3xl font-bold mb-6">Services</h2>

        <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {#each supradaData.services as service}
                <div class="p-5 rounded-xl backdrop-blur-md bg-white/5 border border-white/10 text-center">
                    {service}
                </div>
            {/each}
        </div>
    </div>

    <!-- CONTACT -->
    <div class="fade-in text-center">
        <h2 class="text-3xl font-bold mb-6">Contact Me</h2>
        <p class="text-gray-400 mb-6">
            Want to work together? Feel free to reach out.
        </p>

        <a
            href="mailto:ayushman@example.com"
            class="inline-block px-6 py-3 rounded-lg font-semibold text-black bg-gradient-to-r from-orange-500 to-red-800"
        >
            Send Email
        </a>
    </div>

    <!-- FOOTER -->
    <div class="fade-in text-center py-6 text-gray-500">
        © {new Date().getFullYear()} Ayushman Tripathy. All rights reserved.
    </div>

</section>

<!-- Fade-in animation -->
<style>
    .fade-in {
        opacity: 0;
        transform: translateY(10px);
        animation: fadeInUp 0.8s ease forwards;
    }
    @keyframes fadeInUp {
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
</style>
