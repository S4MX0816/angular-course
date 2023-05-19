import { NgModule } from '@angular/core';
import { PreloadAllModules, Route, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';

import { WelcomeComponent } from './welcome/welcome.component';

const routes: Route[] = [
  {
    path: '',
    component: WelcomeComponent,
  },
  {
    path: 'about',
    // component: AboutComponent,
    loadComponent: () =>
      import('./about/about.component').then((c) => c.AboutComponent),
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/routes').then((mod) => mod.DASHBOARD_ROUTES),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
