import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Assurance } from 'app/models/assurance.model';
import { AssuranceServiceService } from 'app/service/assurance-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  listofassurance:Assurance[];
  listofassurancePagination:Assurance[];
  start=0;
  end=6;
  constructor(private assuranceservice:AssuranceServiceService) { }

  ngOnInit(): void {
    this.assuranceservice.getAssurances().subscribe(
      data=>{
        this.listofassurance=data;
        this.listofassurancePagination=this.listofassurance.slice(this.start, this.end)

      }
    )
  }
  paginate(event: PageEvent) {
    let startIndex = event.pageSize * event.pageIndex;
    this.start = startIndex;
    let endIndex = startIndex + event.pageSize;
    this.end = endIndex;
    if (endIndex > this.listofassurance.length) {
      endIndex = this.listofassurance.length;
    }
    this.listofassurancePagination = this.listofassurance.slice(startIndex, endIndex);
  }

}
