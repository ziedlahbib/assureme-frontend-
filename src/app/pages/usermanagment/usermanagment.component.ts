import { Component, OnInit } from '@angular/core';
import { User } from 'app/models/user.model';
import { UserServiceService } from 'app/service/user-service.service';
///////////////////////////:
import { ViewChild} from '@angular/core';;
import {MatSort, SortDirection} from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-usermanagment',
  templateUrl: './usermanagment.component.html',
  styleUrls: ['./usermanagment.component.scss']
})
export class UsermanagmentComponent implements OnInit {

  listofuser:User[];
  counters = [100, 200, 10];
  meilleurDestination:any;
  displayedColumns = ['username','first name','last name', 'e-mail','option'];
  dataSource: MatTableDataSource<User>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private us:UserServiceService) { }


  ngOnInit(): void {
    this.us.getuser().subscribe(
      data=>{
        this.listofuser=data;
        this.dataSource=new MatTableDataSource(this.listofuser);
        this.dataSource._renderChangesSubscription;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    )
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
}
