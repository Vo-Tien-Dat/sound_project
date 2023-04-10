import { User } from 'src/models/interface/user.interface';

type cardUser = Pick<User, 'userId' | 'name'>;
interface Card {
    id: string;
    srcImage: string;
    name: string;
    author?: string | cardUser[];
    authorJob?: string;
}

interface Content {
    title: string;
    cards: Card[];
}

const contents: Content[] = [
    {
        title: 'More like Taylor Swift',
        cards: [
            {
                id: '1',
                srcImage: '',
                name: 'Dreamers',
                author: [
                    {
                        userId: '1',
                        name: 'Jung Kook',
                    },
                    {
                        userId: '2',
                        name: 'BTS',
                    },
                ],
            },
        ],
    },
    {
        title: 'More like Taylor Swift',
        cards: [
            {
                id: '1',
                srcImage: '',
                name: 'Dreamers',
                author: [
                    {
                        userId: '1',
                        name: 'Jung Kook',
                    },
                    {
                        userId: '2',
                        name: 'BTS',
                    },
                ],
            },
        ],
    },
    {
        title: 'Recommend Radio',
        cards: [
            {
                id: '1',
                srcImage: '',
                name: 'Dreamers',
                author: [
                    {
                        userId: '1',
                        name: 'Jung Kook',
                    },
                    {
                        userId: '2',
                        name: 'BTS',
                    },
                ],
            },
        ],
    },
];

export class mockApi {
    create() {
        return {
            contents: [
                {
                    title: 'More like Taylor Swift',
                    albums: [
                        {
                            albumId: '1',
                            albumName: 'Dreamers',
                            albumAuthor: 'Jung Kook , BTS',
                        },
                        {
                            albumId: '2',
                            albumName: '22',
                            albumAuthor: 'MOMO',
                        },
                        {
                            albumId: '3',
                            albumName: 'Set Me Free Pt.2',
                            albumAuthor: 'Jimin',
                        },
                    ],
                },
                {
                    title: 'Recommended radio',
                    albums: [
                        {
                            albumId: '1',
                            albumName: 'Dreamers',
                            albumAuthor: 'Jung Kook , BTS',
                        },
                        {
                            albumId: '2',
                            albumName: '22',
                            albumAuthor: 'MOMO',
                        },
                        {
                            albumId: '3',
                            albumName: 'Set Me Free Pt.2',
                            albumAuthor: 'Jimin',
                        },
                    ],
                },
                {
                    title: 'Best of artist',
                    albums: [
                        {
                            albumId: '1',
                            albumName: 'Dreamers',
                            albumAuthor: 'Jung Kook , BTS',
                        },
                        {
                            albumId: '2',
                            albumName: '22',
                            albumAuthor: 'MOMO',
                        },
                        {
                            albumId: '3',
                            albumName: 'Set Me Free Pt.2',
                            albumAuthor: 'Jimin',
                        },
                    ],
                },
                {
                    title: 'Mood',
                    albums: [
                        {
                            albumId: '1',
                            albumName: 'Dreamers',
                            albumAuthor: 'Jung Kook , BTS',
                        },
                        {
                            albumId: '2',
                            albumName: '22',
                            albumAuthor: 'MOMO',
                        },
                        {
                            albumId: '3',
                            albumName: 'Set Me Free Pt.2',
                            albumAuthor: 'Jimin',
                        },
                        {
                            albumId: '1',
                            albumName: 'Dreamers',
                            albumAuthor: 'Jung Kook , BTS',
                        },
                        {
                            albumId: '2',
                            albumName: '22',
                            albumAuthor: 'MOMO',
                        },
                        {
                            albumId: '3',
                            albumName: 'Set Me Free Pt.2',
                            albumAuthor: 'Jimin',
                        },
                    ],
                },
            ],
        };
    }
}
