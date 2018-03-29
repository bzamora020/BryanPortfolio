import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { CommentService } from '../app/_services/comment/comment.service';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { WorkComponent } from './work/work.component';
import { AdminComponent } from './admin/admin.component';
import { AuthService} from './_services/auth/auth.service';
import { BlogComponent } from './blog/blog.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminAboutComponent } from './admin-about/admin-about.component';
import { AdminWorkComponent } from './admin-work/admin-work.component';
import { AdminBlogComponent } from './admin-blog/admin-blog.component';
import { AdminContactComponent } from './admin-contact/admin-contact.component';
import { AuthGuard } from './_services/authguard/auth.guard';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    WorkComponent,
    AdminComponent,
    BlogComponent,
    AdminHomeComponent,
    AdminAboutComponent,
    AdminWorkComponent,
    AdminBlogComponent,
    AdminContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    AuthService,
    AuthGuard,
    CommentService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
