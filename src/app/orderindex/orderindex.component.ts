import {Component, OnInit} from '@angular/core';
import {ViracamserviceService} from '../viracamservice.service';
import {UserOrder} from '../model/userOrder';

@Component({
  selector: 'app-orderindex',
  templateUrl: './orderindex.component.html',
  styleUrls: ['./orderindex.component.css']
})
export class OrderindexComponent implements OnInit {
  userOrders: Array<UserOrder>;

  constructor(private service: ViracamserviceService) {
    this.service.loadAllUsersOrders().subscribe(
      data => {
        this.userOrders = data.json();
      }, error => {
        console.log(error);
      }
    );


  }

  ngOnInit() {
  }
  confirmOrder(id: any) {
    this.service.confirmOrder(id).subscribe(
      data => {
        this.userOrders = data.json();
        console.log(data.json());
      }, error => {
        console.log(error);
      }
    );
  }
  cancelOrder(id: any) {
    this.service.cancelOrder(id).subscribe(
      data => {
        this.userOrders = data.json();
        console.log(data.json());
      }, error => {
        console.log(error);
      }
    );
  }
}
