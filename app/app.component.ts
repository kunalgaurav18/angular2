import {Component} from 'angular2/core';
import {CourseComponent} from './course.component';
import {AuthorComponent} from './author.component';

@Component({
    selector: 'my-app',
    template: '<h1>List of courses</h1><course></course><author></author>',
    directives: [CourseComponent,AuthorComponent]
})
export class AppComponent { }