import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BlogService } from '../_services/blog/blog.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { baseUrl } from '../_services/httpBaseUrl/httpBaseUrl';
import { CommentService } from '../_services/comment/comment.service';

class Comment {
  name: String;
  message: String;
  discussionId: String;
  timeStamp: Date;
}

interface CommentInterface {
  name: String;
  message: String;
  discussionId: String;
  timeStamp: Date;
}

class Blog {
  author: String;
  journal: String;
  id: String;
  timeStamp: Date;
}
interface BlogInterface {
  author: String;
  journal: String;
  id: String;
  timeStamp: Date;
}
interface ServerResponse {
  type: boolean;
  data: any;
}


@Component({
  selector: 'app-admin-blog',
  templateUrl: './admin-blog.component.html',
  styleUrls: ['./admin-blog.component.css']
})



export class AdminBlogComponent implements OnInit {
  public blog: Blog;
  public comment: Comment;
  public headerID;
  public httpHead;
  public changeComments;
  public newComment: Comment;


  constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient, private commentService: CommentService) {
    this.route.params.subscribe((params) => {
      this.headerID = params.id;
      this.pullData();
    }
    )

  }

  ngOnInit() { }

  pullData() {
    const headers = new HttpHeaders().set('ID', this.headerID);

    this.blog = new Blog();
    this.http.get(baseUrl + '/blog/create', {
      headers: new HttpHeaders().set('headerID', this.headerID)
    })
      .subscribe((data: BlogInterface) => {
        this.blog = data;
        console.log(this.blog);
      }
      )
    this.http.get(baseUrl + '/blog/comments', { headers })
      .subscribe((data: CommentInterface) => {
        this.comment = data;
        this.changeComments = this.comment;
        console.log(this.comment);
      })
    this.comment = new Comment;
    this.newComment = new Comment;

  }


  onSubmit() {
    this.newComment.discussionId = this.headerID;
    console.log(this.newComment);
    this.commentService.comment(this.newComment)
      .subscribe((res: ServerResponse) => {
        this.newComment = new Comment();
        if (Error) {
          throw Error;
        }
        console.log(res);
      });
  }
}
