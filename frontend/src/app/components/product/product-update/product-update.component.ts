import { HeaderService } from './../../template/header/header.service';
import { Observable } from 'rxjs';
import { ProductService } from './../product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  product: Product;

  constructor(private productService: ProductService,
     private router: Router,
     private route: ActivatedRoute){}
    

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.productService.readById(id).subscribe(p=>{
      this.product = p;
    });
  }

  update(): void{
    this.productService.update(this.product).subscribe((p)=>{
      this.productService.showMessage("Produto atualizado com Sucesso!!!");
      this.router.navigate(["/products"]);
    });
  }

  cancel(): void{
    this.router.navigate(["/products"])
  }

}
