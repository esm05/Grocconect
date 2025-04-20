import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Grocconnect } from '../../models/grocconnect';

@Injectable({
  providedIn: 'root'
})
export class GroceryDataService {

  constructor(private http: HttpClient) { }
  url = 'http://localhost:3000/api/grocery';

  getGroceries(): Observable<Grocconnect[]> {
    
    return this.http.get<Grocconnect[]>(this.url);
  }

  addGrocery(formData: Grocconnect): Observable<Grocconnect> {
      return this.http.post<Grocconnect>(this.url, formData)
  }

  getGrocery(groceryName: string): Observable<Grocconnect[]> {
    return this.http.get<Grocconnect[]>(this.url + '/' + groceryName);
  }

  updateGrocery(formData: Grocconnect): Observable<Grocconnect>{
    return this.http.put<Grocconnect>(this.url + '/' + formData.name, formData);
  }

  deleteGrocery(groceryName: string): Observable<Grocconnect[]> {
    return this.http.delete<Grocconnect[]>(this.url + '/' + groceryName);
  }
}
