import { Component, OnInit } from '@angular/core';
import { MongoService } from '../service/Mongo.service';

@Component({
  selector: 'app-rezervasyon',
  templateUrl: './rezervasyon.component.html',
  styleUrls: ['./rezervasyon.component.scss']
})
export class RezervasyonComponent implements OnInit {

  Orders: any = [];
  constructor(public mongodbService: MongoService) { }

  ngOnInit() {
    this.loadOrders();
  }
  loadOrders() {
    return this.mongodbService.getOrder().subscribe((data: {}) => {
      this.Orders = data;
    });
  }

}
