import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";

@Injectable()
export class DemoErrorService {
  constructor() {}

  getHttpResponse(): Observable<Response> {
    const error = new HttpErrorResponse({ status: 500 });
    return throwError(error) as any;
  }
}
