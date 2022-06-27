import { Component, OnInit } from '@angular/core';
import { PostgresqlService } from '../service/Postgresql.service';

@Component({
  selector: 'app-restaurant-search',
  templateUrl: './restaurant-search.component.html',
  styleUrls: ['./restaurant-search.component.scss']
})
export class RestaurantSearchComponent implements OnInit {
  Employee: any = [];
  constructor(public postgresqlService: PostgresqlService) { }

  ngOnInit() {
    this.loadEmployees();
  }

  loadEmployees() {
    return this.postgresqlService.getUser().subscribe((data: {}) => {
      this.Employee = data;
    });
  }

}
