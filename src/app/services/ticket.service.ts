import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { PersonalTicket, SystemTicket } from "../interfaces/Ticket"

@Injectable({
  providedIn: 'root'
})

export class TicketService {
  constructor(private httpClient:HttpClient) { }

  apiServer: string = "http://localhost:3000/tickets_proto";

  public createTicket(ticketData: PersonalTicket): Observable<PersonalTicket> {
    console.log("attempting ticket creation");
    return this.httpClient.post<PersonalTicket>(`${this.apiServer}/ticket/create`, ticketData);
  }

  // public getTickets(start: number = 1, limit: number = 10):Observable<Ticket[]> {
    
  // }
}
