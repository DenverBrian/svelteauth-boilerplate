<script lang="ts">
	import { userCreate, checkEmail, showToast, userStore } from '$lib/stores';
	import { get } from 'svelte/store';
	import LoginInput from '$lib/LoginInput.svelte';
	import { goto } from '$app/navigation';
	console.log('heyaaa from REGISTER');
	// let Users: User[] = [];
	// let users = get(userStore);
	let text: string;
	// let dismissible: boolean;
	// let type: 'success' | 'error' | 'warning' | 'info';

	// $: storeChange = () => {
	// 	showToast(`${$userStore.length}`, true, 'success');
	// };

	const handleSubmit = (e: Event) => {
		const formInputs = new FormData(e.target as HTMLFormElement);
		const email = formInputs.get('email') as string;
		const password = formInputs.get('password') as string;
		const confirmPassword = formInputs.get('confirmPassword') as string;
		const firstName = formInputs.get('firstName') as string;
		const lastName = formInputs.get('lastName') as string;
		let users = get(userStore);
		console.log(get(userStore));
		console.log(checkEmail(email));
		if (checkEmail(email) !== undefined) {
			showToast('email exist', false, 'error');
			console.log('email existsss alreaday');
			return;
		}
		if (confirmPassword !== password) {
			showToast('Password dont Match', false, 'error');
			console.log('password dont matchhh');
			return;
		}
		// userStore.update((users) => [...users, { email, password, firstName, lastName, role: 'USER' }]);
		let status = userCreate({ email, password, firstName, lastName, role: 'USER' });
		console.log(status);
		// goto('/login', { replaceState: true });
		// showToast(status.text, true, 'success');

		// storeChange();
	};
</script>

<form on:submit|preventDefault={handleSubmit}>
	<h1>REGISTER</h1>
	<LoginInput />
	<input type="password" placeholder="Confirm Password" name="confirmPassword" />
	<input type="text" placeholder="Input First Name" name="firstMame" />
	<input type="text" placeholder="Input Last Name" name="lastName" />
	<button>Register</button>
</form>

<!-- <p>{user.email}</p> -->

<p>Users from GET BELOW</p>

<!-- {#each users as user}
	<p>from get {user.email}</p>
{/each} -->

<style>
	form {
		display: grid;
		text-align: center;
	}
</style>
