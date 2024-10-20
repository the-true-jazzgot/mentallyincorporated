import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TicketingContainerComponent } from './components/ticketing-container/ticketing-container.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    TicketingContainerComponent,
    StoreModule.forRoot({})
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'mentallyincorporated';
}
