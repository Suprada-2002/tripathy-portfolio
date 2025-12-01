<script>
  import AboutUs from "$lib/components/about-us.svelte";
  import Hero from "$lib/components/hero.svelte";
  import Services from "$lib/components/services.svelte";

</script>

<svelte:head>
    <title>Tripathy.dev</title> 
</svelte:head>


<div class="max-w-7xl mx-auto pt-20 px-6">
<Hero />
<Services />
<AboutUs />
</div>
