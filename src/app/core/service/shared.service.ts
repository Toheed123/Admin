import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  public sideMenuName = new BehaviorSubject<string>('')

  constructor(
  ) { }
}
