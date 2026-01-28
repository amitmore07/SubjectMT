import { Component, OnInit } from '@angular/core';
import { TodosService } from 'src/app/services/todos.service';
import { Itodos } from './models/todos';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  
  
  todosArr: Itodos[] = []

todosArrObs$! : Observable<Itodos[]> 
  
  constructor(
     private _todosService  : TodosService
  ) { }

  ngOnInit(): void {

    this.todosArrObs$ = this._todosService.getTodos()
    

  }

  trackById(index : number, item : any ){
    return item.id
  }
}
