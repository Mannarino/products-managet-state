import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private http: HttpClient) { }
  // Método para hacer una solicitud POST
  postData(url: string, data: any) {
    const body = { subscription: data };

    // Enviar la solicitud POST con el nuevo cuerpo
    return this.http.post(url, body);
  }

}
