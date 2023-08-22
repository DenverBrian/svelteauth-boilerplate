import type { Toast, ToastCreate, User } from './types';

import { writable } from 'svelte/store';

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
