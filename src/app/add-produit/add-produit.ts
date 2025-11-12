import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../services/produit';
import { Categorie } from '../model/categorie.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-produit',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-produit.html',
})
export class AddProduitComponent implements OnInit {
  newProduit: Produit = new Produit();
  categories! : Categorie[];
  newIdCat! : number;
  newCategorie! : Categorie;
  message: string = '';

  constructor(private produitService: ProduitService, private router: Router ) {}

  ngOnInit(): void {
    // this.categories = this.produitService.listeCategories();
  }

addProduit(){
        this.produitService.ajouterProduit(this.newProduit)
        .subscribe(prod => {
        console.log(prod);
        this.router.navigate(['produits']);
        });
}
}