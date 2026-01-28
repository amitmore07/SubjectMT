import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent implements OnInit {

  @ViewChild('userNameFrom') userNameFrom! : NgForm
  constructor(
    private _userService : UserService
  ) { }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.userNameFrom.valid){
      let val = this.userNameFrom.value
      console.log(val)
      this.userNameFrom.reset()
      this._userService.setUserName(val.userName)
    }

  }

}
