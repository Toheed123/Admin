import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  
  public isLogin = new BehaviorSubject<boolean>(true)

  constructor() { }
}
