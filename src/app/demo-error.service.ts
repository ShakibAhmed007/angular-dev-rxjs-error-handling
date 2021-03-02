import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError, of } from "rxjs";

@Injectable()
export class DemoErrorService {
  constructor() {}

  getHttpErrorResponse(): Observable<Response> {
    const error = new HttpErrorResponse({ status: 500 });
    return throwError(error) as any;
  }

  getHttpSuccessResponse(): Observable<any> {
    const response = {
     "name": "abc",
     "active": true,
    }

    let obs = new Observable(subscriber => {
      setTimeout(() => {
        subscriber.next(response);
        subscriber.complete();
      }, 1000);
    });
    return obs;
  }
}
