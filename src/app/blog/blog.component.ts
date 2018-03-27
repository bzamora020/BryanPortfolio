import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BlogService } from '../_services/blog/blog.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { baseUrl } from '../_services/httpBaseUrl/httpBaseUrl';


class Comment {
  
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


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})



export class BlogComponent implements OnInit {
  public blog: Blog;
  public headerID;
  public httpHead;


  constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient) { 
    this.route.params.subscribe((params) => {
      this.headerID = params.id;
    }
  )
  }

  ngOnInit() {
    this.blog = new Blog();
    this.http.get(baseUrl + '/blog/create', {
      headers: new HttpHeaders().set('headerID', this.headerID)
    })
    .subscribe((data: BlogInterface) => {
      this.blog = data;
      console.log(this.blog);
    }
  )
  }

}
