<script lang="ts">
	import '@fontsource-variable/newsreader/index.css';
	import '@fontsource-variable/newsreader/wght-italic.css';
	import '@fontsource-variable/geist/index.css';
	import '@fontsource-variable/jetbrains-mono/index.css';

	import '../app.css';
	import { onMount } from 'svelte';

	const { children } = $props();

	onMount(() => {
		document.getElementById('app-shell')?.remove();
	});
</script>

{@render children?.()}
