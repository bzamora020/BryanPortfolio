import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { WorkComponent } from './work/work.component';
import { AdminComponent } from './admin/admin.component';
import { BlogComponent } from './blog/blog.component';

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
    path: 'blog',
    component: BlogComponent
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
