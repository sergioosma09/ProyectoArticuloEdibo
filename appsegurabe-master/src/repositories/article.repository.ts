import {DefaultCrudRepository} from '@loopback/repository';
import {Article, ArticleRelations} from '../models';
import {DsArticleDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class ArticleRepository extends DefaultCrudRepository<
  Article,
  typeof Article.prototype.id,
  ArticleRelations
> {
  constructor(
    @inject('datasources.dsArticle') dataSource: DsArticleDataSource,
  ) {
    super(Article, dataSource);
  }
}
