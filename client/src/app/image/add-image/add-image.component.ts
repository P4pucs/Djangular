import { Component, OnInit } from '@angular/core';
import { ImageService } from '../image.service';


@Component({
  selector: 'app-add-image',
  templateUrl: './add-image.component.html',
  styleUrls: ['./add-image.component.css']
})
export class AddImageComponent implements OnInit {

  image: File = null
  title: string = ""

  constructor(private imageService: ImageService) { }

  ngOnInit(): void {

  }

  readImage(file: FileList) {
    this.image = file.item(0);
  }

  uploadImage() {
    const formData: FormData = new FormData();
    formData.append('image', this.image);
    formData.append('title', this.title);
    console.log(this.title)

    this.imageService.addImage(formData).subscribe(
      res => {
        console.log(res)
      },
      err => {
        console.log(err)
      }
    )
  }
}
