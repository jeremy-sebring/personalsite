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
    Title: string;
    Company: string;
    StartDate: string;
    EndDate: string;
    CompanyURL: string;
    CompanyDescription: string;
    Summary: string;
    Achievements: WorkHistoryAchievement[];
};

export type WorkHistoryAchievement = {
    text: string;
    isFeatured: boolean;
}