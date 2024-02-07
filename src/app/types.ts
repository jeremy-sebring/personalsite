export interface PostProps {
    params: {
        slug: string
    },
    searchParams: object
}


export interface Card {
    title: string
    className?: string
    icon?: {
        altTxt: string
        image: object
    }
    content?: string
    
}

export type WorkHistoryCard = {
    title: string;
    cardTitle: string;
    url: string;
    cardSubtitle: string;
    cardDetailedText: string;
    media: {
        type: string;
        source: {
            url: string;
        };
    };
};