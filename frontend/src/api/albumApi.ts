import { Album, AlbumSong } from '../models/album';

export const addAlbumFavorite = async (album: Required<Pick<Album, 'albumId'>>) => {
	return Promise.resolve({
		message: 'success'
	});
};

export const readAlbum = async (album: string) => {
	return await new Promise(resolve => {
		const timeOut: number = 5000;
		setTimeout(() => {
			resolve({
				albumId: 'hello',
				albumName: '30',
				isLiked: true,
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
