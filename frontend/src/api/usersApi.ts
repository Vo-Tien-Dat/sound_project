import { mockUser } from '../mock/mockUser';

export const usersApi = async () => {
	return await new Promise(resolve => {
		const timeOut: number = 3000;
		setTimeout(() => {
			resolve({
				data: {
					...mockUser
				}
			});
		}, timeOut);
	});
};
