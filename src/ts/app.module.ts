import {AppComponent} from "./app.component";
import "./rxjs-extensions";
import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
import {Routes, RouterModule} from "@angular/router";
import {PostComponent} from "./post/post.component";
import {PostService} from "./shared/post.service";

const routes: Routes = [
    {
        path: "",
        pathMatch: "full",
        redirectTo: "/dashboard",
    },
    {
        component: DashboardComponent,
        path: "dashboard",
    },
    {
        component: PostComponent,
        path: "post/:id",
    },
];

@NgModule({
    bootstrap: [AppComponent],
    declarations: [AppComponent, DashboardComponent, PostComponent],
    imports: [BrowserModule, FormsModule, HttpModule, RouterModule.forRoot(routes)],
    providers: [PostService],
})
export class AppModule {
}
