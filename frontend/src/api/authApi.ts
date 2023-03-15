import axios from 'axios';
import { POST_URL_AUTH } from '../constant/constant';
import { User } from '../models/user';

const authApi = async (user: Required<Pick<User, 'userName' | 'password'>>) => {
	return await axios.post(POST_URL_AUTH, {
		userName: user.userName,
		password: user.password
	});
};

export default authApi;
