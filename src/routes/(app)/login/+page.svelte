<script lang="ts">
	import { get } from 'svelte/store';
	import { addToast, userStore, checkEmail, showToast, currentUserStore } from '$lib/stores';
	import { loginData } from '$lib/stores';
	import type { UserLogin } from '$lib/types';
	import LoginInput from '$lib/LoginInput.svelte';
	import { goto } from '$app/navigation';
	console.log('hiyaa from LOGIN');
	const user0 = get(userStore);
	console.log(user0);
	const users = get(userStore);

	const handleLogin = (e: Event) => {
		const formInputs = new FormData(e.target as HTMLFormElement);
		const email = formInputs.get('email') as string;
		const password = formInputs.get('password') as string;

		const userInputs: UserLogin = {
			email,
			password
		};

		if (checkEmail(userInputs.email) === undefined) {
			showToast('Invalid Credentials', false, 'error');
			return;
		}
		let currentUser = users.find((user) => user.email === userInputs.email);
		//TODO:!! ??

		if (currentUser?.password !== userInputs.password) {
			showToast('invalid password', true, 'error');
			return;
		}

		let status = currentUserStore(currentUser);
		showToast(status.text, true, 'success');
	};
</script>

<h1>LOGIN</h1>
<form on:submit|preventDefault={handleLogin}>
	<LoginInput />
	<button type="submit">Login</button>
</form>

{#each $userStore as user}
	<p>{user.email}</p>
{/each}

{#each user0 as user}
	<p>{user.email}</p>
{/each}
