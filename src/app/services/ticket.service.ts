import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Ticket } from "../interfaces/Ticket"

@Injectable({
  providedIn: 'root'
})

export class TicketService {
  apiServer: string = "http://localhost:8080";

  constructor(private httpClient: HttpClient) { }

  public createTicket(ticketData: Ticket): Observable<Ticket> {
    return this.httpClient.post<Ticket>(`${this.apiServer}/ticket/create`, ticketData);
  }
}
