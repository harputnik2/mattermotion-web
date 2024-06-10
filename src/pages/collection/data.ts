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
            url: '/media/photo/1.jpg'
        },
    }, {
        id: 2,
        name: "Visualization 2",
        description: "This is a visualization",
        poster: {
            url: '/media/photo/2.jpeg'
        },
    }, {
        id: 3,
        name: "Visualization 3",
        description: "This is a visualization",
        poster: {
            url: '/media/photo/3.jpeg'
        },
    }, {
        id: 4,
        name: "Visualization 4",
        description: "This is a visualization",
        poster: {
            url: '/media/photo/4.jpeg'
        },
    }, {
        id: 5,
        name: "Visualization 5",
        description: "This is a visualization",
        poster: {
            url: '/media/photo/5.jpeg'
        },
    }],
    [DataTypeKeys.ANIMATIONS]: [{
        id: 1,
        name: "Animation 1",
        description: "This is an animation",
        poster: {
            url: '/media/photo/6.jpeg'
        },
        animation: {
            url: '/media/video/00086400low_V!-0002.mp4'
        },
    }, {
        id: 2,
        name: "Animation 2",
        description: "This is an animation",
        poster: {
            url: '/media/photo/7.jpeg'
        },
        animation: {
            url: '/media/video/00086400low_V!-0002.mp4'
        },
    }, {
        id: 3,
        name: "Animation 3",
        description: "This is an animation",
        poster: {
            url: '/media/photo/8.jpeg'
        },
        animation: {
            url: '/media/video/00086400low_V!-0002.mp4'
        },
    }, {
        id: 4,
        name: "Animation 4",
        description: "This is an animation",
        poster: {
            url: '/media/photo/9.jpeg'
        },
        animation: {
            url: '/media/video/00086400low_V!-0002.mp4'
        },
    }
    ],
    [DataTypeKeys.VIRTUAL_TOURS]: [{
        id: 1,
        name: "Virtual Tour 1",
        description: "This is a virtual tour",
        poster: {
            url: '/media/photo/10.jpeg'
        },
        tourUrl: 'http://sky.easypano.com/virtual-tour/Quadrapol-Virtual-Tour-137020.html'
    }, ]
}