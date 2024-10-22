import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable, take } from 'rxjs';
import { selectUserData } from '../../../store/user/user.selectors';
import { RUser, Ticket, User, VUser } from '../../../types';
import { TicketService } from '../../../services/ticket.service';
import { UsersService } from '../../../services/users.service';
import { AppStore } from '../../../store/app.store';
import { createTicket } from '../../../store/tickets/ticket.actions';

@Component({
  selector: 'app-create-ticket-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './create-ticket-form.component.html',
  styleUrl: './create-ticket-form.component.scss'
})

export class CreateTicketFormComponent implements OnInit{
  private activeUser$:Observable<RUser> = this.store.select(selectUserData)
  private activeUser!:RUser;
  users!: User[];

  constructor(
    private ticketService: TicketService, 
    private usersService:UsersService,
    private store:Store<AppStore>
  ) {}

  ngOnInit(){
    this.users = this.usersService.getAllUsers();
    const sub = this.activeUser$.subscribe(user => this.activeUser = user);
    sub.unsubscribe();
  }

  createTicketForm = new FormGroup({
    title: new FormControl<string>("", [Validators.required, Validators.minLength(4)]),
    description: new FormControl<string>("", [Validators.required, Validators.minLength(4)]),
    assignedTo: new FormControl<RUser | VUser | undefined>(undefined)
  });

  getRandId():string {
    return Math.floor(Math.random() * 9999).toString();
  }

  ticketData():Ticket {
    if(!this.createTicketForm.controls.title.value || !this.createTicketForm.controls.description.value) throw new Error("O borze zielony!")
    return {
      id: this.getRandId(),
      title: this.createTicketForm.controls.title.value,
      status: "New",
      description: this.createTicketForm.controls.description.value,
      createdBy: this.activeUser,
      creationDate: new Date(),
      assignedTo: this.createTicketForm.controls.assignedTo.value ? this.createTicketForm.controls.assignedTo.value: undefined,
      serverSync: false
    };
  }

  createTicket():void {
    // this.ticketService.createTicket(this.ticketData()).subscribe(response => console.log(response));
    this.store.dispatch(createTicket(this.ticketData()));
  }
}
