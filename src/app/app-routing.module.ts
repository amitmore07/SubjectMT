import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { TodosComponent } from './components/todos/todos.component';
import { CompletedTodosComponent } from './components/completed-todos/completed-todos.component';
import { InCompletedTodosComponent } from './components/in-completed-todos/in-completed-todos.component';
import { Subject } from 'rxjs';
import { SubjectComponent } from './components/subject/subject.component';

const routes: Routes = [
  {
    path: ' ',
    component: NavbarComponent
  },
   {
    path: 'home',
    component: HomeComponent
  },
   {
    path: 'about',
    component: AboutComponent
  },
   {
    path: 'todos',
    component: TodosComponent
  },
   {
    path: 'completedTodos',
    component: CompletedTodosComponent
  },
   {
    path: 'inCompletedTodos',
    component: InCompletedTodosComponent
   },
    {
    path: 'subject',
    component: SubjectComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
