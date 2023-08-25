<script lang="ts">
	import { addToast, toasts } from '$lib/stores';
	const addSuccess = () => {
		addToast({
			text: 'success',
			dismissible: true,
			duration: 3000,
			type: 'success'
		});
	};

	const addInfo = () => {
		addToast({
			text: 'infooooooo ',
			dismissible: true,
			duration: 3000,
			type: 'info'
		});
	};

	const addError = () => {
		addToast({
			text: 'ERRORRRRRRRRRRRR',
			dismissible: true,
			duration: 3000,
			type: 'error'
		});
	};

	const addWarning = () => {
		addToast({
			text: 'WARNINGGGG',
			dismissible: false,
			duration: 3000,
			type: 'warning'
		});
	};
</script>

<nav>
	<a href="/">Home</a>
	<a href="/login">Login</a>
	<a href="/register">Register</a>
</nav>
<button on:click={addSuccess}>success</button>
<button on:click={addInfo}>info</button>
<button on:click={addError}>error</button>
<button on:click={addWarning}>warning</button>
<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
