import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userName: string = '';

  setUsername(name: string) {
    this.userName = name;
  }

  getUsername(): string {
    return this.userName;
  }
  constructor() { }
}
