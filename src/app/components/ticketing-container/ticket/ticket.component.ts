import { Component, Input, OnInit } from '@angular/core';
import { Ticket } from '../../../types';

@Component({
    selector: 'app-ticket',
    imports: [],
    templateUrl: './ticket.component.html',
    styleUrl: './ticket.component.scss',
    standalone: true
})

export class TicketComponent implements OnInit{
  @Input()
  ticket!: Ticket;
  name!: string;

  ngOnInit() {
    this.name = this.ticket.title;
  }
}
