import { Routes } from '@angular/router';
import { AddProduceComponent } from './add-produce/add-produce.component';
import { ProduceListingComponent } from './produce-listing/produce-listing.component';
import { EditProduceComponent } from './edit-produce/edit-produce.component';


export const routes: Routes = [
    {path: 'add-produce', component: AddProduceComponent},
    {path: 'edit-produce', component: EditProduceComponent},
    {path: '', component: ProduceListingComponent, pathMatch: 'full'}
];
