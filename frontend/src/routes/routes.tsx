import { createBrowserRouter } from 'react-router-dom';
import Root from '../layouts/root';
import { Album } from '../pages/album';
import { Home } from '../pages/home';
import { Library } from '../pages/library';
import Login from '../pages/login';
import { Search } from '../pages/search';
import { SignUp } from '../pages/sign_up';
import { User } from '../pages/user';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		children: [
			{
				path: 'home',
				element: <Home />
			},
			{
				path: 'search',
				element: <Search />
			},
			{
				path: 'library',
				element: <Library />
			},
			{
				path: '/user/:id',
				element: <User />
			},
			{
				path: 'album/:id',
				element: <Album />
			}
		]
	},
	{
		path: '/login',
		element: <Login />
	},
	{
		path: '/sign-up',
		element: <SignUp />
	}
]);
