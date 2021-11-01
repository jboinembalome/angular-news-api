import { Route } from '@angular/router';

import { LayoutComponent } from './layout/layout.component';

export const appRoutes: Route[] = [
     // Redirect empty path to '/home'
     {path: '', pathMatch : 'full', redirectTo: 'home'},

    // Unauthenticated routes or in other words routes that can be consulted by everyone
    {
        path: '',
        component: LayoutComponent,
        children: [
            {path: 'home', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)},
            {path: 'top-news', loadChildren: () => import('./modules/top-news/top-news.module').then(m => m.TopNewsModule)},
            {path: 'tech-news', loadChildren: () => import('./modules/tech-news/tech-news.module').then(m => m.TechNewsModule)}
        ]
    },
];
