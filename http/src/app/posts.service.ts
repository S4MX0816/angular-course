import {
  HttpClient,
  HttpEventType,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from './post.model';
import { Subject, catchError, map, tap, throwError } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PostsService {
  private readonly firebaseUrl =
    'https://angular-course-8c9bb-default-rtdb.firebaseio.com/posts.json';
  errorSubject = new Subject<string>();

  constructor(private readonly http: HttpClient) {}

  createAndStorePost(title: string, content: string) {
    this.errorSubject.next(null);
    const postData: Post = { title, content };
    return this.http.post<{ name: string }>(this.firebaseUrl, postData, {
      observe: 'response',
    });
  }

  fetchPosts() {
    let searchParams = new HttpParams();
    searchParams = searchParams.append('print', 'pretty');
    searchParams = searchParams.append('custom', 'key');
    this.errorSubject.next(null);
    return this.http
      .get<{ [k: string]: Post }>(this.firebaseUrl, {
        headers: new HttpHeaders({ 'custom-header': 'Hello' }),
        params: searchParams,
      })
      .pipe(
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
    return this.http
      .delete(this.firebaseUrl, {
        observe: 'events',
      })
      .pipe(
        tap((event) => {
          if (event.type === HttpEventType.Sent) {
            // ...
          }
          if (event.type === HttpEventType.Response) {
            console.log(event.body);
          }
        })
      );
  }
}
