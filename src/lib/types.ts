import { userStore } from "./stores";
export type genericMessage = {
	text: string;
	status: boolean;	
};
export type User = {
	id:string;
	email: string;
	password: string;
	firstName: string;
	lastName: string;
	role: 'ADMIN' | 'USER' | 'GUEST';
};

export type UserRegister = Omit<User, 'role'|'id'>;
export type UserLogin = Pick<User, 'email' | 'password'>;

export type Toast = {
	id: number;
	text: string;
	dismissible: boolean;
	duration: number;
	type: 'success' | 'error' | 'warning' | 'info';
};

export type ToastCreate = Omit<Toast, 'id'>;

