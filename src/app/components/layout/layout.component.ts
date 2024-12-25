import { Component } from '@angular/core';
import { TicketingContainerComponent } from "../ticketing-container/ticketing-container.component";
import { ToastContainerComponent } from "../toast-container/toast-container.component";

@Component({
    selector: 'app-layout',
    imports: [TicketingContainerComponent, ToastContainerComponent],
    templateUrl: './layout.component.html',
    styleUrl: './layout.component.scss'
})
export class LayoutComponent {

}
