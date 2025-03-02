import { Component } from '@angular/core';
import { Appointment } from '../models/appointment';


@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrl: './appointment-list.component.css'
})
export class AppointmentListComponent {

  newAppointmentTitle: string = "";
  newAppointmentDate: Date = new Date();

  appointment: Appointment[] = []

  addAppointement() {
    alert(this.newAppointmentTitle + " " + this.newAppointmentDate)
  }
}
