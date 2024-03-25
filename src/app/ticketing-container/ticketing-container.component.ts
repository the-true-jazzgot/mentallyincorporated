import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TicketComponent } from '../ticket/ticket.component';

@Component({
  selector: 'app-ticketing-container',
  standalone: true,
  imports: [CommonModule, TicketComponent],
  templateUrl: './ticketing-container.component.html',
  styleUrl: './ticketing-container.component.scss'
})

export class TicketingContainerComponent {
  TICKETS = [
    {id: 1, name:'Superman'},
    {id: 2, name:'Batman'},
    {id: 5, name:'BatGirl'},
    {id: 3, name:'Robin'},
    {id: 4, name:'Flash'}
  ];
}
