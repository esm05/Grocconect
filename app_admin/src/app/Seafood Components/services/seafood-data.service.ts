import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Grocconnect } from '../../models/grocconnect';

@Injectable({
  providedIn: 'root'
})
export class SeafoodDataService {

  constructor(private http: HttpClient) { }
  url = 'http://localhost:3000/api/seafood';

  getSeafoods(): Observable<Grocconnect[]> {
    
    return this.http.get<Grocconnect[]>(this.url);
  }

  addSeafood(formData: Grocconnect): Observable<Grocconnect> {
      return this.http.post<Grocconnect>(this.url, formData)
  }

  getSeafood(seafoodName: string): Observable<Grocconnect[]> {
    return this.http.get<Grocconnect[]>(this.url + '/' + seafoodName);
  }

  updateSeafood(formData: Grocconnect): Observable<Grocconnect>{
    return this.http.put<Grocconnect>(this.url + '/' + formData.name, formData);
  }

  deleteSeafood(seafoodName: string): Observable<Grocconnect[]> {
    return this.http.delete<Grocconnect[]>(this.url + '/' + seafoodName);
  }
}
