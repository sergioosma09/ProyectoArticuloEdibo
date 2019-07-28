import { Entity } from '@loopback/repository';
export declare class Article extends Entity {
    id?: string;
    author: string;
    title: string;
    journal: string;
    volume?: number;
    year: number;
    number?: number;
    articleNumber?: number;
    url?: string;
    issn?: string;
    abstract?: string;
    doi?: string;
    constructor(data?: Partial<Article>);
}
export interface ArticleRelations {
}
export declare type ArticleWithRelations = Article & ArticleRelations;
