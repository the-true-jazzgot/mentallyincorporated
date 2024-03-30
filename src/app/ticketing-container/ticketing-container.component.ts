import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TicketComponent } from '../ticket/ticket.component';

import { Ticket } from '../interfaces/Ticket';

@Component({
  selector: 'app-ticketing-container',
  standalone: true,
  imports: [CommonModule, TicketComponent],
  templateUrl: './ticketing-container.component.html',
  styleUrl: './ticketing-container.component.scss'
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
