export interface Article {
    id: number;
    title: string;
    contentUrl: string;
    postedAt: Date;
    updatedAt: Date;
    hidden: boolean;
}