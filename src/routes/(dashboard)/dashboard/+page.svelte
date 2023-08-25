<script lang="ts">
	import { goto } from '$app/navigation';
	import { loginData, showToast } from '$lib/stores';
	import { get } from 'svelte/store';
	const currentUser = get(loginData);

	const logOut = () => {
		loginData.set(undefined);
		showToast('Logged Out Success', true, 'success');
		goto('/login', { replaceState: true });
	};
</script>

<h1>hellow {currentUser?.role} {currentUser?.firstName} {currentUser?.lastName}</h1>
<button on:click={logOut}>logout</button>
