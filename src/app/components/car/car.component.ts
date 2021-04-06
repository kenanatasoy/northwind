import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CarDetail } from 'src/app/models/carDetail';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})

export class CarComponent implements OnInit {

  carDetails:CarDetail[] = []
  dataLoaded = false
  filterText = ""

  constructor(private carService:CarService,
    private activatedRoute:ActivatedRoute,
    private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
        if(params["colorId"] && params["brandId"])
        {
        this.getCarDetailByColorAndBrand(params['colorId'],params['brandId']);

        }
        else if(params["brandId"]){
          this.getCarDetailsByBrand(params["brandId"])
        }
        else if(params["colorId"]){
          this.getCarDetailsByColor(params["colorId"])
        }
        else{
          this.getCarDetails()
        }
    })
  }

  addToCart(carDetail:CarDetail){
    this.toastrService.success(carDetail.modelYear + carDetail.carBrandName, "kiralandı")
  }

  getCarDetails(){
    this.carService.getCarDetails().subscribe(response => {
      this.carDetails = response.data
      this.dataLoaded = true
    })
  }

  getCarDetailByCarId(carId:number){
    this.carService.getCarDetailByCarId(carId).subscribe(response => {
      this.carDetails = response.data
      this.dataLoaded = true
    })
  }

  getCarDetailsByBrand(brandId:number){
    this.carService.getCarDetailsByBrand(brandId).subscribe(response => {
      this.carDetails = response.data
      this.dataLoaded = true
    })
  }

  getCarDetailsByColor(colorId:number){
    this.carService.getCarDetailsByColor(colorId).subscribe(response => {
      this.carDetails = response.data
      this.dataLoaded = true
    })
  }

  getCarDetailByColorAndBrand(colorId: number, brandId: number) {
    this.carService.getCarDetailByColorAndBrand(colorId, brandId)
      .subscribe((response) => {
        console.log(response)
        this.carDetails = response.data;
        this.dataLoaded = true
      });
  }

  getCurrentCarImagePath(carDetail:CarDetail){
    let result = "https://localhost:44361/" + carDetail.imagePath[0]
    return result
  }


}
