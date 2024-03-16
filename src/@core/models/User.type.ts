interface IUser {
	email: string;
	name: string;
}

export class User implements IUser {
	public email!: string;
	public name!: string;

	static Empty(): User {
		return new User({
			email: '',
			name: ''
		})
	}

	public constructor(init?: Partial<IUser>) {
		Object.assign(this, init);
	}
}
