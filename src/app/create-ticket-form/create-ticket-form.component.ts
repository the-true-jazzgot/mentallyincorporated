import { Component } from '@angular/core';

import { Ticket } from "../interfaces/Ticket"
import { TicketService } from '../services/ticket.service';

@Component({
  selector: 'app-create-ticket-form',
  standalone: true,
  imports: [],
  templateUrl: './create-ticket-form.component.html',
  styleUrl: './create-ticket-form.component.scss'
})

export class CreateTicketFormComponent {

  tempTicketData: Ticket = {
    id: 1,
    title: "string",
    status: "New",
    description: "string"
  }

  constructor(private ticketService: TicketService) {
  }

  createTicket() {
    this.ticketService.createTicket(this.tempTicketData);
  }

}
