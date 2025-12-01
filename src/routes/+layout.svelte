<script>
	import favicon from '$lib/assets/favicon.svg';
  import Footer from '$lib/components/footer.svelte';
  import Nav from '$lib/components/nav.svelte';
 	import "../app.css";
	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<Nav />
{@render children()}
<Footer />
