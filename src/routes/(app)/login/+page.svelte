<script lang="ts">
	import { get } from 'svelte/store';
	import { userStore } from '../../stores';
	import { loginData } from '../../stores';
	import type { User, userLogin } from '../../types';
	console.log('hiyaa from LOGIN');
	const user0 = get(userStore);
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

		if (checkEmail(userInputs.email) !== undefined) {
			console.log('email matched!');
		}
		// function emails(user: User) {
		// 	return user.email;
		// }
		// const userEmails = users.map(emails);

		// const userEmails2: string[] = [];

		// for (let i = 0; i < users.length; i++) {
		// 	userEmails2.push(users[i].email);
		// }

		// const userEmails3 = get(userStore)
		// 	.map((user) => user.email)
		// 	.find((userEmail) => userEmail === email);

		// if (
		// 	get(userStore)
		// 		.map((user) => user.email)
		// 		.find((userEmail) => userEmail === email) !== undefined
		// ) {
		// 	console.log('valid email');
		// }

		// console.log(userEmails3);
		// console.log('useremails', userEmails);
		// console.log('useremails2', userEmails2);
		// console.log('useremail3', userEmails3);
		// console.log(
		// 	'userstore',
		// 	$userStore.map((user) => user.email)

		// );
	};
</script>

<h1>LOGIN</h1>
<form on:submit|preventDefault={handleLogin}>
	<input type="text" placeholder="Input Email" name="email" />
	<input type="password" placeholder="Input Password" name="password" />
	<button type="submit">Login</button>
</form>
{#each $userStore as user}
	<p>{user.email}</p>
{/each}

{#each user0 as user}
	<p>{user.email}</p>
{/each}
