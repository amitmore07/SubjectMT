import { Injectable } from '@angular/core';
import { filter, map } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';

@Injectable({
  providedIn: 'root'
})
export class OfService {

  skills : Array<string> = ['html', 'js', 'ts', 'Ngrx', 'Rxjs', 'bootstrap']

  of$ : Observable<number> = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)

  skills$ = of(this.skills).pipe(
    map(s =>{
      return s
    })
  )

  skillsStr$ = of(this.skills).pipe(
    map(s =>{
      return s.map(ele => `I love ${ele}`)
    })
  )



ofEven$ : Observable<number> = this.of$.pipe(
  filter(num => {
    return num % 2 === 0;
  })
)

ofEvenStr$ : Observable<any> = this.of$.pipe(
  filter(num =>{
    return num % 2 === 0;
  }),
  map(num =>{
    return `The value is ${num}`
  })
)
                    
  constructor() { }
}
