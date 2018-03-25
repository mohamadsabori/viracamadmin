import {Component, OnInit} from '@angular/core';
import {ProductOrder} from '../model/productOrder';
import {ViracamserviceService} from '../viracamservice.service';

@Component({
  selector: 'app-orderindex',
  templateUrl: './orderindex.component.html',
  styleUrls: ['./orderindex.component.css']
})
export class OrderindexComponent implements OnInit {
  userOrders: Array<ProductOrder>;

  constructor(private service: ViracamserviceService) {
    this.service.loadAllUserOrders().subscribe(
      data => {
        this.userOrders = data.json();
      }, error => {
        console.log(error);
      }
    )
    ;

  }

  ngOnInit() {
  }

}
