import { Routes } from '@angular/router';
import { Produits } from './produits/produits';
import { AddProduitComponent } from './add-produit/add-produit';

export const routes: Routes = [
    {path: "produits", component : Produits},
    {path: "add-produit", component : AddProduitComponent},
    {path: "", redirectTo: "produits", pathMatch: "full"}
];