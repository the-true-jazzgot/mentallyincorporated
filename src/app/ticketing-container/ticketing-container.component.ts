import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TicketComponent } from '../ticket/ticket.component';
import { CreateTicketFormComponent } from "../create-ticket-form/create-ticket-form.component";

import { PersonalTicket, SystemTicket } from '../interfaces/Ticket';

import { UsersService } from '../services/users.service';

@Component({
    selector: 'app-ticketing-container',
    standalone: true,
    templateUrl: './ticketing-container.component.html',
    styleUrl: './ticketing-container.component.scss',
    imports: [CommonModule, TicketComponent, CreateTicketFormComponent]
})

export class TicketingContainerComponent {
  constructor(private usersService: UsersService) {}

  TICKETS: SystemTicket | PersonalTicket[] = [
    {
      id: 1,
      title: 'Superman',
      status: "Active",
      createdBy: this.usersService.getLoggedInUser()
    },
    {
      id: 2,
      title: 'Batman',
      status: "Open",
      createdBy: this.usersService.getLoggedInUser()
    },
    {
      id: 5,
      title: 'BatGirl',
      status: "Open",
      createdBy: this.usersService.getLoggedInUser()
    },
    {
      id: 3,
      title: 'Robin',
      status: "Open",
      createdBy: this.usersService.getLoggedInUser()
    },
    {
      id: 4,
      title: 'Flash',
      status: "Active",
      createdBy: this.usersService.getLoggedInUser()
    }
  ];

  
}
