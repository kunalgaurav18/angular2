import {Component} from 'angular2/core';
import {CourseServices} from './course.services'

@Component({
    selector: 'course',
    template: `<h2>Courses</h2>{{title}}
        <ul>
            <li *ngFor="#course of courses">{{course}}</li>
        </ul>
    `,
    providers: [CourseServices]
})

export class CourseComponent{
    title = "List of all the courses:"
    courses;
    constructor(courseService : CourseServices){
        this.courses = courseService.getCourses();
    }
}