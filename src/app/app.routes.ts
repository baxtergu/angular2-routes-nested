import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ProductsComponentModule } from './products/products.module';
import { ProductsRoutes as childRoutes } from './products/products.routes';

export const AppRoutes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'products', component: ProductsComponent, children: childRoutes }
];