import { HomeComponent } from './home/home.component';
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent }   from './about/about.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostDetailComponent } from './post-detail/post-detail.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'post-list',
    component: PostListComponent
  },
  {
    path: 'posts/:id',
    component: PostDetailComponent
  }
 ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
