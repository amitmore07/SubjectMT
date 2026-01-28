import { Component, Input, OnInit } from '@angular/core';
import { OfService } from 'src/app/services/of.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  


  skillArr: string[] = []



  constructor(
    private _ofService : OfService
  ) { }

  ngOnInit(): void {

    this._ofService.ofEven$.subscribe(res => {
      console.log(res)
    })

    this._ofService.ofEvenStr$.subscribe(res => {
     console.log(res)
    })

    this._ofService.skills$.subscribe(arr => {
      this.skillArr=arr
    })

     
    
  }

  trackById(index : number, item : any ){
    return item.id
  }
}
