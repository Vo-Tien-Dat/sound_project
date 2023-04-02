export const homeApi = async (searchValue: string) => {
	return await new Promise(resolve => {
		const timeOut: number = 5000;
		setTimeout(() => {
			resolve({
				contents: [
                    {
                        name: 'recently player',
                        albums: [
                            
                        ]
                    }
                ]
			});
		}, timeOut);
	});
};
