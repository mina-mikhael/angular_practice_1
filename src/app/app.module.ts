import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { ServersComponent } from './components/servers/servers.component';
import { ServerComponent } from './components/server/server.component';

@NgModule({
  declarations: [AppComponent, ServersComponent, ServerComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
