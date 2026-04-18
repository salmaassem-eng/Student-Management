import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface Student {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  gender: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  country: string;
  department: string;
  level: number;
  GPA: number;
  enrollmentDate: string;
  isActive: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  // BehaviorSubject holds the list and notifies all subscribers on every change
  private studentsSubject = new BehaviorSubject<Student[]>([
    {
      id: 1,
      firstName: 'Ali',
      lastName: 'Hassan',
      age: 21,
      gender: 'Male',
      email: 'ali.hassan@email.com',
      phone: '01000000000',
      address: '12 Main Street',
      city: 'Cairo',
      country: 'Egypt',
      department: 'Computer Science',
      level: 3,
      GPA: 3.2,
      enrollmentDate: '2023-09-01',
      isActive: true
    },
    {
      id: 2,
      firstName: 'Sara',
      lastName: 'Ahmed',
      age: 20,
      gender: 'Female',
      email: 'sara.ahmed@email.com',
      phone: '01100000001',
      address: '45 Nile Street',
      city: 'Alexandria',
      country: 'Egypt',
      department: 'Business',
      level: 2,
      GPA: 3.7,
      enrollmentDate: '2024-09-01',
      isActive: true
    },
    {
      id: 3,
      firstName: 'Omar',
      lastName: 'Khaled',
      age: 22,
      gender: 'Male',
      email: 'omar.khaled@email.com',
      phone: '01200000002',
      address: '7 Desert Road',
      city: 'Giza',
      country: 'Egypt',
      department: 'Engineering',
      level: 4,
      GPA: 2.9,
      enrollmentDate: '2022-09-01',
      isActive: false
    },
    {
      id: 4,
      firstName: 'Nour',
      lastName: 'Mostafa',
      age: 19,
      gender: 'Female',
      email: 'nour.mostafa@email.com',
      phone: '01300000003',
      address: '3 Garden City',
      city: 'Cairo',
      country: 'Egypt',
      department: 'Medicine',
      level: 1,
      GPA: 3.9,
      enrollmentDate: '2024-09-01',
      isActive: true
    }
  ]);

  // Expose as Observable so components can only read, not modify directly
  students$: Observable<Student[]> = this.studentsSubject.asObservable();

  getStudentById(id: number): Student | undefined {
    return this.studentsSubject.getValue().find(s => s.id === id);
  }

  addStudent(student: Omit<Student, 'id'>): void {
    const current = this.studentsSubject.getValue();
    const newId = current.length > 0 ? Math.max(...current.map(s => s.id)) + 1 : 1;
    this.studentsSubject.next([...current, { id: newId, ...student }]);
  }

  deleteStudent(id: number): void {
    const updated = this.studentsSubject.getValue().filter(s => s.id !== id);
    this.studentsSubject.next(updated);
  }
}
