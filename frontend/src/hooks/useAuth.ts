import React, { useEffect, useState } from 'react';

const useAuth = (key: string) => {
	const authValue = sessionStorage.getItem(key);

	const handleStorageChange = (event: StorageEvent) => {
		console.log(event['key']);
		if (event['key'] === 'access_token') {
		}
	};
	window.addEventListener('storage', handleStorageChange);

	return authValue;
};

export default useAuth;
