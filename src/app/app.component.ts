import { Component, OnInit, VERSION } from "@angular/core";
import { of, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { DemoErrorService } from "./demo-error.service";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  name = "Angular " + VERSION.major;

  constructor(private errService: DemoErrorService) {}

  ngOnInit(): void {}

  /*
   * Error handling in subscribe block
   */
  // getErrorResponse() {
  //   this.errService
  //     .getHttpErrorResponse()
  //     .subscribe(
  //       res => console.log("Http response ---> ", res),
  //       err => console.log("Http error ---> ", err),
  //       () => console.log("Http Request completed")
  //     );
  // }

  /**
   * Error handling using pipe,catchError and return an empty observable using of
   */
  // getErrorResponse() {
  //   this.errService
  //     .getHttpErrorResponse()
  //     .pipe(catchError(err => of([])))
  //     .subscribe(
  //       res => console.log("Http response ---> ", res),
  //       err => console.log("Http error ---> ", err),
  //       () => console.log("Http Request completed")
  //     );
  // }

  /**
   * Error handling using pipe,catchError and rethrow error
   */
  getErrorResponse() {
    this.errService
      .getHttpErrorResponse()
      .pipe(
        catchError(err => {
          console.log("Handling error locally and rethrowing it...", err);
          return throwError(err);
        })
      )
      .subscribe(
        res => console.log("Http response ---> ", res),
        err => console.log("Http error ---> ", err),
        () => console.log("Http Request completed")
      );
  }

  getSuccessResponse() {
    this.errService
      .getHttpSuccessResponse()
      .pipe(catchError(err => of([])))
      .subscribe(
        res => console.log("Http response ---> ", res),
        err => console.log("Http error ---> ", err),
        () => console.log("Http Request completed")
      );
  }
}
