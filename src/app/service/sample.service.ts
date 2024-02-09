import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Example } from '../example';

@Injectable({
  providedIn: 'root'
})
export class SampleService {

  url = 'http://10.16.65.83:8090/cdoApi/ping';
  clientURL = 'http://10.16.65.83:8090/cdoApi/session2';

  constructor(private http: HttpClient) {
  }

  getExamples(): Observable<Example> {
    return this.http.get<Example>(this.url).pipe(catchError(this.processError));
  }

  getClientInfo(session: string){
    const headers = new HttpHeaders().set('PCE_Session', session);
    return this.http.get(this.clientURL, {'headers': headers});
  }

  processError(err: any) {
    let message = '';
    if (err.error instanceof ErrorEvent) {
      message = err.error.message;
    } else {
      message = `Error Code: ${err.status}\nMessage: ${err.message}`;
    }
    console.log("Message: ", message);
    return throwError(() => {
      message;
    });
  }
}