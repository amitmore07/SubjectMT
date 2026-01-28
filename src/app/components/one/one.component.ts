import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.scss']
})
export class OneComponent implements OnInit {

  userName ! : string
  constructor(
    private _userService : UserService
  ) { }

  ngOnInit(): void {

    this._userService.userNameObs$.subscribe(data => this.userName = data)
  }

}
