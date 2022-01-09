import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Group } from 'src/app/Models/group';
import { Sheep } from 'src/app/Models/sheep';
import { SheepService } from 'src/app/Services/sheep.service';
import { GroupService } from 'src/app/Services/group.service';

@Component({
  selector: 'app-sheep-home',
  templateUrl: './sheep-home.component.html',
  styleUrls: ['./sheep-home.component.css']
})
export class SheepHomeComponent implements OnInit {

  sheeps!: Sheep[];
  id!: number;
  name!: string;
  ajax: any;
  groups: Group[] = [];
  constructor(private sheepService: SheepService, private groupService: GroupService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {


    // this.route.paramMap.subscribe(params=> {


    //   if(params.get("id"))
    //   {
    //     this.id=Number(params.get("id"));
    //   }
    // })

    //   this.ajax=this.sheeps=[];

    // this.sheepService.getSheep().subscribe(data => {
    //   console.log(data);
    //   this.sheeps = data;

    //});

  }

}
