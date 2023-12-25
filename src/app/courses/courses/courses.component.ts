import { Component, OnInit } from '@angular/core';
import { Course } from '../model/course';
import { CoursesService } from '../services/courses.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses:  Observable<Course[]>;
  //courses: Course[] = []
  displayedColumns = ['name', 'category'];

  //courseService: CoursesService;

  constructor(private courseService: CoursesService){
    //this.courseService = new CoursesService();
    this.courses = this.courseService.list();
    //this.courseService.list().subscribe(courses => this.courses = courses);
   }

  ngOnInit(): void {
  }

}
