import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-three',
  templateUrl: './three.component.html',
  styleUrls: ['./three.component.scss']
})
export class ThreeComponent implements OnInit {

  userName ! : string
  constructor(
    private _userService : UserService
  ) { }

  ngOnInit(): void {
    this._userService.userNameObs$.subscribe(data => this.userName = data)
  }

}
