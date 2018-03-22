import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
class Credentials {
  public first: string;
  public last: string;
  public email: string;
  public phoneNumber: string;
  public message: string;
}


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public email: string;
  public first: string;
  public last: string;
  public message: string;
  public credentials: Credentials;
  constructor(private router: Router, public pepe: HttpClient) { }

  ngOnInit() {
    this.credentials = new Credentials();
  }
  onSubmit() {
    console.log(this.credentials);
    this.pepe.post('http://localhost:3000' + '/twilioSubmit', this.credentials)
      .subscribe((res) => {
        console.log(res);
        this.credentials = new Credentials();
      }, (err) => {
        console.log(err);
      });
  }

}
