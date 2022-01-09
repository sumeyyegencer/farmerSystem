import { Component, Input, OnInit } from '@angular/core';
import { Group } from 'src/app/Models/group';
import { GroupService } from 'src/app/Services/group.service';

@Component({
  selector: 'app-menu-group',
  templateUrl: './menu-group.component.html',
  styleUrls: ['./menu-group.component.css']
})
export class MenuGroupComponent implements OnInit {
  @Input() typeList!: string;
  groups: Group[]=[];


  constructor(private groupService:GroupService) { }

  ngOnInit(): void {

    this.groupService.getGroups().subscribe(data=>{
      this.groups=data;
    })
  }
}
