import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TokenService } from 'src/app/Services/token.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient, private token: TokenService) { }
  orderDetails($id)
  {

   // this.token=this.tokenn.get();
      return this.http.get('http://backend2.test:8800/api/order/'+$id)//+'?token='+this.token);

  }
  UpdateOrdr(data)
  {
    return this.http.post('http://backend2.test:8800/api/orderUpdate',data)//+'?token='+this.token);

  }
}
