import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ticket } from "../interfaces/Ticket"
import { TicketService } from '../services/ticket.service';
import { UsersService } from '../services/users.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RUser, User, VUser } from '../interfaces/User';

@Component({
  selector: 'app-create-ticket-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './create-ticket-form.component.html',
  styleUrl: './create-ticket-form.component.scss'
})

export class CreateTicketFormComponent {
  users!: User[];

  constructor(private ticketService: TicketService, private usersService:UsersService) {
  }

  ngOnInit(){
    this.users = this.usersService.getAllUsers();
  }

  createTicketForm = new FormGroup({
    title: new FormControl<string>("", [Validators.required, Validators.minLength(4)]),
    description: new FormControl<string>("", [Validators.required, Validators.minLength(4)]),
    assignedTo: new FormControl<RUser | VUser | undefined>(undefined)
  });

  getRandId():string {
    return Math.floor(Math.random() * 9999).toString();
  }

  ticketData: ()=>Ticket = ():Ticket => {
    if(!this.createTicketForm.controls.title.value || !this.createTicketForm.controls.description.value) throw new Error("O borze zielony!")
    return {
      id: this.getRandId(),
      title: this.createTicketForm.controls.title.value,
      status: "New",
      description: this.createTicketForm.controls.description.value,
      createdBy: this.usersService.getLoggedInUser(),
      creationDate: new Date(),
      assignedTo: this.createTicketForm.controls.assignedTo.value ? this.createTicketForm.controls.assignedTo.value: undefined
    }
  }

  createTicket():void {
    this.ticketService.createTicket(this.ticketData()).subscribe(response => console.log(response));
  }
}
