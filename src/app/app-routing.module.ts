import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './services/auth-guard.service';
import { NologinGuard } from './guards/nologin.guard';



const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' , canActivate: [NologinGuard] },
  { path: 'about', loadChildren: './about/about.module#AboutPageModule' },
  { path: 'chooser', loadChildren: './chooser/chooser.module#ChooserPageModule' },
  { path: 'single-group', loadChildren: './single-group/single-group.module#SingleGroupPageModule' },
  { path: 'upload', loadChildren: './upload/upload.module#UploadPageModule', canActivate: [AuthGuardService] },
  { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule' },
  { path: 'logout', loadChildren: './logout/logout.module#LogoutPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
