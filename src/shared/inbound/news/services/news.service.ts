import { Injectable } from '@nestjs/common';
import { NewsServiceInterface } from '../domain/services/news.service.interface';
import fetch from 'node-fetch';

@Injectable()
export class NewsService implements NewsServiceInterface {
  NEWS_API_URL = 'https://newsapi.org/v2/everything?q=';
  async findByTheme(theme: string): Promise<string> {
    if (theme == null || theme == '') {
      return null;
    }
    const response = await fetch(
      this.NEWS_API_URL +
        theme +
        '&language=es&apiKey=30a01aa6438d4782906f35bb2f136a91',
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json; charset=UTF-8',
        },
      },
    );

    return JSON.stringify(await response.json());
  }
}
