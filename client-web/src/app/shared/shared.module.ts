import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenubarComponent } from './menubar/menubar.component';
import { ClassCalendarComponent } from './class-calendar/class-calendar.component';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [MenubarComponent, ClassCalendarComponent, MainComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
