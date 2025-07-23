import { Injectable } from '@nestjs/common';
import { Article } from './interfaces/article.interface';

@Injectable()
export class ArticleService {
  // This is a mock implementation for testing purposes
  private readonly articles: Article[] = [];

  create(article: Article) {
    this.articles.push(article);
  }

  findAll(): Article[] {
    return this.articles;
  }
}