
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

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
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
