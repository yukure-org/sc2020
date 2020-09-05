import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  get(): object {
    return {
      id: 1,
      name: 'ミュウ',
      trainer_name: 'サトシ',
      version: 'ポケットモンスター エメラルド',
      like: 5,
      comment: 'ゲットだぜ！',
      img_link: 'https://lohas.nicoseiga.jp/thumb/1714366i?',
    };
  }

  index() {
    return [
      {
        id: 1,
        name: 'ミュウ',
        trainer_name: 'サトシ',
        version: 'ポケットモンスター エメラルド',
        like: 5,
        comment: 'ゲットだぜ！',
        img_link: 'https://lohas.nicoseiga.jp/thumb/1714366i?',
      },
      {
        id: 2,
        name: 'ミュウ',
        trainer_name: 'サトシ',
        version: 'ポケットモンスター ルビー',
        like: 50,
        comment: 'ゲットだぜ！',
        img_link: 'https://lohas.nicoseiga.jp/thumb/1714366i?',
      },
      {
        id: 3,
        name: 'ミュウ',
        trainer_name: 'サトシ',
        version: 'ポケットモンスター サファイア',
        like: 500,
        comment: 'ゲットだぜ！',
        img_link: 'https://lohas.nicoseiga.jp/thumb/1714366i?',
      },
    ];
  }
}
