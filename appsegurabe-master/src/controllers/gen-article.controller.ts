import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getWhereSchemaFor,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import { Article } from '../models';
import { ArticleRepository } from '../repositories';

export class GenArticleController {
  constructor(
    @repository(ArticleRepository)
    public articleRepository: ArticleRepository,
  ) { }

  @post('/articles/create', {
    responses: {
      '200': {
        description: 'Article model instance',
        content: { 'application/json': { schema: { 'x-ts-type': Article } } },
      },
    },
  })
  async create(@requestBody() article: Article): Promise<Article> {
    return await this.articleRepository.create(article);
  }

  @get('/articles/count', {
    responses: {
      '200': {
        description: 'Article model count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Article)) where?: Where<Article>,
  ): Promise<Count> {
    return await this.articleRepository.count(where);
  }

  @get('/articles/list', {
    responses: {
      '200': {
        description: 'Array of Article model instances',
        content: {
          'application/json': {
            schema: { type: 'array', items: { 'x-ts-type': Article } },
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Article)) filter?: Filter<Article>,
  ): Promise<Article[]> {
    return await this.articleRepository.find(filter);
  }

  @patch('/articles/update', {
    responses: {
      '200': {
        description: 'Article PATCH success count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async updateAll(
    @requestBody() article: Article,
    @param.query.object('where', getWhereSchemaFor(Article)) where?: Where<Article>,
  ): Promise<Count> {
    return await this.articleRepository.updateAll(article, where);
  }

  @get('/articles/read/{id}', {
    responses: {
      '200': {
        description: 'Article model instance',
        content: { 'application/json': { schema: { 'x-ts-type': Article } } },
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<Article> {
    return await this.articleRepository.findById(id);
  }

  @patch('/articles/update/{id}', {
    responses: {
      '204': {
        description: 'Article PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody() article: Article,
  ): Promise<void> {
    await this.articleRepository.updateById(id, article);
  }

  @put('/articles/{id}', {
    responses: {
      '204': {
        description: 'Article PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() article: Article,
  ): Promise<void> {
    await this.articleRepository.replaceById(id, article);
  }

  @del('/articles/delete/{id}', {
    responses: {
      '204': {
        description: 'Article DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.articleRepository.deleteById(id);
  }
}
