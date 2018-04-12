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
  userOrder: UserOrder;

  constructor(private route: ActivatedRoute, private service: ViracamserviceService) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.service.loadFactorDetails(id).subscribe(data => {
            this.userOrder = data.json();
          }, error => {
            console.log(error);
          }
        );
      }
    })
  }

}
