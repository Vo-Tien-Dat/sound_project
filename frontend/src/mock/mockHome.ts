interface Card {
	cardId: string;
	cardSrcImage: string;
	cardName: string;
}

interface Album {
	albumId: string;
	albumName: string;
	albumAuthor: string;
}
interface Content {
	label: string;
	album: Album[];
}

interface Home {
	content: Content[];
}

export const mockHome: Home = {
	content: [
		{
			label: '1',
			album: [
				{
					albumId: '1',
					albumName: 'This is Adele',
					albumAuthor: 'Adelet'
				}
			]
		},
		{
			label: 'test',
			album: [
				{
					albumId: '1',
					albumName: 'This is Adele',
					albumAuthor: 'Adelet'
				}
			]
		},
		{
			label: 'test',
			album: [
				{
					albumId: '1',
					albumName: 'This is Adele',
					albumAuthor: 'Adelet'
				}
			]
		},
		{
			label: 'test',
			album: [
				{
					albumId: '1',
					albumName: 'This is Adele',
					albumAuthor: 'Adelet'
				}
			]
		}
	]
};
