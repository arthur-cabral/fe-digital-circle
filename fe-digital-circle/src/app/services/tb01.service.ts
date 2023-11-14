import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tb01 } from '../models/tb01/tb01';
import { Observable } from 'rxjs';
import { PaginationParameters } from '../models/pagination/PaginationParameters';

@Injectable({
  providedIn: 'root'
})
export class Tb01Service {

  url: string = '/api/tb01';
  constructor(
    private httpClient: HttpClient
  ) { }

  getAllTb01(paginationParameters: PaginationParameters): Observable<Tb01[]> {
    return this.httpClient.get<Tb01[]>(this.url + '?PageNumber=' + paginationParameters.PageNumber + '&PageSize=' + paginationParameters.PageSize);
  }

  count(): Observable<number> {
    return this.httpClient.get<number>(this.url + '/count');
  }

  createTb01(tb01: Tb01): Observable<Tb01> {
    return this.httpClient.post<Tb01>(this.url + '/create', tb01);
  }

  updateTb01(tb01: Tb01): Observable<Tb01> {
    return this.httpClient.post<Tb01>(this.url + '/update', tb01);
  }

  deleteTb01(tb01: Tb01): Observable<Tb01> {
    return this.httpClient.post<Tb01>(this.url + '/delete', tb01);
  }
}
