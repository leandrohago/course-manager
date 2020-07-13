
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


import { StarModule } from './../shared/component/star/star.module';
import { CourseInfoComponent } from './course-info.component';
import { CourseListComponent } from './course-list.component';
import { AppPipeModule } from './../shared/pipe/app-pipe.module';

const routes: Routes = [
    {
      path: 'courses', 
      component: CourseListComponent
    }
    ,{
      path: 'courses/info/:id', 
      component: CourseInfoComponent
    }
]

@NgModule({
    declarations:[
        CourseListComponent
        ,CourseInfoComponent
    ]
    ,imports:[
        StarModule
        ,CommonModule
        ,FormsModule
        ,AppPipeModule
        ,RouterModule.forChild(routes)
    ]
})

export class CourseModule {

}