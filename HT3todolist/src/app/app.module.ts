import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app.component';
import { TaskTableComponent } from './components/task-table/task-table.component';
import { TaskViewComponent } from './components/task-view/task-view.component'
import { TasksService } from './services/tasks.service';

@NgModule({
  declarations: [
    AppComponent,
    TaskTableComponent,
    TaskViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [TasksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
