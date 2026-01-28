import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/internal/Subject';

@Injectable({
  providedIn: 'root'
})
export class UserService {

 private userNameSub$ : Subject<string> = new Subject<string>()
 public userNameObs$  : Observable<string> = this.userNameSub$.asObservable()

  constructor() { }

  public setUserName (value : string){
    this.userNameSub$.next(value)
  }
}
