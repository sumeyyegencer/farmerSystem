import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { Sheep } from "../Models/sheep";
import { tap } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SheepService {

  constructor(private httpClient:HttpClient) { }

  public loading:boolean=true;

  private apiUrl:string="https://localhost:44335/api/sheep";


  getSheep()
  {
    return this.httpClient.get<Sheep[]>(this.apiUrl);

  }


  getSheepById(id:number)
  {
    let api=`${this.apiUrl}/${id}`;

    return this.httpClient.get<Sheep>(api);
  }

  getSheepWithGroup(groupId:Number){

    let api =`${this.apiUrl}/GetSheepWithGroup/${groupId}`;

    return this.httpClient.get<Sheep[]>(api).pipe(
      tap(x=> {
        this.loading=false;
      })
    )

   }

  addSheep(sheep:Sheep)
  {
     return this.httpClient.post(this.apiUrl,sheep);
  }

  updateSheep(id:number, sheep:Sheep)
  {
    return this.httpClient.put(`${this.apiUrl}/${id}`,sheep);
  }

  deleteSheep(id:number)
  {
    return this.httpClient.delete(`${this.apiUrl}/${id}`);
  }
}
