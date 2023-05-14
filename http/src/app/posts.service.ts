import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from './post.model';
import { Subject, catchError, map, throwError } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PostsService {
  private readonly firebaseUrl =
    'https://angular-course-8c9bb-default-rtdb.firebaseio.com/posts.json';
  errorSubject = new Subject<string>();

  constructor(private readonly http: HttpClient) {}

  createAndStorePost(title: string, content: string) {
    this.errorSubject.next(null);
    const postData: Post = { title, content };
    return this.http.post<{ name: string }>(this.firebaseUrl, postData);
  }

  fetchPosts() {
    this.errorSubject.next(null);
    return this.http.get<{ [k: string]: Post }>(this.firebaseUrl).pipe(
      map((responseData) => {
        const postsArr: Post[] = [];
        for (const key in responseData) {
          if (responseData.hasOwnProperty(key)) {
            postsArr.push({ ...responseData[key], id: key });
          }
        }
        return postsArr;
      }),
      catchError((errorResp) => {
        // e.g. Send data for analytics
        return throwError(errorResp);
      })
    );
  }

  deletePosts() {
    this.errorSubject.next(null);
    return this.http.delete(this.firebaseUrl);
  }
}
