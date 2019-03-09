import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {CookieService} from 'ngx-cookie-service';
import {AppComponent} from "../app.component";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public mobile: string;
  public password: string;

  constructor(private cookieService: CookieService, private router: Router, private component: AppComponent) {
  }

  ngOnInit() {
  }

  login() {
    if (this.mobile === '09191387269' && this.password === '09191387269Admin') {

      const expiredDate = new Date();
      expiredDate.setDate( expiredDate.getDate() + 7 );
      this.cookieService.set('UserLogged', 'true', expiredDate );
      this.component.loggedIn = 'true';
      this.router.navigate(['/']);
    }
  }

}
