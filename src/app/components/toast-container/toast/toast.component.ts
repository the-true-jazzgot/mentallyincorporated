import { Component, Input, OnInit } from '@angular/core';
import { Toast } from '../toast-container.component';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.scss'
})
export class ToastComponent implements OnInit{
  @Input()
  toast!: Toast;
  message!:string;

  ngOnInit():void {
    this.message = this.toast.message
  }
}