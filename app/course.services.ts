import {Component} from 'angular2/core';

@Component({

})

export class CourseServices{
    getCourses(): string[]{
        return ["Course1", "Course2", "Course3"];
    }
}