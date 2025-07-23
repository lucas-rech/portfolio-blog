import { Body, Controller, Get, Post } from '@nestjs/common';
import { ArticleService } from './article.service';
import { Article } from './interfaces/article.interface';

@Controller('article')
export class ArticleController {
    constructor(private articleService: ArticleService) {
    }

    @Post()
    async create(@Body() article: Article): Promise<void> {
        this.articleService.create(article);
    }

    @Get()
    hello(): string {
        return JSON.stringify({
            message: 'Hello from ArticleController'});
    }

    @Get('all')
    async findAll(): Promise<Article[]> {
        return this.articleService.findAll();
    }
}
