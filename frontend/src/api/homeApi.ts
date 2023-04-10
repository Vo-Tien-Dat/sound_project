import axios from 'axios';
import { time } from 'console';
import { GET_URL_PAGE_HOME } from '../constant/constant';

export const homeApi = async () => {
	const res = new Promise(resolve => {
		const timeOut: number = 1000;
		setTimeout(() => {
			resolve({
				test: 'hello world'
			});
		}, timeOut);
	});

	const accessToken = window.localStorage.getItem('access_token');
	const request = axios.get(GET_URL_PAGE_HOME, {
		headers: {
			access_token: accessToken
		}
	});
	return await request;
};
