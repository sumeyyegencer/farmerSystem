import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Group } from 'src/app/Models/group';
import { Sheep } from 'src/app/Models/sheep';
import { SheepService } from 'src/app/Services/sheep.service';
import { GroupService } from 'src/app/Services/group.service';
import { param } from 'jquery';

@Component({
  selector: 'app-sheep',
  templateUrl: './sheep.component.html',
  styleUrls: ['./sheep.component.css']
})
export class SheepComponent implements OnInit {

  @Input() typeList!: string;
  @Input() sheeps!: Sheep[];

  displayedColumns: string[] = ["barcodeNo",
    "group", "race", "gender", "dateOfBirth",
    "age", "weight", "action"]
  dataSource: any;
  ajax: any;
  groups: Group[] = [];



  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  constructor(private sheepService: SheepService, private groupService: GroupService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getList();

    this.groupService.getGroups().subscribe((data: Group[]) => {
      this.groups = data;
    });

  }

  getList() {
    this.sheepService.getSheep().subscribe(data => {
      this.sheeps = data;
      this.dataSource = new MatTableDataSource<Sheep>(data);
      this.dataSource.paginator = this.paginator;
    });
  }

  getListByGroup(id: number) {
    this.ajax = this.sheepService.getSheepWithGroup(id).subscribe(data => {
      this.sheeps = data;
      this.dataSource = new MatTableDataSource<Sheep>(data);
      this.dataSource.paginator = this.paginator;
    });
  }

  deleteSheep(id: number) {

    this.sheepService.deleteSheep(id).subscribe(data => {

      let sheep = this.sheeps.filter(x => x.id)[0];
      let index = this.sheeps.indexOf(sheep);
      this.sheeps.splice(index, 1);

      this.dataSource = new MatTableDataSource<Sheep>(this.sheeps);
      this.dataSource.paginator = this.paginator;

    });


  }

  // Filtreleme Methodu

  // applyFilter(event: Event) {
  //   const filterValue = (event.target as HTMLInputElement).value;
  //   this.dataSource.filter = filterValue.trim().toLowerCase();
  // }

  //   getTypeControl(typlist:string)
  // {
  //   switch (this.typeList) {
  //   case "list":

  //    this.router.navigateByUrl(`/liste`); //URL değişikliği yapılıyor.
  //    break;

  //   case "groups":

  //    //let groupName = this.route.snapshot.paramMap.get("name");
  //    let groupId =this.route.snapshot.paramMap.get("id");

  //    this.router.navigateByUrl(

  //      `/grup/${groupId}`
  //    );

  //    break;

  //    }

  // }


}

