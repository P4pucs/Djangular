import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AddImageComponent } from './image/add-image/add-image.component';
import { ListImagesComponent } from './image/list-images/list-images.component';

const routes: Routes = [
  { path: 'login', component:LoginComponent },
  { path: 'register', component:RegisterComponent },
  { path: '', component:ListImagesComponent },
  { path: 'add-image', component:AddImageComponent }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
