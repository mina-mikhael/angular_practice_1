import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { WarningAlertComponent } from './components/alerts/warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './components/alerts/success-alert/success-alert.component';

@NgModule({
  declarations: [AppComponent, WarningAlertComponent, SuccessAlertComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
