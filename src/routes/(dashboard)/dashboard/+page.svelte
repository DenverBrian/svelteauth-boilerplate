<script lang="ts">
	import { goto } from '$app/navigation';
	import { addToast, loginData } from '../../stores';
	import { get } from 'svelte/store';
	const currentUser = get(loginData);
	addToast({
		text: 'Succesfully logged in',
		dismissible: true,
		duration: 3000,
		type: 'success'
	});
	const logOut = () => {
		loginData.set(undefined);
		goto('/login', { replaceState: true });
	};
</script>

<h1>hellow {currentUser?.role} {currentUser?.firstName} {currentUser?.lastName}</h1>
<button on:click={logOut}>logout</button>
