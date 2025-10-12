import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../services/produit';

@Component({
  selector: 'app-produits',
  imports: [CommonModule],
  templateUrl: './produits.html',
})
export class Produits implements OnInit {
  produits? : Produit[];// Array of Produit objects
  private produitService = new ProduitService ();


constructor( ) {

  }

  ngOnInit(): void {
  } 
}
