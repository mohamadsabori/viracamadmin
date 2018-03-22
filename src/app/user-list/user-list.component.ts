import { Component, OnInit } from '@angular/core';
import {UserserviceService} from '../services/userservice.service';
import {SystemUsers} from '../model/SystemUsers';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
   items: Array<SystemUsers>;
  constructor(private service: UserserviceService) { }

  ngOnInit() {
    this.service.loadAllUsers().subscribe( data => {
      this.items = [];
      for (let i = 0; i < data.json().length; i++) {
        this.items.push(data.json()[i]);
      }
    }, error => {
      console.log(error);
    });
  }

}
