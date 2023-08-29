import { faker } from '@faker-js/faker';
import type { UserRegister } from '../types';

export const generateUser = (): UserRegister => {
	return {
		email: faker.internet.email(),
		password: faker.internet.password(),
		firstName: faker.person.firstName(),
		lastName: faker.person.lastName()
	};
};

type UserWithOptions = {
	provider?: string;
	sex?: 'male' | 'female';
	sameDetails?: boolean;
};

export const generateUserWithOptions = (options?: UserWithOptions): UserRegister => {
	const defaultOptions: UserWithOptions = {
		provider: 'gmail.com',
		sex: 'male',
		sameDetails: false
	};
	let generatedUser: UserRegister = {
		email: faker.internet.email({ provider: defaultOptions.provider }),
		password: faker.internet.password(),
		firstName: faker.person.firstName(defaultOptions.sex),
		lastName: faker.person.lastName()
	};
	if (options?.provider !== undefined) {
		generatedUser.email = faker.internet.email({ provider: options.provider });
	}
	if (options?.sex !== undefined) {
		generatedUser.firstName = faker.person.firstName(options.sex);
	}
	if (options?.sameDetails !== undefined) {
		generatedUser.email = faker.internet.email({
			firstName: generatedUser.firstName,
			lastName: generatedUser.lastName,
			provider: options?.provider ? options.provider : defaultOptions.provider
		});
	}
	return generatedUser;
};

export const magicGenerateUser = (options?: UserWithOptions): UserRegister => {
	const newUser = generateUser();
	return {
		...newUser,
		email: faker.internet.email({
			provider: options?.provider !== undefined ? options.provider : 'gmail.com',
			firstName: options?.sameDetails && options?.sex ? newUser.firstName : undefined,
			lastName: options?.sameDetails ? newUser.lastName : undefined
		})
	};
};

export const fethching = async (url: string): Promise<UserRegister> => {
	const randomNumber = faker.number.int({ min: 1, max: 100 });
	// console.log(randomNumber);
	const userFromDummyJSON = await fetch(`${url}/users/${randomNumber}`)
		.then((response) => {
			if (response.ok) {
				const reply = response.json();
				console.log(reply);
				return reply;
			} else {
				return Promise.reject(console.log('rejected'));
			}
		})
		.then((data) => {
			const { email, password, firstName, lastName } = data;
			
			if (email && password && firstName && lastName) {
				const validUser:UserRegister = {
					email,
					firstName,
					lastName,
					password
				}
				return Promise.resolve(validUser);
			} else {
				return Promise.reject(console.log('that property doesnt exist in this data'));
			}
		});

	// const response = await fetch(`${url}/users/${randomNumber}`);
	// const userFromDummyJSON = await response.json();

	// console.log(userFromDummyJSON);

	return new Promise((resolve, reject) => {
		if (userFromDummyJSON) {
			// console.log({
			// 	email: userFromDummyJSON.email,
			// 	password: userFromDummyJSON.password,
			// 	firstName: userFromDummyJSON.firstName,
			// 	lastName: userFromDummyJSON.lastName
			// });
			resolve({
				email: userFromDummyJSON.email,
				password: userFromDummyJSON.password,
				firstName: userFromDummyJSON.firstName,
				lastName: userFromDummyJSON.lastName
			});
		} else {
			reject(console.log('NOOPPE'));
		}
	});
};
