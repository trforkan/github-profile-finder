
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/components/home/home.component';

const routes: Routes = [
  // { path: "", component: HomeComponent }

  // {
  //   path: "pages", loadChildren: './pages/pages.module#pagesModule'
  // }
  {
    path: 'github-finder',
    loadChildren: () =>  import('./pages/pages.module').then (module => module.PagesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
