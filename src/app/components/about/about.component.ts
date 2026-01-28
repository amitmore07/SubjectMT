import { Component, OnInit } from '@angular/core';
import { OfService } from 'src/app/services/of.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  skillStrArr : string[] = [];
  constructor(
    private _ofService : OfService
  ) { }

  ngOnInit(): void {

    this._ofService.skillsStr$.subscribe(res => {
      this.skillStrArr=res
    })
  }

  trackById(index : number, item : any ){
    return item.id
  }
}
