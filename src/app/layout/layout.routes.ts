import {  Routes } from "@angular/router";
import { Layout } from "./layout";
import { Dashboard } from "../dashboard/dashboard";
import { Product } from "../product/product";

export const layoutRoutes: Routes=[
    {
        path:'',
        component:Dashboard
    },
    {
        path:'product',
        component:Product
    }
]