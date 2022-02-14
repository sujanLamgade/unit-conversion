import { Component } from '@angular/core';
import { UnitService } from '../unit.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent {
  title = 'unit-conversion';
  student = {
    id: -1,
    name: ''
  }
  students: any;
  constructor(private unitService: UnitService) {
    console.log('student');
    this.students = [];
  }
  addNewStudent() {
    if (this.student.name) {
      this.students.push(this.student);
      this.student = {
        id: -1,
        name: this.student.name
      }
      this.uploadStudentData();
    }
  }

  createNewStudent() {
    this.student = {
      id: this.students[this.students.length-1]?.id || 0+ 1,
      name: ''
    }
  }

  uploadStudentData() {
    console.log('Upload student data');
    this.unitService.students = this.students;
  }
}
