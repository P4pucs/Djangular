import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup

  successful: boolean

  constructor(private formBuilder: FormBuilder, private authService: AuthService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      password: ['', [
        Validators.required
      ]]
    })
  }

  onSubmit() {
    this.authService.loginUser(this.loginForm.value).subscribe(
      res => {
        this.successful = true
        console.log(res)
        localStorage.setItem('token', res.token)
      },
      err => {
        console.log(err)
        this.successful = false
      }
    )
  }

}
