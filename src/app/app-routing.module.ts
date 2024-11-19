import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './Pages/admin/admin.component';
const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./Pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'details',
    loadChildren: () => import('./Pages/details/details.module').then( m => m.DetailsPageModule)
  },
  {
    path: 'info',
    loadChildren: () => import('./Pages/info/info.module').then( m => m.InfoPageModule)
  },
  {
    path: 'soleado',
    loadChildren: () => import('./Pages/soleado/soleado.module').then( m => m.SoleadoPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./Pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./Pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'home2',
    loadChildren: () => import('./Pages/home2/home2.module').then( m => m.Home2PageModule)
  },
  {
    path: 'admin',
    component: AdminComponent
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
