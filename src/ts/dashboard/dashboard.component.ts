import {Component, OnInit, OnDestroy} from "@angular/core";
import {Post} from "./post";
import {PostService} from "./post.service";
import {Observable} from "rxjs/Observable";
import {AnonymousSubscription} from "rxjs/Subscription";

@Component({
    providers: [PostService],
    selector: "dashboard",
    templateUrl: "/src/html/dashboard.html",
})
export class DashboardComponent implements OnInit, OnDestroy {

    private post: Post;
    private posts: Post[];
    private refreshDataSubscription: AnonymousSubscription;

    constructor(private postService: PostService) {
        this.post = new Post();
    }

    public ngOnInit(): void {
        this.refreshData();
    }

    public ngOnDestroy(): void {
        if (this.refreshDataSubscription) {
            this.refreshDataSubscription.unsubscribe();
        }
    }

    public save(): void {
        this.postService.savePost(this.post).subscribe(post => {
            this.posts.unshift(post);
            this.post = new Post();
        });
    }

    public deletePost(postToDelete: Post): void {
        this.postService.delete(postToDelete).subscribe(response => {
            if (response.status === 200) {
                this.posts = this.posts.filter(post => post !== postToDelete);
            }
        });
    }

    private refreshData(): void {
        this.postService.getPosts().subscribe(posts => {
            this.posts = posts;
            this.subscribeToData();
        });
    }

    private subscribeToData(): void {
        this.refreshDataSubscription = Observable.timer(2000).first().subscribe(() => this.refreshData());
    }
}
