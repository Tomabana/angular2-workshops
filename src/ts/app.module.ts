import {AppComponent} from "./app.component";
import "./rxjs-extensions";
import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {HttpModule} from "@angular/http";

@NgModule({
    bootstrap: [AppComponent],
    declarations: [AppComponent, DashboardComponent],
    imports: [BrowserModule, HttpModule],
})
export class AppModule {
}
