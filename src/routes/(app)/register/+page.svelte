<script lang="ts">
	import type { User } from '../../types';
	import UserList from '$lib/UserList.svelte';
	import { userStore } from '../../stores';
	import { get } from 'svelte/store';
	import LoginInput from '$lib/LoginInput.svelte';
	console.log('heyaaa from REGISTER');
	// let Users: User[] = [];
	const users = get(userStore);
	console.log(users);
	const handleSubmit = (e: Event) => {
		const formInputs = new FormData(e.target as HTMLFormElement);
		const email = formInputs.get('email') as string;
		const password = formInputs.get('password') as string;
		const firstName = formInputs.get('firstName') as string;
		const lastName = formInputs.get('lastName') as string;

		// const userDetails: userRegister = {
		// 	email: email,
		// 	password: password,
		// 	firstName: firstName,
		// 	lastName: lastName
		// };

		// Users.push({ email, password, firstName, lastName, role: 'USER' });
		userStore.update((users) => [...users, { email, password, firstName, lastName, role: 'USER' }]);
	};
</script>

<form on:submit|preventDefault={handleSubmit}>
	<h1>REGISTER</h1>
	<LoginInput />
	<input type="password" placeholder="Confirm Password" />
	<input type="text" placeholder="Input First Name" name="firstMame" />
	<input type="text" placeholder="Input Last Name" name="lastName" />
	<button>Register</button>
</form>

{#each $userStore as user}
	<!-- <p>{user.email}</p> -->
	<UserList test1={user.email} />
{/each}
<p>Users from GET BELOW</p>
{#each users as user}
	<p>from get {user.email}</p>
{/each}

<style>
	form {
		display: grid;
		text-align: center;
	}
</style>
