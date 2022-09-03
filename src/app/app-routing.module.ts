
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/components/home/home.component';

const routes: Routes = [
  { path: "", component: HomeComponent }

  {
    path: "", loadChildren: () => import('./pages/pages.module').then(m => m.HomeComponent),
    canActivate: [],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
