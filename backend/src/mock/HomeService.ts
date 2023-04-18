export class HomeService {
    readUser(idUser: string) {
        return {
            src_image: '',
            name: '',
            is_followed: true,
            songs: [
                {
                    id: '1',
                    name: 'Adele',
                    listener: 10.01,
                    time: '10:04',
                },
            ],
            albums: [
                {
                    id: '1',
                    name: '30',
                },
                {
                    id: '1',
                    name: '30',
                },
                {
                    id: '1',
                    name: '30',
                },
            ],
            playlists: [
                {
                    id: '1',
                    name: 'This is Adele',
                    description: 'The essential tracks, all in one playlist',
                },
                {
                    id: '1',
                    name: 'This is Adele',
                    description: 'The essential tracks, all in one playlist',
                },
                {
                    id: '1',
                    name: 'This is Adele',
                    description: 'The essential tracks, all in one playlist',
                },
            ],
        };
    }
}
