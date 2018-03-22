import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class UserserviceService {

  private baseUrl: String = '/ViraCamServer';

  constructor(private http: Http) {
  }

  loadAllUsers() {
    return this.http.get(this.baseUrl + '/users/loadallusers');
  }
}
