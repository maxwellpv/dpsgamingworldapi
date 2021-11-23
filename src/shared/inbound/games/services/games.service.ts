import { GamesServiceInterface } from '../domain/services/games.service.interface';
import { Injectable } from '@nestjs/common';
import { Game } from '../domain/entities/game.entity';
import { ExternalAPI } from '../../external-apis/domain/entities/external-api.entity';
import { ExternalAPIService } from '../../external-apis/services/external-api.service';
import fetch from 'node-fetch';
import { AuthResponse } from '../domain/entities/auth-response.entity';

@Injectable()
export class GamesService implements GamesServiceInterface {
  TWITCH_API_CREDENTIALS_URL =
    'https://id.twitch.tv/oauth2/token?client_id=8en9cck6wbdrkinl4i0oahhxf3ali1&client_secret=jh7gihohaly38ds1e0v98xcnntn7wr&grant_type=client_credentials';
  IGDB_GAMES_ENDPOINT = 'https://api.igdb.com/v4/games';

  constructor(private externalAPIService: ExternalAPIService) {}

  async findByGameName(name: string): Promise<Game[]> {
    if (name == null || name == '') {
      return null;
    }
    const result: string = await this.makeRequestToIGDB(
      'fields name, cover.url; search "' + name + '"; limit 10;',
    );
    return JSON.parse(result);
  }

  async findOne(id: string): Promise<Game> {
    if (id == null) return null;

    const result: string = await this.makeRequestToIGDB(
      'fields name, cover.url; where id=' + id + ';',
    );
    return JSON.parse(result);
  }

  async findRandomList(): Promise<Game[]> {
    const result: string = await this.makeRequestToIGDB(
      'fields name, cover.url; sort date desc; limit 10;',
    );
    return JSON.parse(result);
  }

  private async makeRequestToIGDB(requestBody: string): Promise<string> {
    const credentials: ExternalAPI = await this.getIGDBCredentials();

    const response = await fetch(this.IGDB_GAMES_ENDPOINT, {
      method: 'POST',
      body: requestBody,
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
        'Client-ID': '8en9cck6wbdrkinl4i0oahhxf3ali1',
        Authorization: credentials.token,
      },
    });

    return JSON.stringify(await response.json());
  }

  private async getNewIGDBCredentials(): Promise<void> {
    const response = await fetch(this.TWITCH_API_CREDENTIALS_URL, {
      method: 'POST',
      body: '',
      headers: { 'Content-Type': 'application/json; charset=UTF-8' },
    });

    if (response.ok && response.body !== null) {
      const responseObject: AuthResponse =
        (await response.json()) as AuthResponse;

      const newExternalAPI: ExternalAPI = {} as ExternalAPI;
      newExternalAPI.name = 'TWITCH_AUTH';

      const today: Date = new Date();
      const dayInMilliseconds: number = 1000 * 60 * 60 * 24;

      // We save one day before the real expire date just in case.
      const expiration: Date = new Date(
        today.getTime() + responseObject.expires_in * 1000 - dayInMilliseconds,
      );

      newExternalAPI.expirationDate = expiration;
      newExternalAPI.token =
        responseObject.token_type + ' ' + responseObject.access_token;

      await this.externalAPIService.create(newExternalAPI);
    }
  }
  private async getIGDBCredentials(): Promise<ExternalAPI> {
    let credentials: ExternalAPI = null;

    await this.externalAPIService.findByAPIName('TWITCH_AUTH').then((data) => {
      if (data.length > 0) {
        credentials = data[0];
      }
    });

    if (credentials == null) {
      await this.getNewIGDBCredentials();
    } else {
      const today: Date = new Date();

      if (today.getTime() >= credentials.expirationDate.getTime()) {
        await this.getNewIGDBCredentials();
        await this.externalAPIService
          .findByAPIName('TWITCH_AUTH')
          .then((data) => {
            if (data.length > 0) {
              credentials = data[0];
            }
          });
      }
    }

    return credentials;
  }
}
