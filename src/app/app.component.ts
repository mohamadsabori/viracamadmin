import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public loggedIn: string;

  constructor( private cookieService: CookieService, private router: Router) {
    this.loggedIn = this.cookieService.get('UserLogged');
    console.log('constructor' + this.loggedIn);
    if ( this.loggedIn === 'true') {

    } else {
      this.router.navigate(['/login']);
    }
  }

  ngOnInit(): void {
    this.loggedIn = this.cookieService.get('UserLogged');
    console.log('ng init' + this.loggedIn );
    if ( this.loggedIn === 'true') {

    } else {
      this.router.navigate(['/login']);
    }
    document.querySelector('body').dir = 'rtl';
  }

  logOut() {
    this.cookieService.deleteAll();
    this.loggedIn = '';
    console.log('ng logout' + this.loggedIn );
    this.router.navigate(['/login']);
  }
}
