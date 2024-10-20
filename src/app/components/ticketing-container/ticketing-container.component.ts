import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketComponent } from '../ticket/ticket.component';
import { CreateTicketFormComponent } from "../create-ticket-form/create-ticket-form.component";
import { UsersService } from '../../services/users.service';
import { TicketService } from '../../services/ticket.service';
import { Store } from '@ngrx/store';
import { fetchTickets } from '../../store/tickets/tickets.actions';
import { selectAllTickets } from '../../store/tickets/ticket.selectors';
import { AppState } from '../../store/app.store';
import { Observable } from 'rxjs';
import { Ticket } from '../../types';

@Component({
    selector: 'app-ticketing-container',
    standalone: true,
    templateUrl: './ticketing-container.component.html',
    styleUrl: './ticketing-container.component.scss',
    imports: [CommonModule, TicketComponent, CreateTicketFormComponent]
})

export class TicketingContainerComponent {
  public allTickets$:Observable<Ticket[]> = this.store.select(selectAllTickets);
  
  constructor(
    private usersService: UsersService, 
    private ticketService: TicketService,
    private store: Store<AppState>
  ) {};

  ngOnInit() {
    // this.ticketService.getTickets().subscribe((tickets: Ticket[]) => this.tickets = tickets);
    this.store.dispatch(fetchTickets());
  }
  
}
