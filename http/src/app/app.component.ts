import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { Post } from './post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  loadedPosts: Post[] = [];
  firebaseUrl =
    'https://angular-course-8c9bb-default-rtdb.firebaseio.com/posts.json';
  isFetching = false;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchPosts();
  }

  onCreatePost(postData: Post) {
    // Send Http request
    this.http
      .post<{ name: string }>(this.firebaseUrl, postData)
      .subscribe((responseData) => console.log(responseData));
  }

  onFetchPosts() {
    // Send Http request
    this.fetchPosts();
  }

  onClearPosts() {
    // Send Http request
  }

  private fetchPosts() {
    this.isFetching = true;
    this.http
      .get<{ [k: string]: Post }>(this.firebaseUrl)
      .pipe(
        map((responseData) => {
          const postsArr: Post[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              postsArr.push({ ...responseData[key], id: key });
            }
          }
          return postsArr;
        })
      )
      .subscribe((posts) => {
        this.isFetching = false;
        this.loadedPosts = posts;
      });
  }
}
