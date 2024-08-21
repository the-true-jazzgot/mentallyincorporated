import { Component } from '@angular/core';

import { PersonalTicket, SystemTicket } from "../interfaces/Ticket"
import { TicketService } from '../services/ticket.service';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-create-ticket-form',
  standalone: true,
  imports: [],
  templateUrl: './create-ticket-form.component.html',
  styleUrl: './create-ticket-form.component.scss'
})

export class CreateTicketFormComponent {



  constructor(private ticketService: TicketService, private usersService:UsersService) {
  }

  tempTicketData: PersonalTicket = {
    id: 1,
    title: "string",
    status: "New",
    description: "string",
    createdBy: this.usersService.getLoggedInUser()
  }

  createTicket() {
    this.ticketService.createTicket(this.tempTicketData);
  }

}
