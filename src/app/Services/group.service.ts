import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Group } from "../Models/group";

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  private apiUrl:string="https://localhost:44335/api/groups";
  loading!: boolean;

  constructor(private httpClient:HttpClient) { }


  public getGroups()
  {
    return this.httpClient.get<Group[]>(this.apiUrl);

  }

  public getGroupbyId(id:number)
  {

    let url= `${this.apiUrl}/${id}`;

    return this.httpClient.get<Group>(url);

  }


}
