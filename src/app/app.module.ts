import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { UnitConversionComponent } from './unit-conversions/unit-conversions.component';
import { UnitService } from './unit.service';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    UnitConversionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [UnitService],
  bootstrap: [AppComponent]
})
export class AppModule { }
