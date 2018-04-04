import { Component, OnInit } from '@angular/core';
import {SystemUsers} from '../model/systemUsers';
import {ViracamserviceService} from '../viracamservice.service';

@Component({
  selector: 'app-userindex',
  templateUrl: './userindex.component.html',
  styleUrls: ['./userindex.component.css']
})
export class UserindexComponent implements OnInit {
  users: Array<SystemUsers>;
  constructor(private service: ViracamserviceService) {
    this.service.loadAllUsers().subscribe(data => {
      this.users = data.json();
    }, error => {
      console.log(error);
    });

  }

  ngOnInit() {
  }

}
