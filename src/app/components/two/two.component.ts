import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.scss']
})
export class TwoComponent implements OnInit {

  userName ! : string
  constructor(
    private _userService : UserService

  ) { }

  ngOnInit(): void {
    
    this._userService.userNameObs$.subscribe(data => this.userName = data)
  }

}
