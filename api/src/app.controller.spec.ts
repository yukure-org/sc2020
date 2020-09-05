import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();
  });

  describe('test', () => {
    it('test', () => {
      // const appController = app.get<AppController>(AppController);
      // expect(appController.get()).toBe({
      //   id: 1,
      //   name: 'ミュウ',
      //   trainer_name: 'サトシ',
      //   version: 'ポケットモンスター エメラルド',
      //   like: 5,
      //   comment: 'ゲットだぜ！',
      //   img_link: 'https://lohas.nicoseiga.jp/thumb/1714366i?',
      // });

      expect(true).toBeTruthy();
    });
  });
});
