import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';

class Credentials {
  email: string;
  password: string;
}

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  public credentials: Credentials;

  constructor() { }

  ngOnInit() {
    this.credentials = new Credentials();
  }

  onSubmit() {

    console.log(this.credentials)
  }
  }