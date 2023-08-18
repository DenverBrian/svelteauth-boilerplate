import type{User} from './types'
import type {userLogin} from './types'
import {writable} from 'svelte/store';

export const userStore = writable<User[]>([]);
export const loginData = writable<User|null>();