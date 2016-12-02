import {Injectable} from "@angular/core";
import {Post} from "./post";
import {Observable} from "rxjs/Observable";
import {Http, Headers} from "@angular/http";

@Injectable()
export class PostService {
    private postsUrl = "http://localhost:3000/posts/";

    private posts: Post[];

    constructor(private http: Http) {
        let post = new Post();
        post.title = "Initial Post";
        this.posts = [];
        this.posts.push(post);
    }

    public getPosts(): Observable<Post[]> {
        return this.http.get(this.postsUrl + "?_sort=id&_order=DESC")
            .map(response => response.json())
            .catch(this.handleError);
    }

    public savePost(post: Post): Observable<Post> {
        let headers = new Headers({
            "Content-Type": "application/json",
        });
        return this.http.post(this.postsUrl, JSON.stringify(post), {headers})
            .map(res => res.json())
            .catch(this.handleError);
    }

    private handleError(error: any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : "Server error";
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}
