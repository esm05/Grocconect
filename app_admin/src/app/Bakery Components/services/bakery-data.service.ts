import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Grocconnect } from '../../models/grocconnect';

@Injectable({
  providedIn: 'root'
})
export class BakeryDataService {

  constructor(private http: HttpClient) { }
  url = 'http://localhost:3000/api/bakery';

  getBakeries(): Observable<Grocconnect[]> {
    
    return this.http.get<Grocconnect[]>(this.url);
  }

  addBakery(formData: Grocconnect): Observable<Grocconnect> {
      return this.http.post<Grocconnect>(this.url, formData)
  }

  getBakery(bakeryName: string): Observable<Grocconnect[]> {
    return this.http.get<Grocconnect[]>(this.url + '/' + bakeryName);
  }

  updateBakery(formData: Grocconnect): Observable<Grocconnect>{
    return this.http.put<Grocconnect>(this.url + '/' + formData.name, formData);
  }

  deleteBakery(bakeryName: string): Observable<Grocconnect[]> {
    return this.http.delete<Grocconnect[]>(this.url + '/' + bakeryName);
  }
}
