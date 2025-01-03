import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersService } from '../../services/users.service';
import { TicketService } from '../../services/ticket.service';
import { Store } from '@ngrx/store';
import { fetchTickets } from '../../store/tickets/ticket.actions';
import { selectAllTickets } from '../../store/tickets/ticket.selectors';
import { AppStore } from '../../store/app.store';
import { Observable } from 'rxjs';
import { TicketComponent } from './ticket/ticket.component';
import { CreateTicketFormComponent } from './create-ticket-form/create-ticket-form.component';
import { Ticket } from '../../types';

@Component({
    selector: 'app-ticketing-container',
    templateUrl: './ticketing-container.component.html',
    styleUrl: './ticketing-container.component.scss',
    imports: [CommonModule, TicketComponent, CreateTicketFormComponent],
    standalone: true
})

export class TicketingContainerComponent implements OnInit {
  public allTickets$!:Observable<Ticket[]>;
  
  constructor(
    private usersService: UsersService, 
    private ticketService: TicketService,
    private store: Store<AppStore>
  ) {};

  ngOnInit() {
    this.allTickets$ = this.store.select(selectAllTickets);
    // this.ticketService.getTickets().subscribe((tickets: Ticket[]) => this.tickets = tickets);
    this.store.dispatch(fetchTickets());
  }
  
}
