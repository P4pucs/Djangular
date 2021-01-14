import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListImagesComponent } from './list-images/list-images.component';
import { AddImageComponent } from './add-image/add-image.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ListImagesComponent, AddImageComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    ListImagesComponent, 
    AddImageComponent
  ]
})
export class ImageModule { }
