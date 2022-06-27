import { Orders } from './../modals/orders';

import { Injectable } from '@angular/core';
// import axios from 'axios';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, retry, throwError, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
//Mongo veritabanıyla bağlantı kurulan servis kısmı. Backend'ten alınan link burada sonradan kullanılmak üzere tanımlanır.
export class MongoService {
  apiURL = 'https://mongodab-backend.herokuapp.com/order';

  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  // HttpClient API get() method => Fetch employees list 
  getOrder(): Observable<Orders> {
    return this.http
      .get<Orders>(this.apiURL + '/allorders')
      .pipe(retry(1), catchError(this.handleError));
  }

  // HttpClient API get() method => Fetch employee
  getOrderId(id: any): Observable<Orders> {
    return this.http
      .get<Orders>(this.apiURL + '/allorders/' + id)
      .pipe(retry(1), catchError(this.handleError));
  }

  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }
}