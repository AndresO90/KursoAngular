import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonValidators } from '../../common-validators';
import { LoginDTO } from '../login-dto';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(private service: LoginService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
     username: new FormControl('', [Validators.required,
      Validators.minLength(4),
      CommonValidators.startWithNumber], [CommonValidators.userTaken]),
     password: new FormControl('', [Validators.required,
      Validators.minLength(2)]),
      });
  }
  onsave() {
    console.log(this.form.value);
    const username = this.form.get('username').value;
    const password = this.form.get('password').value;
    this.service.login(username, password).subscribe(
      (token: LoginDTO) => sessionStorage.setItem('token', token.access_token)
    );
  }


}
