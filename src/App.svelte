<script lang="ts">
	import Calculadora from "./components/Calculadora.svelte";
</script>

<main>
	<Calculadora />
</main>

<style>
	:global(body) {
		background-color: #8c8c8c;
	}

	:root {
		--background-color: #555;
	}

	main {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100vh;
	}
</style>
