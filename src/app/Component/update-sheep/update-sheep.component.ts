import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GroupService } from 'src/app/Services/group.service';
import { MyvalidationService } from 'src/app/Services/myvalidation.service';
import { RaceService } from 'src/app/Services/race.service';
import { SheepService } from 'src/app/Services/sheep.service';
import { FormGroup,FormControl,Validator,AbstractControl, Validators} from "@angular/forms";
import { Race } from 'src/app/Models/race';
import { Group } from 'src/app/Models/group';





@Component({
  selector: 'app-update-sheep',
  templateUrl: './update-sheep.component.html',
  styleUrls: ['./update-sheep.component.css']
})
export class UpdateSheepComponent implements OnInit {

  contentLoading:boolean=true;
  sheepForm!:FormGroup;
  success!:boolean;
  loading!:boolean;
  info!:string;

  races!: Race[];
  groups!: Group[];

  sheepId!:number;

  constructor(
    private sheepService:SheepService,
    private raceService:RaceService,
    private groupService:GroupService,
    public myValidationService:MyvalidationService,
    private router:Router,
    private route:ActivatedRoute) { }

  ngOnInit(): void {

    this.getGroup();
    this.getRace();

    this.sheepId= Number(this.route.snapshot.paramMap.get("id"));

    this.sheepService.getSheepById(this.sheepId).subscribe(data => {
      console.log(data)
      this.getControls.barcodeNo.setValue(data.barcodeNo);
      this.getControls.group.setValue(data.group.name);
      this.getControls.race.setValue(data.race.name)
      this.getControls.gender.setValue(data.gender);
      this.getControls.dateOfBirth.setValue(data.dateOfBirth);
      this.getControls.age.setValue(data.age);
      this.getControls.weight.setValue(data.weight);
      this.contentLoading=false;

    });


    this.sheepForm= new FormGroup({

      barcodeNo: new FormControl(Number, Validators.required),
      race: new FormControl(Race, Validators.required),
      group:new FormControl(Group, Validators.required),
      gender: new FormControl(Boolean, Validators.required),
      dateOfBirth: new FormControl(Date, Validators.required),
      age:new FormControl(Number,Validators.required),
      weight:new FormControl( Number, Validators.required),
      groupId: new FormControl(Number, Validators.required),
      raceId: new FormControl(Number, Validators.required),



    });

  }


  onSubmit()
  {

    if(this.sheepForm)
    {
      this.sheepForm.value.barcodeNo = this.sheepForm.value.barcodeNo;
      this.sheepForm.value.gender = this.sheepForm.value.gender === 'true';
      this.sheepForm.value.age = this.sheepForm.value.age;
      this.sheepForm.value.weight = this.sheepForm.value.weight;

      this.sheepForm.value.groupId = this.sheepForm.value.groupId;
      this.sheepForm.value.raceId= this.sheepForm.value.raceId;



      this.loading=true;

      this.sheepService.updateSheep(this.sheepId,this.sheepForm.value).subscribe( data  =>
        {
          this.success=true;
          console.log("koyun güncellendi.");
          this.info="Koyun bilgileri gücellendi";
          this.router.navigateByUrl("/listeler");

        },
        error => {

          this.success=false;
          this.info="Bir hata meydana geldi :" + error.message;
        }
      );
    }
  }

  get getControls()
  {
    return this.sheepForm.controls;
  }

  getGroup()
  {
    this.groupService.getGroups().subscribe(result => {
      this.groups=result;
    })
  }


  displayGroupName(group:Group)
  {
    return group.name;
  }



  getRace()
  {
    this.raceService.getRaces().subscribe(result => {
      this.races=result;
    })
  }

  displayRaceName(race:Race)
  {
    return race.name;
  }





}
