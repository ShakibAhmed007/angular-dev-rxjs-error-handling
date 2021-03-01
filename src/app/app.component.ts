import { Component, OnInit, VERSION } from "@angular/core";
import { DemoErrorService } from "./demo-error.service";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  name = "Angular " + VERSION.major;

  constructor(private errService: DemoErrorService) {}

  ngOnInit(): void {
    this.errService
      .getHttpResponse()
      .subscribe(
        res => console.log(res),
        err => console.log(err),
        () => console.log("Http Response completed")
      );
  }
}
