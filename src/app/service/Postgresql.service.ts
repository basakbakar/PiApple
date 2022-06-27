import { Restaurant } from '../modals/restaurant';

import { Injectable } from '@angular/core';
// import axios from 'axios';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, retry, throwError, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
//Postgresql ile bağlantı kurulan servis kısmı. Backend'ten alınan link burada sonradan kullanılmak üzere tanımlanır.
export class PostgresqlService {
  apiURL = 'https://postgresql-backend.herokuapp.com';

  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  // HttpClient API get() method => Fetch employees list
  getUser(): Observable<Restaurant> {
    return this.http
      .get<Restaurant>(this.apiURL + '/restaurant')
      .pipe(retry(1), catchError(this.handleError));
  }

  // HttpClient API get() method => Fetch employee
  getUserId(id: any): Observable<Restaurant> {
    return this.http
      .get<Restaurant>(this.apiURL + '/restaurant/' + id)
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