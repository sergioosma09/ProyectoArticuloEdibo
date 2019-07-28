import { DefaultCrudRepository } from '@loopback/repository';
import { Article, ArticleRelations } from '../models';
import { DsArticleDataSource } from '../datasources';
export declare class ArticleRepository extends DefaultCrudRepository<Article, typeof Article.prototype.id, ArticleRelations> {
    constructor(dataSource: DsArticleDataSource);
}
