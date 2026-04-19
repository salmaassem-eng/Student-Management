import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from '../../services/students.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.css']
})
export class StudentTableComponent {

  //receive data from search and view student  ==> name
  @Input() students: Student[] = [];
  @Input() searchText: string = '';
  @Output() deleteStudent = new EventEmitter<number>();

  pendingDeleteId: number | null = null;
  constructor(private router: Router, private toastr: ToastrService) {}



  get filteredStudents(): Student[] {                                 //relate to search
    if (!this.searchText.trim()) return this.students;
    const q = this.searchText.toLowerCase();
    return this.students.filter(s =>
      s.firstName.toLowerCase().includes(q) ||
      s.lastName.toLowerCase().includes(q)
    );
  }

  viewStudent(id: number): void {
    this.router.navigate(['/student', id]);
  }

   onDelete(id: number): void {
    this.pendingDeleteId = id;
  }

  confirmDelete(student: Student): void {
    this.deleteStudent.emit(student.id);
    this.pendingDeleteId = null;
    this.toastr.error(
      `${student.firstName} ${student.lastName} has been removed.`,
      '🗑 Student Deleted'
    );
  }

  cancelDelete(): void {
    this.pendingDeleteId = null;
    this.toastr.info('Delete cancelled.', 'Cancelled');
  }
}
