import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscription, map } from 'rxjs';
import { Post } from './post.model';
import { PostsService } from './posts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  loadedPosts: Post[] = [];
  isFetching = false;
  error = null;
  errorSub: Subscription;

  constructor(private postsService: PostsService) {}

  ngOnInit() {
    this.errorSub = this.postsService.errorSubject.subscribe((err) => {
      this.error = err;
    });
    this.fetchPosts();
  }

  onCreatePost(postData: Post) {
    this.postsService
      .createAndStorePost(postData.title, postData.content)
      .subscribe(
        () => this.fetchPosts(),
        (err) => {
          this.isFetching = false;
          this.postsService.errorSubject.next(err.error.error);
        }
      );
  }

  onFetchPosts() {
    this.fetchPosts();
  }

  onClearPosts() {
    this.postsService.deletePosts().subscribe(() => {
      this.loadedPosts = [];
    });
  }

  private fetchPosts() {
    this.isFetching = true;
    this.postsService.fetchPosts().subscribe(
      (posts) => {
        this.isFetching = false;
        this.loadedPosts = posts;
      },
      (err) => {
        this.isFetching = false;
        this.postsService.errorSubject.next(err.error.error);
      }
    );
  }

  onHandleError(): void {
    this.postsService.errorSubject.next(null);
  }

  ngOnDestroy(): void {
    this.errorSub.unsubscribe();
  }
}
