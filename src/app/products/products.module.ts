import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ProductsComponent } from '../products/products.component';

import { ByIdComponent } from '../products/by-id/by-id.component';
import { InterestComponent } from '../products/interest/interest.component';
import { MainComponent } from '../products/main/main.component';
import { SpotifyComponent } from '../products/spotify/spotify.component';

@NgModule({
    declarations: [
        ProductsComponent,
        MainComponent,
        InterestComponent,
        SpotifyComponent,
        ByIdComponent
    ],
    exports: [
        ProductsComponent,
        MainComponent,
        InterestComponent,
        SpotifyComponent,
        ByIdComponent
    ],
    imports: [RouterModule]
})
export class ProductsComponentModule { }