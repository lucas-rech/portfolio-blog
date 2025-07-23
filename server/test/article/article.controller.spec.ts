import { Test, TestingModule } from '@nestjs/testing';
import { ArticleController } from '../../src/article/article.controller';


//TODO: Implement tests for ArticleController
describe('ArticleController', () => {
  let controller: ArticleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ArticleController],
    }).compile();

    controller = module.get<ArticleController>(ArticleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
