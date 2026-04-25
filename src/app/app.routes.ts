import { Routes } from '@angular/router';

import { Layout } from './layout/layout';
import { Product } from './product/product';

export const routes: Routes = [
  {
    path: '',

    component: Layout,
    children:[
{
    path:'',
    component:Product
},
{
    path:'dashboard',
    loadComponent:()=>import('./dashboard/dashboard').then(m=>m.Dashboard)
}
    ]
  },
];
