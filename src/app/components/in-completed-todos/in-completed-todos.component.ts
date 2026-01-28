import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Itodos } from '../todos/models/todos';
import { TodosService } from 'src/app/services/todos.service';

@Component({
  selector: 'app-in-completed-todos',
  templateUrl: './in-completed-todos.component.html',
  styleUrls: ['./in-completed-todos.component.scss']
})
export class InCompletedTodosComponent implements OnInit {

  todosArrObs$! : Observable<Itodos[]> 
  constructor(
    private _todosService  : TodosService
  ) { }

  ngOnInit(): void {

     this.todosArrObs$ = this._todosService.getInCompletedTodos()
  }

 
 trackById(index : number, item : any ){
    return item.id
  }

}
