import {Injectable} from "@angular/core";
import {Post} from "./post";

@Injectable()
export class PostService {
    private posts: Post[];

    constructor() {
        let post = new Post();
        post.title = "Initial Post";
        this.posts = [];
        this.posts.push(post);
    }

    public getPosts(): Post[] {
        return this.posts;
    }
}