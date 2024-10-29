import { Component, OnInit } from '@angular/core';
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
  standalone: true,
  imports: [ToastComponent],
  templateUrl: './toast-container.component.html',
  styleUrl: './toast-container.component.scss'
})
export class ToastContainerComponent implements OnInit{
  toasts$:Observable<Toast[]> = this.store.select(selectAllToasts);

  constructor(
    private store: Store<ToastsState>
  ){}
  
  ngOnInit(){
    
  }
}
