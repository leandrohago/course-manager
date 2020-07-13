import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { CoreModule } from './core/core.module';
import { CourseModule } from './courses/course.module';
import { Error404Component } from './core/component/error-404/error-404.component';

const routes: Routes = [
  {
    path: '', 
    redirectTo: 'courses', 
    pathMatch: 'full'
  }
  ,{
    path: '**'
    ,component: Error404Component
  }
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
    ,HttpClientModule
    ,CoreModule
    ,CourseModule
    ,RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
