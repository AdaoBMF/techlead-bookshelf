import { PageNotFoundComponent } from './view/page-not-found/page-not-found.component';
import { LoginResolverGuard } from './guards/login-resolver.guard';
import { AuthResolverGuard } from './guards/auth-resolver.guard';
import { BookResolverGuard } from './guards/book-resolver.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './view/home/home.component';
import { AdminComponent } from './view/admin/admin.component';
import { UserComponent } from './view/user/user.component';
import { UploadComponent } from './view/upload/upload.component';

const routes: Routes = [

  { 
    path: 'admin/:mail', component: AdminComponent, 
    resolve: {loggedUser: LoginResolverGuard},
      canActivate: [AuthResolverGuard]
  },

  { 
    path: 'user/:mail', component: UserComponent,
    resolve: {loggedUser: LoginResolverGuard},
    canActivate: [AuthResolverGuard]
  },

  {
    path: 'upload/:mail', component: UploadComponent,
      resolve: { book: BookResolverGuard, loggedUser: LoginResolverGuard },      
      canActivate: [AuthResolverGuard]
  },

  {
    path: 'upload/:mail/:id', component: UploadComponent,
    resolve: { book: BookResolverGuard , loggedUser: LoginResolverGuard },
    canActivate: [AuthResolverGuard]
  },

  { path: '', component: HomeComponent },

  { path: '**', component: PageNotFoundComponent,
    canActivate: [AuthResolverGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
