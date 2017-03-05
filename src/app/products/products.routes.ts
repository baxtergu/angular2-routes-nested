import { Routes } from '@angular/router';
import { ByIdComponent } from '../products/by-id/by-id.component';
import { InterestComponent } from '../products/interest/interest.component';
import { MainComponent } from '../products/main/main.component';
import { SpotifyComponent } from '../products/spotify/spotify.component';


export const ProductsRoutes: Routes = [
    { path: '', redirectTo: 'main', pathMatch: 'full' },
    { path: 'main', component: MainComponent },
    { path: ':id', component: ByIdComponent },
    { path: 'interest', component: InterestComponent },
    { path: 'sportify', component: SpotifyComponent },
];