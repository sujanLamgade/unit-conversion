import { Component } from '@angular/core';
import { UnitService } from './unit.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'unit-conversion';
  students: any;
  id = 1;
  constructor(private unitService: UnitService) {
    this.students = this.unitService.students;
  }
  openTab(id: any) {
    console.log(id);
    this.id = id;
  }
}
