import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StudentsService } from '../../services/students.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent {

  // All form fields stored here — bound with [(ngModel)]
  student = {
    firstName: '',
    lastName: '',
    age: null as number | null,
    gender: 'Male',
    email: '',
    phone: '',
    address: '',
    city: '',
    country: '',
    department: '',
    level: null as number | null,
    GPA: null as number | null,
    enrollmentDate: '',
    isActive: true
  };

  successMessage: string = '';

  constructor(private studentsService: StudentsService, private router: Router) {}

  onSubmit(): void {
    if (!this.student.firstName || !this.student.lastName || !this.student.email || !this.student.department || !this.student.GPA) {
      alert('Please fill in all required fields.');
      return;
    }

    this.studentsService.addStudent({
      firstName:      this.student.firstName,
      lastName:       this.student.lastName,
      age:            this.student.age || 0,
      gender:         this.student.gender,
      email:          this.student.email,
      phone:          this.student.phone,
      address:        this.student.address,
      city:           this.student.city,
      country:        this.student.country,
      department:     this.student.department,
      level:          this.student.level || 1,
      GPA:            this.student.GPA || 0,
      enrollmentDate: this.student.enrollmentDate,
      isActive:       this.student.isActive
    });

    this.successMessage = '✅ Student added successfully!';
    setTimeout(() => this.router.navigate(['/students']), 1500);
  }
}
