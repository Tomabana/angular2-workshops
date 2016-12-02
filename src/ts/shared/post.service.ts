import {Injectable} from "@angular/core";
import {Post} from "./post";
import {Observable} from "rxjs/Observable";
import {Http, Headers, Response} from "@angular/http";

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

    public getPost(id: number): Observable<Post> {
        return this.http.get(this.postsUrl + id)
            .map(response => response.json())
            .catch(this.handleError);
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

    public delete(post: Post): Observable<Response> {
        let headers = new Headers();
        headers.append("Content-Type", "application/json");

        return this.http.delete(this.postsUrl + post.id, {headers}).catch(this.handleError);
    }

    private handleError(error: any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : "Server error";
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}
