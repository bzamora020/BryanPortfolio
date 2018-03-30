import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  const LoggedIn : boolean;
  const token : any;
  constructor(private router: Router) { }

  ngOnInit() {
    this.token = localStorage.getItem('userToken')
    this.check()
  }
  check() {
    if (this.token = localStorage.getItem('userToken')) {
      this.LoggedIn = true
    } else {
      this.LoggedIn = false
    }
  }
  Logout(){
    localStorage.removeItem('userToken');
    this.router.navigate(['/admin/login']);
  }
}

}