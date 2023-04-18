import React, { useState, useEffect } from 'react';

const useConnection = () => {
	const [isOnline, setIsOnline] = useState<boolean>(navigator.onLine);

	useEffect(() => {
		const handleStatusChange = () => {
			setIsOnline(navigator.onLine);
		};

		window.addEventListener('online', handleStatusChange);

		window.addEventListener('offline', handleStatusChange);

		return () => {
			window.removeEventListener('online', handleStatusChange);
			window.removeEventListener('offline', handleStatusChange);
		};
	}, [isOnline]);
	return isOnline;
};

export default useConnection;
