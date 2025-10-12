import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Produit } from '../model/produit.model';

@Component({
  selector: 'app-produits',
  imports: [CommonModule],
  templateUrl: './produits.html',
})
export class Produits implements OnInit {
  produits: Produit[] = []; // Array of Produit objects

  constructor() {
    this.produits = [
      {
        idProduit: 1,
        nomProduit: "PC Asus",
        prixProduit: 3000.600,
        dateCreation: new Date("01/14/2011")
      },
      {
        idProduit: 2,
        nomProduit: "Imprimante Epson",
        prixProduit: 450,
        dateCreation: new Date("12/17/2010")
      },
      {
        idProduit: 3,
        nomProduit: "Tablette Samsung",
        prixProduit: 900.123,
        dateCreation: new Date("02/20/2020")
      }
    ];
  }

  ngOnInit(): void {
  }
}
