import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';

// service
import { PostsService } from '../../Services/Posts/posts.service';
import { UsersService } from '../../Services/Users/users.service';
import { StoresService } from '../../Services/Stores/stores.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  postsData: any;
  usersData: any;
  storesData: any;
  isLoading: boolean = true;
  errorFound: boolean = false;

  constructor(
    private postService: PostsService,
    private userService: UsersService,
    private storeService: StoresService
  ) {}

  ngOnInit() {
    let posts = this.postService.GetAllPosts(
      'https://localhost:5001/api/Posts/get-all-posts'
    );
    let users = this.userService.GetAllUsers(
      'https://localhost:5001/api/Users/all-users'
    );
    let stores = this.storeService.getAllStores(
      'https://localhost:5001/api/Stores/get-all-stores'
    );

    forkJoin([posts, users, stores]).subscribe(
      (results) => {
        this.postsData = results[0].data;
        this.usersData = results[1].data;
        this.storesData = results[2].data;
      },
      (err) => {
        console.log(err);
      }
    );
    /* this.httpService
      .GetAllPosts('https://localhost:5001/api/Posts/get-all-posts')
      .subscribe(
        (response) => {
         const {data} = response;
         this.someData = data;
          console.log(JSON.stringify(data));
        },
        (err) => {
          console.log(err);
        },
        () => console.log('done')
      ); */
  }
}
