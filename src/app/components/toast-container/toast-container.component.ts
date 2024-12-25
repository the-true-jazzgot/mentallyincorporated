import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastsState } from './store/toast.reducers';
import { Store } from '@ngrx/store';
import { selectAllToasts } from './store/toast.selectors';
import { Observable } from 'rxjs';
import { ToastComponent } from "./toast/toast.component";

export interface Toast {
  message: string,
  details?: string,
  duration?: number,
  buttons?: Component[],
  isError?: boolean
}

@Component({
    selector: 'app-toast-container',
    imports: [CommonModule, ToastComponent],
    templateUrl: './toast-container.component.html',
    styleUrl: './toast-container.component.scss',
    standalone: true
})
export class ToastContainerComponent implements OnInit{
  toasts$!:Observable<Toast[]>

  constructor(
    private store: Store<ToastsState>
  ){}
  
  ngOnInit(){
    this.toasts$ = this.store.select(selectAllToasts);
  }
}
