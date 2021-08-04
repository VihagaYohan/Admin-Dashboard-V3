import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class StoresService {

  constructor(private http:HttpClient) { }

  getAllStores(url:any){
    return this.http.get<any>(url)
  }
}
