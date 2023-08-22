<script lang="ts">
	import Toasts from './Toasts.svelte';

	import { addToast, toasts } from './stores';

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
	<a href="/login">Login</a>
	<a href="/register">Register</a>
</nav>

<!-- TODO: Put you toasts here -->
<Toasts />
<slot />
<button on:click={addSuccess}>success</button>
<button on:click={addInfo}>info</button>
<button on:click={addError}>error</button>
<button on:click={addWarning}>warning</button>
{#each $toasts as toast}
	<p style={toast.type === 'warning' ? 'color:red;' : 'color:blue'}>{toast.text}</p>
{/each}

<style>
	article {
		border: 2px solid black;
	}
</style>
