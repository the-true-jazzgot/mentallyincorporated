import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Ticket } from "../interfaces/Ticket"

@Injectable({
  providedIn: 'root'
})

export class TicketService {
  constructor(private httpClient:HttpClient) {}

  private apiServer: string = "http://localhost:3000/personal_tickets";

  public createTicket(ticketData: Ticket): Observable<Ticket> {
    return this.httpClient.post<Ticket>(
      this.apiServer, 
      ticketData,
      {headers: {
        "Content-Type": "application/json"
      }}
    );
  }

  public getTickets(start: number = 1, limit: number = 10):Observable<Ticket[]> {
    return this.httpClient.get<Ticket[]>(
      this.apiServer
    );
  }
}
