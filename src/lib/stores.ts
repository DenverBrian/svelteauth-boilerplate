import { goto } from '$app/navigation';
import type { Toast, ToastCreate, User, genericMessage } from './types';

import { get, writable } from 'svelte/store';

export const userStore = writable<User[]>([
	{
		email: 'denver.talamayan@gmail.com',
		password: '123',
		firstName: 'Denver',
		lastName: 'Brian',
		role: 'USER'
	},
	{
		email: 'jordan.brian@hotmail.com',
		password: '123123',
		firstName: 'jordan',
		lastName: 'biran',
		role: 'USER'
	}
]);
export const loginData = writable<User | undefined>(undefined);

export const toasts = writable<Toast[]>([]);

export const addToast = (toast: ToastCreate) => {
	const id = Math.floor(Math.random() * 10000);

	toasts.update((all) => [{ ...toast, id }, ...all]);

	if (toast.duration) setTimeout(() => dismissToast(id), toast.duration);
};

export const dismissToast = (id: number) => {
	toasts.update((all) => all.filter((toast) => toast.id !== id));
};

export const checkEmail = (userEmail: string) => {
	return get(userStore)
		.map((user) => user.email)
		.find((email) => email === userEmail);
};

export const showToast = (
	text: string,
	dismissible: boolean,
	type: 'success' | 'error' | 'warning' | 'info'
) => {
	addToast({
		text,
		dismissible,
		duration: 3000,
		type
	});
};

export const userCreate = ({
	email,
	password,
	firstName,
	lastName,
	role
}: User): genericMessage => {
	userStore.update((users) => [...users, { email, password, firstName, lastName, role }]);
	return {
		status: true,
		text: 'Registration sucess'
	};
};

export const currentUserStore = (currentUser: User | undefined): genericMessage => {
	loginData.update(() => currentUser);
	goto('/dashboard', { replaceState: true });
	return {
		status: true,
		text: 'login successsssssssssssssss'
	};
};

// export const logOutUser = ():