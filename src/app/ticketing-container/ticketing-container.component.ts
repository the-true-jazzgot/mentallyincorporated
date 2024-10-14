import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TicketComponent } from '../ticket/ticket.component';
import { CreateTicketFormComponent } from "../create-ticket-form/create-ticket-form.component";

import { Ticket } from '../interfaces/Ticket';

import { UsersService } from '../services/users.service';
import { TicketService } from '../services/ticket.service';

@Component({
    selector: 'app-ticketing-container',
    standalone: true,
    templateUrl: './ticketing-container.component.html',
    styleUrl: './ticketing-container.component.scss',
    imports: [CommonModule, TicketComponent, CreateTicketFormComponent]
})

export class TicketingContainerComponent {
  tickets!:Ticket[];
  
  constructor(private usersService: UsersService, private ticketService: TicketService) {};

  ngOnInit() {
    this.ticketService.getTickets().subscribe((tickets: Ticket[]) => this.tickets = tickets);
  }
  
}
