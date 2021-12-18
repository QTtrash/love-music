import { Component } from '@angular/core';
import { environment } from '../../environments/environment';

@Component({
  selector: 'login-component',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [],
})
export class LoginComponent {
  CLIENT_ID = environment['CLIENT_ID'];
  REDIRECT_URI = environment['REDIRECT_URI'];
  AUTH_ENDPOINT = environment['AUTH_ENDPOINT'];
  RESPONSE_TYPE = environment['RESPONSE_TYPE'];
  loginLink = `${this.AUTH_ENDPOINT}?client_id=${this.CLIENT_ID}&redirect_uri=${this.REDIRECT_URI}&response_type=${this.RESPONSE_TYPE}`;
}
