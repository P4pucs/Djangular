import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup

  successful: Boolean

  constructor(private formBuilder: FormBuilder, private authService: AuthService) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      email: ["", [
        Validators.email,
        Validators.required
      ]],
      name: ["", [
        Validators.minLength(3),
        Validators.required
      ]],
      password: ["", [
        Validators.minLength(5),
        Validators.required
      ]]
    })
  }

  onSubmit() {
    this.authService.registerUser(this.registerForm.value).subscribe(
      res => {
        this.successful = true
        console.log(res)
      },
      err => {
        console.log(err)
        this.successful = false
      }
    )
  }

}
