import { Component, OnInit } from '@angular/core';

export interface Toast {
  message: string,
  details?: string,
  duration?: number,
  buttons?: Component[]
}

@Component({
  selector: 'app-toast-container',
  standalone: true,
  imports: [],
  templateUrl: './toast-container.component.html',
  styleUrl: './toast-container.component.scss'
})
export class ToastContainerComponent implements OnInit{
  toast!: Toast;

  ngOnInit(){

  }
}
