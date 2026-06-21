<script lang="ts">
	import '@fontsource-variable/newsreader/index.css';
	import '@fontsource-variable/newsreader/wght-italic.css';
	import '@fontsource-variable/geist/index.css';
	import '@fontsource-variable/jetbrains-mono/index.css';

	import '../app.css';

	const { children } = $props();
</script>

{@render children?.()}
