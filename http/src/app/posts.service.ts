import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from './post.model';
import { map } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PostsService {
  private readonly firebaseUrl =
    'https://angular-course-8c9bb-default-rtdb.firebaseio.com/posts.json';
  constructor(private readonly http: HttpClient) {}

  createAndStorePost(title: string, content: string) {
    const postData: Post = { title, content };
    return this.http.post<{ name: string }>(this.firebaseUrl, postData);
  }

  fetchPosts() {
    return this.http.get<{ [k: string]: Post }>(this.firebaseUrl).pipe(
      map((responseData) => {
        const postsArr: Post[] = [];
        for (const key in responseData) {
          if (responseData.hasOwnProperty(key)) {
            postsArr.push({ ...responseData[key], id: key });
          }
        }
        return postsArr;
      })
    );
  }

  deletePosts() {
    return this.http.delete(this.firebaseUrl);
  }
}
