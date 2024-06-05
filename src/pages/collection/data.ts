export enum DataTypeKeys {
    VISUALIZATIONS = 'visualizations',
    ANIMATIONS = 'animations',
    VIRTUAL_TOURS = 'virtualTours',
}


export type CollectionType = {
    id: number;
    name: string;
    description: string;
    poster: {
        url: string;
    }
    animation?: {
        url: string;
    }
    tourUrl?: string;
}

export type DataType = {
    [DataTypeKeys.VISUALIZATIONS]: CollectionType[],
    [DataTypeKeys.ANIMATIONS]: CollectionType[],
    [DataTypeKeys.VIRTUAL_TOURS]: CollectionType[],
}

export const data: DataType = {
    [DataTypeKeys.VISUALIZATIONS]: [{
        id: 1,
        name: "Visualization 1",
        description: "This is a visualization",
        poster: {
            url: '/media/photo/Project_20211216_0009.jpeg'
        }
    },
        {
            id: 2,
            name: "Visualization 2",
            description: "This is a visualization 2",
            poster: {
                url: '/media/photo/Project_20211216_0002.jpeg'
            }
        },
    ],
    [DataTypeKeys.ANIMATIONS]: [{
        id: 1,
        name: "Animation 1",
        description: "This is an animation",
        animation: {
            url: '/media/video/00086400low_V!-0002.mp4'
        },
        poster: {
            url: '/media/photo/Project_20211216_0002.jpeg'
        }
    },
        {
            id: 2,
            name: "Animation 2",
            description: "This is an animation",
            animation: {
                url: '/media/video/00086400low_V!-0002.mp4'
            },
            poster: {
                url: '/media/photo/Project_20211216_0002.jpeg'
            }
        },
    ],
    [DataTypeKeys.VIRTUAL_TOURS]: [{

        id: 1,
        name: "Virtual Tour 1",
        description: "This is a virtual tour",
        poster: {
            url: '/media/photo/Project_20211216_0009.jpeg'
        },
        tourUrl: 'http://sky.easypano.com/virtual-tour/Quadrapol-Virtual-Tour-137020.html'
    }, ]
}