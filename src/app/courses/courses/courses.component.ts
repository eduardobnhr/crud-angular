import { Component, OnInit } from '@angular/core';
import { Course } from '../model/course';
import { CoursesService } from '../services/courses.service';
import { Observable, catchError, of } from 'rxjs';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses$:  Observable<Course[]>;
  //courses: Course[] = []
  displayedColumns = ['name', 'category'];

  //courseService: CoursesService;

  constructor(private courseService: CoursesService){

    this.courses$ = this.courseService.list()
    .pipe(
      catchError(error => {
        console.log(error);
        return of([])
      })
    );
   }

  ngOnInit(): void {
  }

}
