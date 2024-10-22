import { Component } from '@angular/core';
import { TicketingContainerComponent } from "../ticketing-container/ticketing-container.component";

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [TicketingContainerComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

}
