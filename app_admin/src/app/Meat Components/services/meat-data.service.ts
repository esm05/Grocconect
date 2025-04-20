import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Grocconnect } from '../../models/grocconnect';

@Injectable({
  providedIn: 'root'
})
export class MeatDataService {

  constructor(private http: HttpClient) { }
  url = 'http://localhost:3000/api/meats';

  getMeats(): Observable<Grocconnect[]> {
    
    return this.http.get<Grocconnect[]>(this.url);
  }

  addMeat(formData: Grocconnect): Observable<Grocconnect> {
      return this.http.post<Grocconnect>(this.url, formData)
  }

  getMeat(meatName: string): Observable<Grocconnect[]> {
    return this.http.get<Grocconnect[]>(this.url + '/' + meatName);
  }

  updateMeat(formData: Grocconnect): Observable<Grocconnect>{
    return this.http.put<Grocconnect>(this.url + '/' + formData.name, formData);
  }

  deleteMeat(meatName: string): Observable<Grocconnect[]> {
    return this.http.delete<Grocconnect[]>(this.url + '/' + meatName);
  }
}
