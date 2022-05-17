import { Injectable } from '@angular/core';
import { Observable, of, throwError, Subscription } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map ,retry} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SurveyService {

  baseUrl = 'http://127.0.0.1:8080';

  
  constructor(public http:HttpClient) { }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(error); // log to console instead  
      return of(result as T);
    };
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }



  createSurveydata(data:any) {

    let send = JSON.stringify(data);
  console.log("udpate working stringyfy",send);

      console.log("data recvd", send);
  
      return this.http.post<any>(`${this.baseUrl}/index.php`,{ send: send}).pipe(
        catchError(this.handleError('delete', []))
        
      );;
  
    }
  
}
