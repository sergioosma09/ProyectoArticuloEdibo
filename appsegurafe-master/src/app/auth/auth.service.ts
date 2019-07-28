import {
  Injectable
} from '@angular/core';
import {
  Router
} from '@angular/router';
import {
  BehaviorSubject
} from 'rxjs';
import {
  IUser
} from '../models/user';
import {
  HttpClient,
  HttpHeaders
} from '@angular/common/http';
import { ITokenElem } from '../models/tokenElemen';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private httpOptions =  { headers: new HttpHeaders({"Content-Type": "application/json"})};
  private loggedIn = new BehaviorSubject < boolean > (false); // {1}
  private urlUsersLogin = "http://localhost:3000/users/login";

  constructor(private router: Router,
    private httpClient: HttpClient) {}
  get isLoggedIn() {
    return this.loggedIn.asObservable(); // {2}
  }
  login(user: IUser) {
  
    if (user.email !== '' && user.password !== '') { // {3}
      this.httpClient.post(this.urlUsersLogin, user, this.httpOptions).subscribe(data => {
        let miToken: any|ITokenElem = data;
        
        localStorage.setItem('tkn', miToken.token);
        this.loggedIn.next(true);
        this.router.navigate(['/']);
        console.log('miToken:', miToken );
        console.log(miToken.token);
        localStorage.setItem('tkn', miToken.token);
        this.loggedIn.next(true);
      this.router.navigate(['/']);
      });

    }
  }

  logout() { // {4}
    this.loggedIn.next(false);
    this.router.navigate(['/login']);
  }
}
