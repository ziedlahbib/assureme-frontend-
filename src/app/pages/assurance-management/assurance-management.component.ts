import { Component, OnInit } from '@angular/core';
////////////////////:
import { ViewChild} from '@angular/core';;
import {MatSort, SortDirection} from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatChipsModule } from '@angular/material/chips';
import { Assurance } from 'app/models/assurance.model';
import { AssuranceServiceService } from 'app/service/assurance-service.service';
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-assurance-management',
  templateUrl: './assurance-management.component.html',
  styleUrls: ['./assurance-management.component.scss']
})
export class AssuranceManagementComponent implements OnInit {

  
  listofassurance:Assurance[];
  counters = [100, 200, 10];
  meilleurDestination:any;
  displayedColumns = ['garantie_conducteur','bris_de_glace','vol', 'assistance','protection_juridique','garentie_incendie','prix','option'];
  dataSource: MatTableDataSource<Assurance>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private assuranceservice:AssuranceServiceService,private toastr : ToastrService) { }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  ngOnInit(): void {
    this.assuranceservice.getAssurances().subscribe(
      data=>{
        this.listofassurance=data;
        this.dataSource=new MatTableDataSource(this.listofassurance);
        this.dataSource._renderChangesSubscription;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    )
    console.log(sessionStorage)
  }
  supprimer(assurance :any){
    this.assuranceservice.deleteassurance(assurance.assuId).subscribe(()=>this.assuranceservice.getAssurances().subscribe(
      data=>{
        this.listofassurance=data
        this.dataSource = new MatTableDataSource(this.listofassurance);
        this.toastr.error('assurance deleted sucessfuly ','assurance deleted sucessfuly ');
       let audio = new Audio()
       audio.src= "../assets/alert.mp3"
       audio.src= "../assets/confirm2.mp3"
       audio.load();
       audio.play();
      }
    )
    );
  }

}
