<script lang="ts">
	import { get } from 'svelte/store';
	import { addToast, userStore } from '../../stores';
	import { loginData } from '../../stores';
	import type { User, userLogin } from '../../types';
	import LoginInput from '$lib/LoginInput.svelte';
	import { goto } from '$app/navigation';
	console.log('hiyaa from LOGIN');
	const user0 = get(userStore);
	console.log('user datas', user0);
	const userLogin = get(loginData);
	console.log('LOGIN DATA', userLogin);
	const handleLogin = (e: Event) => {
		const formInputs = new FormData(e.target as HTMLFormElement);
		const email = formInputs.get('email') as string;
		const password = formInputs.get('password') as string;
		const users = get(userStore);
		const userInputs: userLogin = {
			email,
			password
		};

		const checkEmail = (userEmail: string) => {
			return users.map((user) => user.email).find((email) => email === userEmail);
		};

		console.log(checkEmail(userInputs.email));
		if (checkEmail(userInputs.email) !== undefined) {
			if (users.find((user) => user.password === userInputs.password)) {
				loginData.update(() => users.find((user) => user.password === userInputs.password));
				console.log('updated login data', get(loginData));
				goto('/dashboard', { replaceState: true });
				return;
			}
			addToast({
				text: 'wronggggg',
				dismissible: true,
				duration: 3000,
				type: 'warning'
			});

			console.log('invalid account');

			return;
		}
		addToast({
			text: 'Invalid Input',
			dismissible: true,
			duration: 3000,
			type: 'error'
		});
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
