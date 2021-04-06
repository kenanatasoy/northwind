import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetail } from 'src/app/models/carDetail';
import { CarImage } from 'src/app/models/carImage';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})

export class CarDetailComponent implements OnInit {

  constructor(private carService:CarService,private activatedRoute:ActivatedRoute ) { }

  carImages:CarImage[] = []
  cars:CarDetail

  ngOnInit() {
    this.activatedRoute.params.subscribe(params=> {
        this.getCarDetailByCarId(params["carId"])
    })

  }

  setImageSource(imagePath:string){
    return "https://localhost:44361/"+ imagePath;
  }

  getCarDetailByCarId(carId:number){
    this.carService.getCarDetailByCarId(carId).subscribe(response=> {
      this.cars= response.data[0];
    })
  }
  

}
