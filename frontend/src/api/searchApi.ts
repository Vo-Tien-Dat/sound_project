export const searchApi = async (searchValue: string) => {
	return await new Promise(resolve => {
		const timeOut: number = 5000;
		setTimeout(() => {
			resolve({
				songs: [
					{
						songId: 'ksdfkj',
						songName: 'Stranger by Nature',
						songAuthor: 'Adele',
						songTime: '3:02'
					},
					{
						songId: 'ksdfkj',
						songName: 'Stranger by Nature',
						songAuthor: 'Adele',
						songTime: '3:02'
					},
					{
						songId: 'ksdfkj',
						songName: 'Stranger by Nature',
						songAuthor: 'Adele',
						songTime: '3:02'
					}
				]
			});
		}, timeOut);
	});
};
