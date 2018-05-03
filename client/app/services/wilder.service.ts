import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Wilder } from '../shared/models/wilder.model';

@Injectable()
export class WilderService {

  constructor(private http: HttpClient) { }

  getWilders(): Observable<Wilder[]> {
    return this.http.get<Wilder[]>('/api/wilders');
  }

  countWilders(): Observable<number> {
    return this.http.get<number>('/api/wilders/count');
  }

  addWilder(wilder: Wilder): Observable<Wilder> {
    return this.http.post<Wilder>('/api/wilder', wilder);
  }

  getWilder(wilder: Wilder): Observable<Wilder> {
    return this.http.get<Wilder>(`/api/wilder/${wilder._id}`);
  }

  editWilder(wilder: Wilder): Observable<string> {
    return this.http.put(`/api/wilder/${wilder._id}`, wilder, { responseType: 'text' });
  }

  deleteWilder(wilder: Wilder): Observable<string> {
    return this.http.delete(`/api/wilder/${wilder._id}`, { responseType: 'text' });
  }

}
