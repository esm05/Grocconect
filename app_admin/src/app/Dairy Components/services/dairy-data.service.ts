import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Grocconnect } from '../../models/grocconnect';

@Injectable({
  providedIn: 'root'
})
export class DairyDataService {

  constructor(private http: HttpClient) { }
  url = 'http://localhost:3000/api/dairy';

  getDairies(): Observable<Grocconnect[]> {
    
    return this.http.get<Grocconnect[]>(this.url);
  }

  addDairy(formData: Grocconnect): Observable<Grocconnect> {
      return this.http.post<Grocconnect>(this.url, formData)
  }

  getDairy(produceName: string): Observable<Grocconnect[]> {
    return this.http.get<Grocconnect[]>(this.url + '/' + produceName);
  }

  updateDairy(formData: Grocconnect): Observable<Grocconnect>{
    return this.http.put<Grocconnect>(this.url + '/' + formData.name, formData);
  }

  deleteDairy(produceName: string): Observable<Grocconnect[]> {
    return this.http.delete<Grocconnect[]>(this.url + '/' + produceName);
  }
}