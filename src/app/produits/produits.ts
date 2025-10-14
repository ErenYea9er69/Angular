import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../services/produit';

@Component({
  selector: 'app-produits',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './produits.html',
})
export class Produits  {
  produits? : Produit[]; // Array of Produit objects


constructor(  private produitService : ProduitService) {

  this.produits = this.produitService.listeProduits();

  }
  supprimerProduit(prod: Produit){

    //console.log(prod);
    let conf = confirm("Etes-vous sûr ?");
    if (conf)
    this.produitService.supprimerProduit(prod);
  }

  ngOnInit(): void {
  } 
}
