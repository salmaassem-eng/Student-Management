import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student, StudentsService } from '../../services/students.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {

  student: Student | undefined;

  constructor(
    private route: ActivatedRoute,
    private studentsService: StudentsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Read :id from the URL e.g. /student/3
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.student = this.studentsService.getStudentById(id);
  }

  goBack(): void {
    this.router.navigate(['/students']);
  }
}
