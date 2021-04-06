import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDetail } from '../models/carDetail';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})

export class CarService {

  apiUrl = "https://localhost:44361/api/"
  
  constructor(private httpClient:HttpClient) { }

  getCarDetails():Observable<ListResponseModel<CarDetail>>{
    let newUrl = this.apiUrl + "cars/getcardetails"
    return this.httpClient.get<ListResponseModel<CarDetail>>(newUrl)
  }

  getCarDetailByCarId(carId:number):Observable<ListResponseModel<CarDetail>>{
    let newUrl = this.apiUrl + "cars/getcardetailbycarid?carid=" + carId
    return this.httpClient.get<ListResponseModel<CarDetail>>(newUrl)
  }

  getCarDetailsByBrand(brandId:number):Observable<ListResponseModel<CarDetail>>{
    let newUrl = this.apiUrl + "cars/getcardetailsbybrand?brandid=" + brandId
    return this.httpClient.get<ListResponseModel<CarDetail>>(newUrl)
  }

  getCarDetailsByColor(colorId:number):Observable<ListResponseModel<CarDetail>>{
    let newUrl = this.apiUrl + "cars/getcardetailsbycolor?colorid=" + colorId
    return this.httpClient.get<ListResponseModel<CarDetail>>(newUrl)
  }
  
  getCarDetailByColorAndBrand(colorId:number, brandId:number):Observable<ListResponseModel<CarDetail>>{
    let newPath=this.apiUrl + "cars/getcardetailsbycolorandbybrand?colorId="+colorId+ "&brandId=" +brandId
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }

}
