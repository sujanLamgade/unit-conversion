import { Component } from '@angular/core';
import { UnitService } from '../unit.service';

@Component({
  selector: 'app-unit-conversions',
  templateUrl: './unit-conversions.component.html',
  styleUrls: ['./unit-conversions.component.scss']
})
export class UnitConversionComponent {
  students: any;
  studentTestData: any;
  units = [{
    name: 'Kelvin',
    value: 'Kelvin'
  }, {
    name: 'Celsius',
    value: 'Celsius'
  }, {
    name: 'Fahrenheit',
    value: 'Fahrenheit'
  }, {
    name: 'Rankine',
    value: 'Rankine'
  }, {
    name: 'liters',
    value: 'liters'
  }, {
    name: 'tablespoons',
    value: 'tablespoons'
  }, {
    name: 'cubic-inches',
    value: 'cubic-inches'
  }, {
    name: 'cups',
    value: 'cups'
  }, {
    name: 'cubic-feet,',
    value: 'cubic-feet,'
  }, {
    name: 'gallons',
    value: 'gallons'
  }];
  constructor(private unitService: UnitService) {
    console.log('unit converison', this.unitService.students);
    this.students = this.unitService.students;
    this.studentTestData = [];
    for (let index = 0; index < this.students.length; index++) {
      const element = this.students[index];
      const data = {
        id: element.id,
        name: element.name,
        inputValue: '',
        inputUnit: '',
        targetUnit: '',
        studentResp: '',
        output: ''
      }
      this.studentTestData.push(data);
    }
  }

  respData(item: any) {
    console.log(item);
    item.output = 'correct';
    if (isNaN(item.studentResp)) {
      item.output = 'invalid';
      return;
    }
    item.studentResp = +item.studentResp;
    switch (item.inputUnit) {
      case 'Kelvin':
        if (item.targetUnit === 'Celsius') {
          const num = item.inputValue - 273.15;
          const val = Math.round((num + Number.EPSILON) * 100) / 100
          console.log(val);
          const studentResp = Math.round((item.studentResp + Number.EPSILON) * 100) / 100;
          if (val === studentResp) {
            item.output = 'correct';
          } else {
            item.output = 'incorrect';
          }
        } else if (item.targetUnit === 'Fahrenheit') {
          const num = (item.inputValue - 273.15) * 9 / 5 + 32;
          const val = Math.round((num + Number.EPSILON) * 100) / 100
          const studentResp = Math.round((item.studentResp + Number.EPSILON) * 100) / 100;
          if (val === studentResp) {
            item.output = 'correct';
          } else {
            item.output = 'incorrect';
          }
        } else if (item.targetUnit === 'Rankine') {
          const num = (item.inputValue - 273.15) * 9 / 5;
          const val = Math.round((num + Number.EPSILON) * 100) / 100
          const studentResp = Math.round((item.studentResp + Number.EPSILON) * 100) / 100;
          if (val === studentResp) {
            item.output = 'correct';
          } else {
            item.output = 'incorrect';
          }
        } else {
          item.output = 'incorrect';
        }
        break;
      case 'Celsius':
        if (item.targetUnit === 'Kelvin') {
          const num = item.inputValue + 273.15;
          const val = Math.round((num + Number.EPSILON) * 100) / 100;
          const studentResp = Math.round((item.studentResp + Number.EPSILON) * 100) / 100;
          if (val === studentResp) {
            item.output = 'correct';
          } else {
            item.output = 'incorrect';
          }
        } else if (item.targetUnit === 'Fahrenheit') {
          const num = item.inputValue * 1.8;
          const val = Math.round((num + Number.EPSILON) * 100) / 100;
          const studentResp = Math.round((item.studentResp + Number.EPSILON) * 100) / 100;
          if (val === studentResp) {
            item.output = 'correct';
          } else {
            item.output = 'incorrect';
          }
        } else if (item.targetUnit === 'Rankine') {
          const num = (item.inputValue + 273.15) * 9 / 5;
          const val = Math.round((num + Number.EPSILON) * 100) / 100;
          const studentResp = Math.round((item.studentResp + Number.EPSILON) * 100) / 100;
          if (val === studentResp) {
            item.output = 'correct';
          } else {
            item.output = 'incorrect';
          }
        }
        break;
      case 'Fahrenheit':
        if (item.targetUnit === 'Kelvin') {
          const num = item.inputValue + 273.15;
          const val = Math.round((num + Number.EPSILON) * 100) / 100;
          const studentResp = Math.round((item.studentResp + Number.EPSILON) * 100) / 100;
          if (val === studentResp) {
            item.output = 'correct';
          } else {
            item.output = 'incorrect';
          }
        } else if (item.targetUnit === 'Celsius') {
          const num = (item.inputValue - 32) * 5 / 9;
          const val = Math.round((num + Number.EPSILON) * 100) / 100;
          const studentResp = Math.round((item.studentResp + Number.EPSILON) * 100) / 100;
          if (val === studentResp) {
            item.output = 'correct';
          } else {
            item.output = 'incorrect';
          }
        } else if (item.targetUnit === 'Rankine') {
          const num = (item.inputValue + 459.67);
          const val = Math.round((num + Number.EPSILON) * 100) / 100;
          const studentResp = Math.round((item.studentResp + Number.EPSILON) * 100) / 100;
          if (val === studentResp) {
            item.output = 'correct';
          } else {
            item.output = 'incorrect';
          }
        } else {
          item.output = 'incorrect';
        }
        break;
      case 'Rankine':
        if (item.targetUnit === 'Kelvin') {
          const num = item.inputValue * 5 / 9;
          const val = Math.round((num + Number.EPSILON) * 100) / 100;
          const studentResp = Math.round((item.studentResp + Number.EPSILON) * 100) / 100;
          if (val === studentResp) {
            item.output = 'correct';
          } else {
            item.output = 'incorrect';
          }
        } else if (item.targetUnit === 'Celsius') {
          const num = (item.inputValue - 491.67) * 5 / 9;
          const val = Math.round((num + Number.EPSILON) * 100) / 100;
          const studentResp = Math.round((item.studentResp + Number.EPSILON) * 100) / 100;
          if (val === studentResp) {
            item.output = 'correct';
          } else {
            item.output = 'incorrect';
          }
        } else if (item.targetUnit === 'Fahrenheit') {
          const num = (item.inputValue - 459.67);
          const val = Math.round((num + Number.EPSILON) * 100) / 100;
          const studentResp = Math.round((item.studentResp + Number.EPSILON) * 100) / 100;
          if (val === studentResp) {
            item.output = 'correct';
          } else {
            item.output = 'incorrect';
          }
        } else {
          item.output = 'incorrect';
        }
        break;
      case 'liters':
        if (item.targetUnit === 'tablespoons') {
          const num = (item.inputValue * 67.628);
          const val = Math.round((num + Number.EPSILON) * 100) / 100;
          const studentResp = Math.round((item.studentResp + Number.EPSILON) * 100) / 100;
          if (val === studentResp) {
            item.output = 'correct';
          } else {
            item.output = 'incorrect';
          }
        } else if (item.targetUnit === 'cubic-inches') {
          const num = (item.inputValue * 61.0237);
          const val = Math.round((num + Number.EPSILON) * 100) / 100;
          const studentResp = Math.round((item.studentResp + Number.EPSILON) * 100) / 100;
          if (val === studentResp) {
            item.output = 'correct';
          } else {
            item.output = 'incorrect';
          }
        } else if (item.targetUnit === 'cups') {
          const num = (item.inputValue * 4.22675);
          const val = Math.round((num + Number.EPSILON) * 100) / 100;
          const studentResp = Math.round((item.studentResp + Number.EPSILON) * 100) / 100;
          if (val === studentResp) {
            item.output = 'correct';
          } else {
            item.output = 'incorrect';
          }
        } else if (item.targetUnit === 'cubic-feet') {
          const num = (item.inputValue * 0.0353147);
          const val = Math.round((num + Number.EPSILON) * 100) / 100;
          const studentResp = Math.round((item.studentResp + Number.EPSILON) * 100) / 100;
          if (val === studentResp) {
            item.output = 'correct';
          } else {
            item.output = 'incorrect';
          }
        } else if (item.targetUnit === 'gallons') {
          const num = (item.inputValue * 0.264172);
          const val = Math.round((num + Number.EPSILON) * 100) / 100;
          const studentResp = Math.round((item.studentResp + Number.EPSILON) * 100) / 100;
          if (val === studentResp) {
            item.output = 'correct';
          } else {
            item.output = 'incorrect';
          }
        } else {
          item.output = 'incorrect';
        }
        break;
      case 'tablespoons':
        if (item.targetUnit === 'liters') {
          const num = (item.inputValue * 0.0147868);
          const val = Math.round((num + Number.EPSILON) * 100) / 100;
          const studentResp = Math.round((item.studentResp + Number.EPSILON) * 100) / 100;
          if (val === studentResp) {
            item.output = 'correct';
          } else {
            item.output = 'incorrect';
          }
        } else if (item.targetUnit === 'cubic-inches') {
          const num = (item.inputValue * 0.902344);
          const val = Math.round((num + Number.EPSILON) * 100) / 100;
          const studentResp = Math.round((item.studentResp + Number.EPSILON) * 100) / 100;
          if (val === studentResp) {
            item.output = 'correct';
          } else {
            item.output = 'incorrect';
          }
        } else if (item.targetUnit === 'cups') {
          const num = (item.inputValue * 0.0625);
          const val = Math.round((num + Number.EPSILON) * 100) / 100;
          const studentResp = Math.round((item.studentResp + Number.EPSILON) * 100) / 100;
          if (val === studentResp) {
            item.output = 'correct';
          } else {
            item.output = 'incorrect';
          }
        } else if (item.targetUnit === 'cubic-feet') {
          const num = (item.inputValue * 0.00052219);
          const val = Math.round((num + Number.EPSILON) * 100) / 100;
          const studentResp = Math.round((item.studentResp + Number.EPSILON) * 100) / 100;
          if (val === studentResp) {
            item.output = 'correct';
          } else {
            item.output = 'incorrect';
          }
        } else if (item.targetUnit === 'gallons') {
          const num = (item.inputValue * 0.00390625);
          const val = Math.round((num + Number.EPSILON) * 100) / 100;
          const studentResp = Math.round((item.studentResp + Number.EPSILON) * 100) / 100;
          if (val === studentResp) {
            item.output = 'correct';
          } else {
            item.output = 'incorrect';
          }
        } else {
          item.output = 'incorrect';
        }
        break;
      case 'cubic-inches':
        if (item.targetUnit === 'liters') {
          const num = (item.inputValue * 0.0163871);
          const val = Math.round((num + Number.EPSILON) * 100) / 100;
          const studentResp = Math.round((item.studentResp + Number.EPSILON) * 100) / 100;
          if (val === studentResp) {
            item.output = 'correct';
          } else {
            item.output = 'incorrect';
          }
        } else if (item.targetUnit === 'tablespoons') {
          const num = (item.inputValue * 1.10823);
          const val = Math.round((num + Number.EPSILON) * 100) / 100;
          const studentResp = Math.round((item.studentResp + Number.EPSILON) * 100) / 100;
          if (val === studentResp) {
            item.output = 'correct';
          } else {
            item.output = 'incorrect';
          }
        } else if (item.targetUnit === 'cups') {
          const num = (item.inputValue * 0.0692641);
          const val = Math.round((num + Number.EPSILON) * 100) / 100;
          const studentResp = Math.round((item.studentResp + Number.EPSILON) * 100) / 100;
          if (val === studentResp) {
            item.output = 'correct';
          } else {
            item.output = 'incorrect';
          }
        } else if (item.targetUnit === 'cubic-feet') {
          const num = (item.inputValue * 0.000578704);
          const val = Math.round((num + Number.EPSILON) * 100) / 100;
          const studentResp = Math.round((item.studentResp + Number.EPSILON) * 100) / 100;
          if (val === studentResp) {
            item.output = 'correct';
          } else {
            item.output = 'incorrect';
          }
        } else if (item.targetUnit === 'gallons') {
          const num = (item.inputValue * 0.004329);
          const val = Math.round((num + Number.EPSILON) * 100) / 100;
          const studentResp = Math.round((item.studentResp + Number.EPSILON) * 100) / 100;
          if (val === studentResp) {
            item.output = 'correct';
          } else {
            item.output = 'incorrect';
          }
        } else {
          item.output = 'incorrect';
        }
        break;
      case 'cups':
        if (item.targetUnit === 'liters') {
          const num = (item.inputValue * 0.236588);
          const val = Math.round((num + Number.EPSILON) * 100) / 100;
          const studentResp = Math.round((item.studentResp + Number.EPSILON) * 100) / 100;
          if (val === studentResp) {
            item.output = 'correct';
          } else {
            item.output = 'incorrect';
          }
        } else if (item.targetUnit === 'tablespoons') {
          const num = (item.inputValue * 16);
          const val = Math.round((num + Number.EPSILON) * 100) / 100;
          const studentResp = Math.round((item.studentResp + Number.EPSILON) * 100) / 100;
          if (val === studentResp) {
            item.output = 'correct';
          } else {
            item.output = 'incorrect';
          }
        } else if (item.targetUnit === 'cubic-inches') {
          const num = (item.inputValue * 14.4375);
          const val = Math.round((num + Number.EPSILON) * 100) / 100;
          const studentResp = Math.round((item.studentResp + Number.EPSILON) * 100) / 100;
          if (val === studentResp) {
            item.output = 'correct';
          } else {
            item.output = 'incorrect';
          }
        } else if (item.targetUnit === 'cubic-feet') {
          const num = (item.inputValue * 0.00835503);
          const val = Math.round((num + Number.EPSILON) * 100) / 100;
          const studentResp = Math.round((item.studentResp + Number.EPSILON) * 100) / 100;
          if (val === studentResp) {
            item.output = 'correct';
          } else {
            item.output = 'incorrect';
          }
        } else if (item.targetUnit === 'gallons') {
          const num = (item.inputValue * 0.0625);
          const val = Math.round((num + Number.EPSILON) * 100) / 100;
          const studentResp = Math.round((item.studentResp + Number.EPSILON) * 100) / 100;
          if (val === studentResp) {
            item.output = 'correct';
          } else {
            item.output = 'incorrect';
          }
        } else {
          item.output = 'incorrect';
        }
        break;
      case 'cubic-feet':
        if (item.targetUnit === 'liters') {
          const num = (item.inputValue * 28.3168);
          const val = Math.round((num + Number.EPSILON) * 100) / 100;
          const studentResp = Math.round((item.studentResp + Number.EPSILON) * 100) / 100;
          if (val === studentResp) {
            item.output = 'correct';
          } else {
            item.output = 'incorrect';
          }
        } else if (item.targetUnit === 'tablespoons') {
          const num = (item.inputValue * 1915.01);
          const val = Math.round((num + Number.EPSILON) * 100) / 100;
          const studentResp = Math.round((item.studentResp + Number.EPSILON) * 100) / 100;
          if (val === studentResp) {
            item.output = 'correct';
          } else {
            item.output = 'incorrect';
          }
        } else if (item.targetUnit === 'cubic-inches') {
          const num = (item.inputValue * 1728);
          const val = Math.round((num + Number.EPSILON) * 100) / 100;
          const studentResp = Math.round((item.studentResp + Number.EPSILON) * 100) / 100;
          if (val === studentResp) {
            item.output = 'correct';
          } else {
            item.output = 'incorrect';
          }
        } else if (item.targetUnit === 'cups') {
          const num = (item.inputValue * 119.688);
          const val = Math.round((num + Number.EPSILON) * 100) / 100;
          const studentResp = Math.round((item.studentResp + Number.EPSILON) * 100) / 100;
          if (val === studentResp) {
            item.output = 'correct';
          } else {
            item.output = 'incorrect';
          }
        } else if (item.targetUnit === 'gallons') {
          const num = (item.inputValue * 7.48052);
          const val = Math.round((num + Number.EPSILON) * 100) / 100;
          const studentResp = Math.round((item.studentResp + Number.EPSILON) * 100) / 100;
          if (val === studentResp) {
            item.output = 'correct';
          } else {
            item.output = 'incorrect';
          }
        } else {
          item.output = 'incorrect';
        }
        break;
      case 'gallons':
        if (item.targetUnit === 'liters') {
          const num = (item.inputValue * 3.78541);
          const val = Math.round((num + Number.EPSILON) * 100) / 100;
          const studentResp = Math.round((item.studentResp + Number.EPSILON) * 100) / 100;
          if (val === studentResp) {
            item.output = 'correct';
          } else {
            item.output = 'incorrect';
          }
        } else if (item.targetUnit === 'tablespoons') {
          const num = (item.inputValue * 256);
          const val = Math.round((num + Number.EPSILON) * 100) / 100;
          const studentResp = Math.round((item.studentResp + Number.EPSILON) * 100) / 100;
          if (val === studentResp) {
            item.output = 'correct';
          } else {
            item.output = 'incorrect';
          }
        } else if (item.targetUnit === 'cubic-inches') {
          const num = (item.inputValue * 231);
          const val = Math.round((num + Number.EPSILON) * 100) / 100;
          const studentResp = Math.round((item.studentResp + Number.EPSILON) * 100) / 100;
          if (val === studentResp) {
            item.output = 'correct';
          } else {
            item.output = 'incorrect';
          }
        } else if (item.targetUnit === 'cups') {
          const num = (item.inputValue * 16);
          const val = Math.round((num + Number.EPSILON) * 100) / 100;
          const studentResp = Math.round((item.studentResp + Number.EPSILON) * 100) / 100;
          if (val === studentResp) {
            item.output = 'correct';
          } else {
            item.output = 'incorrect';
          }
        } else if (item.targetUnit === 'cubic-feet') {
          const num = (item.inputValue * 0.133681);
          const val = Math.round((num + Number.EPSILON) * 100) / 100;
          const studentResp = Math.round((item.studentResp + Number.EPSILON) * 100) / 100;
          if (val === studentResp) {
            item.output = 'correct';
          } else {
            item.output = 'incorrect';
          }
        } else {
          item.output = 'incorrect';
        }
        break;
    }
  }
}
