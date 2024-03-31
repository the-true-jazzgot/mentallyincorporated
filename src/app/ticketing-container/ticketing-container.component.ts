import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TicketComponent } from '../ticket/ticket.component';
import { CreateTicketFormComponent } from "../create-ticket-form/create-ticket-form.component";

import { Ticket } from '../interfaces/Ticket';

@Component({
    selector: 'app-ticketing-container',
    standalone: true,
    templateUrl: './ticketing-container.component.html',
    styleUrl: './ticketing-container.component.scss',
    imports: [CommonModule, TicketComponent, CreateTicketFormComponent]
})

export class TicketingContainerComponent {
  TICKETS: Ticket[] = [
    {
      id: 1, 
      title:'Superman',
      status: "Active"
    },
    {
      id: 2, 
      title:'Batman',
      status: "Open"
    },
    {id: 5, 
      title:'BatGirl',
      status: "Open"
    },
    {
      id: 3, 
      title:'Robin',
      status: "Open"
    },
    {
      id: 4, 
      title:'Flash',
      status: "Active"
    }
  ];
}
