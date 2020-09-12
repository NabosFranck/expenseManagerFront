import { Component, OnInit } from '@angular/core';
import { NbAuthService, NbAuthJWTToken } from '@nebular/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  user = {username: ''};

  constructor(private authService: NbAuthService, private router: Router) { 
    this.authService.onTokenChange()
      .subscribe(
        (token: NbAuthJWTToken) => {
          if (token.isValid()) {
            this.user = token.getPayload(); // here we receive a payload from the token and assigns it to our `user` variable 
          }
        }
      );
  }

  ngOnInit(): void {
  }

  logoutApp(){
    localStorage.removeItem("auth_app_token");
    this.router.navigate(['auth/login']);
  }

}
