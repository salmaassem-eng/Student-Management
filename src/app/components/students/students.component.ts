import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Student, StudentsService } from '../../services/students.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  students$!: Observable<Student[]>;
  searchText: string = '';

  constructor(private studentsService: StudentsService) {}

  ngOnInit(): void {
    this.students$ = this.studentsService.students$;
  }

  onDeleteStudent(id: number): void {
    this.studentsService.deleteStudent(id);
  }
}
