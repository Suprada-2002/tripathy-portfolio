<script lang="ts">
import { Phone } from "@lucide/svelte";
import { services } from '$lib/data/data'
</script>

<section class="max-w-4xl mx-auto px-6 py-20 space-y-10">
	<!-- Heading -->
	<div class="text-center space-y-3">
		<h2 class="text-3xl sm:text-4xls font-bold text-white">Services</h2>
		<p class="text-gray-300">Choose the service that fits your needs.</p>
	</div>

	<!-- Stacked Service Cards -->
	{#each services as service}
		<div class="bg-white/5 border border-white/10 rounded-2xl p-8 space-y-6 hover:bg-white/10 transition-all">
			<!-- Header -->
			<div class="flex items-center gap-4">
				<svelte:component this={service.icon} class="w-10 h-10 text-orange-500" />
				<h3 class="text-2xl font-semibold text-white">{service.title}</h3>
			</div>

			<p class="text-gray-300">{service.description}</p>

			<!-- Includes -->
			<div class="space-y-2">
				<h4 class="text-white font-medium">What’s Included:</h4>
				<ul class="list-disc list-inside text-gray-300">
					{#each service.includes as item}
						<li>{item}</li>
					{/each}
				</ul>
			</div>

			<!-- Pricing -->
			<div>
				<p class="text-lg text-white">
					<span class="font-semibold">Pricing:</span> {service.pricing}
				</p>
			</div>

			<!-- Contact -->
			<div class="flex items-center gap-2 text-white">
				<Phone class="w-5 h-5 text-orange-500" />
				<span>{service.contact}</span>
			</div>
		</div>
	{/each}
</section>