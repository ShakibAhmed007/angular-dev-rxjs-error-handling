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
}
