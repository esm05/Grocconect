import { Routes } from '@angular/router';

import { AddProduceComponent } from './Produce Components/add-produce/add-produce.component';
import { ProduceListingComponent } from './Produce Components/produce-listing/produce-listing.component';
import { EditProduceComponent } from './Produce Components/edit-produce/edit-produce.component';
import { DeleteProduceComponent } from './Produce Components/delete-produce/delete-produce.component';

import { AddDairyComponent } from './Dairy Components/add-dairy/add-dairy.component';
import { DairyListingComponent } from './Dairy Components/dairy-listing/dairy-listing.component';
import { EditDairyComponent } from './Dairy Components/edit-dairy/edit-dairy.component';
import { DeleteDairyComponent } from './Dairy Components/delete-dairy/delete-dairy.component';

import { AddMeatComponent } from './Meat Components/add-meat/add-meat.component';
import { MeatListingComponent } from './Meat Components/meat-listing/meat-listing.component';
import { EditMeatComponent } from './Meat Components/edit-meat/edit-meat.component';
import { DeleteMeatComponent } from './Meat Components/delete-meat/delete-meat.component';

import { AddSeafoodComponent } from './Seafood Components/add-seafood/add-seafood.component';
import { SeafoodListingComponent } from './Seafood Components/seafood-listing/seafood-listing.component';
import { EditSeafoodComponent } from './Seafood Components/edit-seafood/edit-seafood.component';
import { DeleteSeafoodComponent } from './Seafood Components/delete-seafood/delete-seafood.component';

import { AddBakeryComponent } from './Bakery Components/add-bakery/add-bakery.component';
import { BakeryListingComponent } from './Bakery Components/bakery-listing/bakery-listing.component';
import { EditBakeryComponent } from './Bakery Components/edit-bakery/edit-bakery.component';
import { DeleteBakeryComponent } from './Bakery Components/delete-bakery/delete-bakery.component';

import { AddGroceryComponent } from './Grocery Components/add-grocery/add-grocery.component';
import { GroceryListingComponent } from './Grocery Components/grocery-listing/grocery-listing.component';
import { EditGroceryComponent } from './Grocery Components/edit-grocery/edit-grocery.component';
import { DeleteGroceryComponent } from './Grocery Components/delete-grocery/delete-grocery.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    {path: 'add-produce', component: AddProduceComponent},
    {path: 'edit-produce', component: EditProduceComponent},
    {path: 'delete-produce', component: DeleteProduceComponent},

    {path: 'add-dairy', component: AddDairyComponent},
    {path: 'edit-dairy', component: EditDairyComponent},
    {path: 'delete-dairy', component: DeleteDairyComponent},

    {path: 'add-meat', component:AddMeatComponent},
    {path: 'edit-meat', component:EditMeatComponent},
    {path: 'delete-meat', component:DeleteMeatComponent},

    {path: 'add-seafood', component:AddSeafoodComponent},
    {path: 'edit-seafood', component:EditSeafoodComponent},
    {path: 'delete-seafood', component:DeleteSeafoodComponent},

    {path: 'add-bakery', component: AddBakeryComponent},
    {path: 'edit-bakery', component: EditBakeryComponent},
    {path: 'delete-bakery', component: DeleteBakeryComponent},
    
    {path: 'add-grocery', component: AddGroceryComponent},
    {path: 'edit-grocery', component: EditGroceryComponent},
    {path: 'delete-grocery', component: DeleteGroceryComponent},
    
    {path: '', component: ProduceListingComponent, pathMatch: 'full'},
    {path: 'dairy', component: DairyListingComponent, pathMatch: 'full'},
    {path: 'meat', component: MeatListingComponent, pathMatch: 'full'},
    {path: 'seafood', component: SeafoodListingComponent, pathMatch: 'full'},
    {path: 'bakery', component: BakeryListingComponent, pathMatch: 'full'},
    {path: 'grocery', component: GroceryListingComponent, pathMatch: 'full'},

    {path: 'login', component: LoginComponent},
    
];
