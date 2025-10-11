import { Routes } from '@angular/router';
import { Produits as ProduitsComponent } from './produits/produits';
import { AddProduit as AddProduitComponent } from './add-produit/add-produit';


export const routes: Routes = [
    {path: "produits", component : ProduitsComponent},
    {path: "add-produit", component : AddProduitComponent}


];
