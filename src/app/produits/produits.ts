import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../services/produit';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-produits',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './produits.html',
})
export class Produits implements OnInit {
  produits = signal<Produit[]>([]);

  constructor(private produitService: ProduitService) {}

  ngOnInit(): void {
    this.chargerProduits();
  }

  chargerProduits() {
    this.produitService.listeProduit().subscribe(prods => {
      console.log(prods);
      this.produits.set(prods);
    });
  }

  supprimerProduit(p: Produit) {
    let conf = confirm("Etes-vous sûr ?");
    if (conf)
      this.produitService.supprimerProduit(p.idProduit).subscribe(() => {
        console.log("produit supprimé");
        this.chargerProduits();
      });
  }
}