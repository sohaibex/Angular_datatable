import { PostModel } from './../models/Posts.model';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private url: string = 'https://jsonplaceholder.typicode.com/posts';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClientModule) { }

  create(post: PostModel): Observable<PostModel> {
    return this.http.post<PostModel>(this.url + '/posts/', JSON.stringify(post), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }

}
