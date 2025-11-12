import { Component, OnInit } from '@angular/core';
import { Produit } from '../model/produit.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ProduitService } from '../services/produit';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Categorie } from '../model/categorie.model';

@Component({
  selector: 'app-update-produit',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './update-produit.html',
})
export class UpdateProduit implements OnInit {

  currentProduit = new Produit();
  categories! : Categorie[];
  updatedCatId! : number;

  constructor(private activatedRoute: ActivatedRoute,
    private router :Router,
     private produitService: ProduitService) {}
  ngOnInit() {
    this.produitService.consulterProduit(this.activatedRoute.snapshot.params['id']).
    subscribe( prod =>{ this.currentProduit = prod; } ) ;

  }
updateProduit() {
this.produitService.updateProduit(this.currentProduit).subscribe(prod => {
this.router.navigate(['produits']); }
);
}
}
