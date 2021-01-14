import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  private images_url = "http://localhost:8000/api/image/add_image/"

  constructor(private http: HttpClient) { }

  getImages() {
    return this.http.get<any>(this.images_url)
  }

  addImage(image) {
    return this.http.post<any>(this.images_url, image)
  }
}
