import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { Itodos } from '../components/todos/models/todos';
import { map } from 'rxjs/internal/operators/map';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

   BASE_URL : string = environment.BASE_URL;
   TODOS_URL : string =`${this.BASE_URL}/todos`



  constructor(
    private _httpClient : HttpClient
  ) { }

 getTodos():Observable<Itodos[]> {
   return this._httpClient.get<Itodos[]>(this.TODOS_URL)
  }



  getCompletedTodos():Observable<Itodos[]>{
   return this.getTodos().pipe(
    map(arr =>{
      console.log(arr)
      let completedArr = arr.filter(t =>{
        return t.completed
      })
      return completedArr
    })
   )
}


getInCompletedTodos():Observable<Itodos[]>{
   return this.getTodos().pipe(
    map(arr =>{
      console.log(arr)
      let completedArr = arr.filter(t =>{
        return !t.completed
      })
      return completedArr
    })
   )
}


}
