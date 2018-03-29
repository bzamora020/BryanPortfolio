import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { WorkComponent } from './work/work.component';
import { AdminComponent } from './admin/admin.component';
import { BlogComponent } from './blog/blog.component';

import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminAboutComponent } from './admin-about/admin-about.component';
import { AdminWorkComponent } from './admin-work/admin-work.component';
import { AdminBlogComponent } from './admin-blog/admin-blog.component';
import { AdminContactComponent } from './admin-contact/admin-contact.component';
import { AuthGuard } from './_services/authguard/auth.guard';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },

  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'work',
    component: WorkComponent
  },
  {
    path: 'admin/login',
    component: AdminComponent
  },
  {
    path: 'blog/:id',
    component: BlogComponent
  },
  {
    path: 'admin/home',
    component: AdminHomeComponent,
    canActivate : [AuthGuard]
  },

  {
    path: 'admin/about',
    component: AdminAboutComponent,
    canActivate : [AuthGuard]

  },
  {
    path: 'admin/contact',
    component: AdminContactComponent,
    canActivate : [AuthGuard]

  },
  {
    path: 'admin/work',
    component: AdminWorkComponent,
    canActivate : [AuthGuard]

  },
  {
    path: 'admin/blog/:id',
    component: AdminBlogComponent,
    canActivate : [AuthGuard]

  },

  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
