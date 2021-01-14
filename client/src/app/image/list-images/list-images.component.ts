import { Component, OnInit } from '@angular/core';
import { ImageService } from '../image.service';

@Component({
  selector: 'app-list-images',
  templateUrl: './list-images.component.html',
  styleUrls: ['./list-images.component.css']
})
export class ListImagesComponent implements OnInit {

  images: Object

  constructor(private imagesService: ImageService) { }

  ngOnInit(): void {
    this.getImages()
  }

  getImages() {
    this.imagesService.getImages().subscribe(
      res => {
        console.log(res)
        this.images = res
      },
      err => {
        console.log(err)
      }
    )
  }

}
