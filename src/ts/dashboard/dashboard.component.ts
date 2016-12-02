import {Component, OnInit} from "@angular/core";
import {Post} from "./post";
import {PostService} from "./post.service";

@Component({
    providers: [PostService],
    selector: "dashboard",
    templateUrl: "/src/html/dashboard.html",
})
export class DashboardComponent implements OnInit {
    private post: Post;
    private posts: Post[];

    constructor(private postService: PostService) {
        this.post = new Post();
    }

    public ngOnInit(): void {
        this.postService.getPosts().subscribe(posts => this.posts = posts);
    }

    public save(): void {
        this.postService.savePost(this.post).subscribe(post => {
            this.posts.unshift(post);
            this.post = new Post();
        });
    }

}
