<script lang="ts">
// @ts-nocheck
	import { onMount } from 'svelte'

	// test on-mount client-side fetching
	let data;
	onMount(async () => {
		data = await fetch(`${import.meta.env.VITE_API_URL}/admin/users`).then(x => x.json())
	})

    $: if (data) console.log(data)
	
</script>

<h1>Clockworks Landing Page</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<p>API URL: {import.meta.env.VITE_API_URL}</p>