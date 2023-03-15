import axios from 'axios';
import { POST_URL_ADD_FOLLOWED_USER, POST_URL_CREATE_USER } from '../constant/constant';
import { User } from '../models/user';

export const createdUserApi = async ( user : Required<Omit<User, "userId">> ) => {
	return await axios.post(POST_URL_CREATE_USER, {});
};

export const addFollowedUser = async ( user: Required<Pick<User, "userId">>) =>{
	return await axios.post(POST_URL_ADD_FOLLOWED_USER, {}); 
}







