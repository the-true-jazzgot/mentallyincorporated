import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { TicketingContainerComponent } from './ticketing-container/ticketing-container.component';

import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TicketingContainerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'mentallyincorporated';
}
