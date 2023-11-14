import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tb01 } from '../models/tb01';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Tb01Service {

  url: string = '/api/tb01';
  constructor(
    private httpClient: HttpClient
  ) { }

  getAllTb01(): Observable<Tb01[]> {
    return this.httpClient.get<Tb01[]>(this.url);
  }
}
