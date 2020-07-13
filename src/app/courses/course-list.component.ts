import { CourseService } from './course.service';
import { Component, OnInit } from '@angular/core';
import { Course } from './course';
import { error } from '@angular/compiler/src/util';

@Component({
	templateUrl: './course-list.component.html'
})

export class CourseListComponent implements OnInit {
	
	_courses: Course[] = []

	_filterBy: string
	filteredCourses: Course[] = []

	constructor(private CourseService: CourseService){ }
	
	title: string
	coursesQuantity: number
	
	ngOnInit(): void{
		this.title = 'Courses List'
		this.retrieveAll()
	}
	
	retrieveAll(): void{
		this.CourseService.retrieveAll().subscribe({
			next: courses => {
				this._courses = courses
				this.filteredCourses = this._courses
				this.coursesQuantity = this._courses.length
			}
			,error: err => console.log('Error', err)
		})
	}

	deleteById(courseId: number): void{
		this.CourseService.deleteById(courseId).subscribe({
			next: () => {
				console.log('Delete with sucess')
				this.retrieveAll()
			}
			,error: err => console.log('Error', err)
		})
	}

	set filter(value: string){
		this._filterBy = value
		this.filteredCourses = this._courses.filter(
			(course: Course) => 
				course.name.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1
			)
	}
	
	get filter(){
		return this._filterBy
	}

}