import {AppComponent} from "./app.component";
import "./rxjs-extensions";
import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";

@NgModule({
    bootstrap: [AppComponent],
    declarations: [AppComponent, DashboardComponent],
    imports: [BrowserModule, FormsModule, HttpModule],
})
export class AppModule {
}
