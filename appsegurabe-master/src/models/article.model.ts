import {Entity, model, property} from '@loopback/repository';

@model({settings: {}})
export class Article extends Entity {
  @property({
    type: 'string',
    id: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  author: string;

  @property({
    type: 'string',
    required: true,
  })
  title: string;

  @property({
    type: 'string',
    required: true,
  })
  journal: string;

  @property({
    type: 'number',
  })
  volume?: number;

  @property({
    type: 'number',
    required: true,
  })
  year: number;

  @property({
    type: 'number',
  })
  number?: number;

  @property({
    type: 'number',
  })
  articleNumber?: number;

  @property({
    type: 'string',
  })
  url?: string;

  @property({
    type: 'string',
  })
  issn?: string;

  @property({
    type: 'string',
  })
  abstract?: string;

  @property({
    type: 'string',
  })
  doi?: string;


  constructor(data?: Partial<Article>) {
    super(data);
  }
}

export interface ArticleRelations {
  // describe navigational properties here
}

export type ArticleWithRelations = Article & ArticleRelations;
