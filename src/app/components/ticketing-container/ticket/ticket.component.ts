import { Component, Input } from '@angular/core';
import { Ticket } from '../../../types';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.scss'
})

export class TicketComponent {
  @Input()
  ticket!: Ticket;
  name!: string;

  ngOnInit() {
    this.name = this.ticket.title;
  }
}
