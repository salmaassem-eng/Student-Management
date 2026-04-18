import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from '../../services/students.service';

@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.css']
})
export class StudentTableComponent {

  // @Input: receives students list from parent (StudentsComponent)
  @Input() students: Student[] = [];

  // @Input: receives search text from parent
  @Input() searchText: string = '';

  // @Output: sends the id to delete back up to parent
  @Output() deleteStudent = new EventEmitter<number>();

  constructor(private router: Router) {}

  // Filter by first or last name matching the search text
  get filteredStudents(): Student[] {
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
    if (confirm('Are you sure you want to delete this student?')) {
      this.deleteStudent.emit(id);
    }
  }
}
