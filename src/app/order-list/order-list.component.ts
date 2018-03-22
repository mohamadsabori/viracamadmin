import {Component, OnInit} from '@angular/core';
import {OrderServiceService} from '../services/order-service.service';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ProductOrder} from '../model/ProductOrder';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  items: Array<ProductOrder>;
  selectedItem: ProductOrder;
  closeResult: string;

  constructor(private service: OrderServiceService, private modalService: NgbModal) {
  }

  ngOnInit() {
    this.service.loadAllOrders().subscribe(data => {
      this.items = [];
      this.selectedItem = new ProductOrder();
      for (let i = 0; i < data.json().length; i++) {
        this.items.push(data.json()[i]);
      }
    });
  }

  open(content, id: any) {
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].id === id) {
        this.selectedItem = this.items[i];
        break;
      }
    }
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }



  confirmThisOrder() {
    this.service.confirmProductOrder(this.selectedItem).subscribe( data => {
      this.ngOnInit();
    }, error => {
      console.log(error);
    });
  }

}
