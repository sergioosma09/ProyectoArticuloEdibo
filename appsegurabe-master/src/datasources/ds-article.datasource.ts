import {inject} from '@loopback/core';
import {juggler} from '@loopback/repository';
import * as config from './ds-article.datasource.json';

export class DsArticleDataSource extends juggler.DataSource {
  static dataSourceName = 'dsArticle';

  constructor(
    @inject('datasources.config.dsArticle', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
