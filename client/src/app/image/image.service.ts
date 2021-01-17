import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  private images_url = "http://localhost:8000/api/image/add_image/"

  opts = {
    headers: new HttpHeaders({
      'Authorization': `token ${localStorage.getItem('token')}`
    })
  }

  constructor(private http: HttpClient) { }

  getImages() {
    return this.http.get<any>(this.images_url, this.opts)
  }

  addImage(image) {
    return this.http.post<any>(this.images_url, image, this.opts)
  }
}
