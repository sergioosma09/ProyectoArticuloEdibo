import { Count, Filter, Where } from '@loopback/repository';
import { Article } from '../models';
import { ArticleRepository } from '../repositories';
export declare class GenArticleController {
    articleRepository: ArticleRepository;
    constructor(articleRepository: ArticleRepository);
    create(article: Article): Promise<Article>;
    count(where?: Where<Article>): Promise<Count>;
    find(filter?: Filter<Article>): Promise<Article[]>;
    updateAll(article: Article, where?: Where<Article>): Promise<Count>;
    findById(id: string): Promise<Article>;
    updateById(id: string, article: Article): Promise<void>;
    replaceById(id: string, article: Article): Promise<void>;
    deleteById(id: string): Promise<void>;
}
