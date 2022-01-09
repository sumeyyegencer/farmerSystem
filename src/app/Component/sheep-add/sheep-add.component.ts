import { Component, OnInit, ViewChild } from '@angular/core';
import { SheepService } from 'src/app/Services/sheep.service';
import { FormGroup, FormControl, Validator, AbstractControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { RaceService } from 'src/app/Services/race.service';
import { GroupService } from 'src/app/Services/group.service';
import { Race } from 'src/app/Models/race';
import { Group } from 'src/app/Models/group';
import { MyvalidationService } from 'src/app/Services/myvalidation.service';
import { MatRadioModule } from "@angular/material/radio/radio-module";
import { MatRadioButton } from '@angular/material/radio';
import { ViewportScroller } from '@angular/common';


@Component({
  selector: 'app-sheep-add',
  templateUrl: './sheep-add.component.html',
  styleUrls: ['./sheep-add.component.css']
})
export class SheepAddComponent implements OnInit {

  sheepForm!: FormGroup;
  success!: boolean;
  loading!: boolean;
  info!: string;

  races!: Race[];
  groups!: Group[];

  constructor(
    private sheepService: SheepService,
    private raceService: RaceService,
    private groupService: GroupService,
    public myValidationService: MyvalidationService,
    private router: Router) { }

  ngOnInit(): void {



    this.getGroup();
    this.getRace();



    this.sheepForm = new FormGroup({

      barcodeNo: new FormControl("", Validators.required),
      race: new FormControl("", Validators.required),
      group: new FormControl("", Validators.required),
      gender: new FormControl("", Validators.required),
      dateOfBirth: new FormControl("", Validators.required),
      age: new FormControl("", Validators.required),
      weight: new FormControl("", Validators.required),
      groupId: new FormControl(0, Validators.required),
      raceId: new FormControl(0, Validators.required),
    });


  }

  get getControls() {
    return this.sheepForm.controls;
  }




  onSubmit() {
    if (this.sheepForm) {

      this.sheepForm.value.barcodeNo = parseInt(this.sheepForm.value.barcodeNo);
      this.sheepForm.value.gender=this.sheepForm.value.gender==="true";
      this.sheepForm.value.age = parseInt(this.sheepForm.value.age);
      this.sheepForm.value.weight = parseInt(this.sheepForm.value.weight);
      this.sheepForm.value.groupId = parseInt(this.sheepForm.value.group.id);
      this.sheepForm.value.raceId = parseInt(this.sheepForm.value.race.id);

      this.sheepForm.value.group = null;
      this.sheepForm.value.race = null;

      this.loading = true;


      this.sheepService.addSheep(this.sheepForm.value).subscribe(data => {
        this.success = true;

        this.info = "Koyun bilgileri başarıyla eklendi. "
        console.log("koyun eklendi.");
        this.router.navigateByUrl("/listeler");

      },


        error => {

          this.loading=false;
          this.success = false;
          this.info = "Bir hata meydana geldi :" + error.message;
        }
      );
    }
  }

  displayRaceName(race: Race) {
    return race.name;

  }

  getRace() {
    this.raceService.getRaces().subscribe(result => {
      this.races = result;
    })
  }


  displayGroupName(group: Group) {
    return group.name;
  }



  getGroup() {
    this.groupService.getGroups().subscribe(result => {
      this.groups = result;
    })
  }




}
