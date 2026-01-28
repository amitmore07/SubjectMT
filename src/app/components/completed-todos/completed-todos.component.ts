import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { TodosService } from 'src/app/services/todos.service';
import { Itodos } from '../todos/models/todos';

@Component({
  selector: 'app-completed-todos',
  templateUrl: './completed-todos.component.html',
  styleUrls: ['./completed-todos.component.scss']
})
export class CompletedTodosComponent implements OnInit {

  todosArrObs$! : Observable<Itodos[]> 
  constructor(
    private _todosService  : TodosService
  ) { }

  ngOnInit(): void {

     this.todosArrObs$ = this._todosService.getCompletedTodos()

  
  }

   trackById(index : number, item : any ){
    return item.id
  }
}
