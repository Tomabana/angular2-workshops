import {Component} from "@angular/core";
import {Post} from "./post";

@Component({
    selector: "dashboard",
    templateUrl: "/src/html/dashboard.html",
})
export class DashboardComponent {
    private posts: Post[];

    constructor() {
        this.posts = [];
        let post = new Post();
        post.title = "Initial Post";
        this.posts.push(post);
    }
}
