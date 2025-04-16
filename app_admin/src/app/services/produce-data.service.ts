import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Produce } from '../models/produce';

@Injectable({
  providedIn: 'root'
})
export class ProduceDataService {

  constructor(private http: HttpClient) { }
  url = 'http://localhost:3000/api/produces';

  getProduces(): Observable<Produce[]> {
    
    return this.http.get<Produce[]>(this.url);
  }

  addProduce(formData: Produce): Observable<Produce> {
      return this.http.post<Produce>(this.url, formData)
  }

  getProduce(produceName: string): Observable<Produce[]> {
    return this.http.get<Produce[]>(this.url + '/' + produceName);
  }

  updateProduce(formData: Produce): Observable<Produce>{
    return this.http.put<Produce>(this.url + '/' + formData.name, formData);
  }
}
