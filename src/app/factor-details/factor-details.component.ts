import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ViracamserviceService} from '../viracamservice.service';
import {UserOrder} from '../model/userOrder';

@Component({
  selector: 'app-factor-details',
  templateUrl: './factor-details.component.html',
  styleUrls: ['./factor-details.component.css']
})
export class FactorDetailsComponent implements OnInit {
  newOrder: UserOrder;

  constructor(private route: ActivatedRoute, private service: ViracamserviceService) {
/*
    this.route.params.subscribe(params => {
      this.newOrder = params['id'];
    });
*/
    this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.service.loadFactorDetails(id).subscribe(data => {
            this.newOrder = data.json();
          }, error => {
            console.log(error);
          }
        );
      }
    });
    // this.newOrder = new UserOrder();
  }

  ngOnInit() {
  }

}
