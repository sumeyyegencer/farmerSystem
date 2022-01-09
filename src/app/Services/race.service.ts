import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { Race } from "../Models/race";


@Injectable({
  providedIn: 'root'
})
export class RaceService {

 private apiUrl:string="https://localhost:44335/api/races";

  constructor(private httpClient:HttpClient) { }

  public getRaces()
  {
    return this.httpClient.get<Race[]>(this.apiUrl);
  }


  public getRacebyId(id:number)
  {

    let url= `${this.apiUrl}/${id}`;

    return this.httpClient.get<Race>(url);

  }





}
