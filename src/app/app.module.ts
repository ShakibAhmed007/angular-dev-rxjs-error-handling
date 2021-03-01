import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { DemoErrorService } from "./demo-error.service";

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent, DemoErrorComponent],
  bootstrap: [AppComponent],
  providers: [DemoErrorService]
})
export class AppModule {}
