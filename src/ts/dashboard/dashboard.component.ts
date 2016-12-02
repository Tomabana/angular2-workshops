import {Component, OnInit} from "@angular/core";
import {Post} from "./post";
import {PostService} from "./post.service";

@Component({
    providers: [PostService],
    selector: "dashboard",
    templateUrl: "/src/html/dashboard.html",
})
export class DashboardComponent implements OnInit {
    private posts: Post[];

    constructor(private postService: PostService) {
    }

    public ngOnInit(): void {
        this.posts = this.postService.getPosts();
    }

}
