import { Routes } from '@angular/router';
import { AddProduceComponent } from './add-produce/add-produce.component';
import { ProduceListingComponent } from './produce-listing/produce-listing.component';
import { EditProduceComponent } from './edit-produce/edit-produce.component';
import { DeleteProduceComponent } from './delete-produce/delete-produce.component';
import { LoginComponent } from './login/login.component';


export const routes: Routes = [
    {path: 'add-produce', component: AddProduceComponent},
    {path: 'edit-produce', component: EditProduceComponent},
    {path: 'delete-produce', component: DeleteProduceComponent},
    {path: 'login', component: LoginComponent},
    {path: '', component: ProduceListingComponent, pathMatch: 'full'}
];
