import { Injectable } from '@angular/core';
import { Produit } from '../model/produit.model';
import { Categorie } from '../model/categorie.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};
@Injectable({
  providedIn: 'root',
})
export class ProduitService {
    apiURL: string = 'http://localhost:8090/produits/api';

  produits!: Produit[]; 
  produit!: Produit;
  categories!: Categorie[];


  constructor(private http : HttpClient) {}

      listeProduit(): Observable<Produit[]>{
          return this.http.get<Produit[]>(this.apiURL);
      }
  ajouterProduit(prod: Produit) {
    this.produits.push(prod);
  }
  supprimerProduit(prod: Produit) {
    //supprimer le produit prod du tableau produits
    const index = this.produits.indexOf(prod, 0);
    if (index > -1) {
      this.produits.splice(index, 1);
    }
    //ou Bien
    /* this.produits.forEach((cur, index) => {
if(prod.idProduit === cur.idProduit) {
this.produits.splice(index, 1);
}
}); */
  }

  consulterProduit(id: number): Produit {
    this.produit = this.produits.find((p) => p.idProduit == id)!;
    return this.produit;
  }
  updateProduit(prod: Produit) {
    const index = this.produits.indexOf(prod, 0);
    if (index > -1) {
      this.produits.splice(index, 1);
      this.produits.splice(index, 0, prod);
    }
  }

  // listeCategories(): Categorie[] {
  //   return this.categories;
  // }
  // consulterCategorie(id: number): Categorie {
  //   return this.categories.find((cat) => cat.idCat == id)!;
  // }



  
}
