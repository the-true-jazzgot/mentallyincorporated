import { Component, OnInit } from '@angular/core';
import { ToastsState } from './store/toast.reducers';
import { Store } from '@ngrx/store';
import { selectAllToasts } from './store/toast.selectors';
import { Observable } from 'rxjs';

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
  private toasts$:Observable<Toast[]> = this.store.select(selectAllToasts);

  constructor(
    private store: Store<ToastsState>
  ){}
  
  ngOnInit(){
    
  }
}
