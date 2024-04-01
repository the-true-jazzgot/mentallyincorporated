import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Ticket } from "../interfaces/Ticket"

@Injectable({
  providedIn: 'root'
})

export class TicketService {
  constructor(private httpClient:HttpClient) { }

  apiServer: string = "http://localhost:8080";

  public createTicket(ticketData: Ticket): Observable<Ticket> {
    console.log("attempting ticket creation");
    return this.httpClient.post<Ticket>(`${this.apiServer}/ticket/create`, ticketData);
  }
}
