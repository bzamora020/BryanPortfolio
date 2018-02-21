import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

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

  constructor(private router: Router, public pepe: HttpClient) { }

  ngOnInit() {

  }
  onSubmit() {
    const payload = {
      sealName: 'Bryan',
      email: this.email,
      firstName: this.first,
      lastName: this.last,
      content: this.message,

    };
    console.log(payload)
    this.pepe.post('https://seals-server.herokuapp.com' + '/contact-seals', payload)
      .subscribe((res) => {
        console.log(res)
      }, (err) => {
        console.log(err);
      })
  }

}
