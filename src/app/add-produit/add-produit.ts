import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Produit } from '../model/produit.model';

@Component({
  selector: 'app-add-produit',
  imports: [FormsModule],
  templateUrl: './add-produit.html',
})
export class AddProduit implements OnInit {


  newProduit = new Produit();


  constructor() { }

  ngOnInit(): void {
      
  }
  addProduit(){
   console.log(this.newProduit);
   //this.produitService.ajouterProduit(this.newProduit);
   //this.message = "Produit "+this.newProduit.nomProduit +" ajouté avec succès !"
  }


}
