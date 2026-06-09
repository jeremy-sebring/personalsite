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

export type APIResponse = {
    status: "success" | "error" | "KEEP OUT!";
    data: object | null;
}