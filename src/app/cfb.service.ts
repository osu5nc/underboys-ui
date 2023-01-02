import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CfbService {

  constructor(private httpClient: HttpClient) { }

  retrieveCFBData(): Observable<any> {
    const url = 'https://api.thescore.com/ncaaf/events?game_date.in=2023-01-02T05:00:00.000Z,2023-01-03T05:00:00.000Z&limit=-1&rpp=-1';
    return this.httpClient.get(url);
  }
}
