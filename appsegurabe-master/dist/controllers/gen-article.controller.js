"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let GenArticleController = class GenArticleController {
    constructor(articleRepository) {
        this.articleRepository = articleRepository;
    }
    async create(article) {
        return await this.articleRepository.create(article);
    }
    async count(where) {
        return await this.articleRepository.count(where);
    }
    async find(filter) {
        return await this.articleRepository.find(filter);
    }
    async updateAll(article, where) {
        return await this.articleRepository.updateAll(article, where);
    }
    async findById(id) {
        return await this.articleRepository.findById(id);
    }
    async updateById(id, article) {
        await this.articleRepository.updateById(id, article);
    }
    async replaceById(id, article) {
        await this.articleRepository.replaceById(id, article);
    }
    async deleteById(id) {
        await this.articleRepository.deleteById(id);
    }
};
__decorate([
    rest_1.post('/articles/create', {
        responses: {
            '200': {
                description: 'Article model instance',
                content: { 'application/json': { schema: { 'x-ts-type': models_1.Article } } },
            },
        },
    }),
    __param(0, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.Article]),
    __metadata("design:returntype", Promise)
], GenArticleController.prototype, "create", null);
__decorate([
    rest_1.get('/articles/count', {
        responses: {
            '200': {
                description: 'Article model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Article))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], GenArticleController.prototype, "count", null);
__decorate([
    rest_1.get('/articles/list', {
        responses: {
            '200': {
                description: 'Array of Article model instances',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: { 'x-ts-type': models_1.Article } },
                    },
                },
            },
        },
    }),
    __param(0, rest_1.param.query.object('filter', rest_1.getFilterSchemaFor(models_1.Article))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], GenArticleController.prototype, "find", null);
__decorate([
    rest_1.patch('/articles/update', {
        responses: {
            '200': {
                description: 'Article PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.requestBody()),
    __param(1, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Article))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.Article, Object]),
    __metadata("design:returntype", Promise)
], GenArticleController.prototype, "updateAll", null);
__decorate([
    rest_1.get('/articles/read/{id}', {
        responses: {
            '200': {
                description: 'Article model instance',
                content: { 'application/json': { schema: { 'x-ts-type': models_1.Article } } },
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], GenArticleController.prototype, "findById", null);
__decorate([
    rest_1.patch('/articles/update/{id}', {
        responses: {
            '204': {
                description: 'Article PATCH success',
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __param(1, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, models_1.Article]),
    __metadata("design:returntype", Promise)
], GenArticleController.prototype, "updateById", null);
__decorate([
    rest_1.put('/articles/{id}', {
        responses: {
            '204': {
                description: 'Article PUT success',
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __param(1, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, models_1.Article]),
    __metadata("design:returntype", Promise)
], GenArticleController.prototype, "replaceById", null);
__decorate([
    rest_1.del('/articles/delete/{id}', {
        responses: {
            '204': {
                description: 'Article DELETE success',
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], GenArticleController.prototype, "deleteById", null);
GenArticleController = __decorate([
    __param(0, repository_1.repository(repositories_1.ArticleRepository)),
    __metadata("design:paramtypes", [repositories_1.ArticleRepository])
], GenArticleController);
exports.GenArticleController = GenArticleController;
//# sourceMappingURL=gen-article.controller.js.map