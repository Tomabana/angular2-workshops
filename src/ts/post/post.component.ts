import {Component, OnInit} from "@angular/core";
import {PostService} from "../shared/post.service";
import {ActivatedRoute, Router, Params} from "@angular/router";
import {Post} from "../shared/post";

@Component({
    selector: "post",
    templateUrl: "/src/html/post.html",
})
export class PostComponent implements OnInit {

    private static ID_ROUTE_PARAM: string = "id";
    private post: Post;

    constructor(private postService: PostService, private route: ActivatedRoute, private router: Router) {
    }

    public ngOnInit(): void {
        this.post = new Post();
        this.route.params.forEach((params: Params) => {
            if (params[PostComponent.ID_ROUTE_PARAM] !== undefined) {
                let id: number = +params[PostComponent.ID_ROUTE_PARAM];
                this.postService.getPost(id).subscribe(post => {
                    this.post = post;
                });
            } else {
                this.router.navigate(["/dashboard"]);
            }
        });
    }

}
