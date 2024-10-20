import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RUser, User, VUser } from '../types'

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private httpClient:HttpClient) { }

  defaultRUser: RUser = {
    email: "default@user.xyz",
    name: "Default Name",
    password: ''
  }

  defaultVUser: VUser = {
    entity: 'Emotion',
    name: 'Fear'
  }

  /* TEMPORARY! */
  public getLoggedInUser():RUser { 
    return this.defaultRUser;
  }

  /* TEMPORARY! */
  public getDefaultSystemUser():VUser {
    return this.defaultVUser;
  }

  public getAllUsers():User[] {
    return [this.getLoggedInUser(), this.getDefaultSystemUser()];
  }
}
