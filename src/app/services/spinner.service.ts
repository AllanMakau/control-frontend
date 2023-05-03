import { Injectable } from '@angular/core';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  public  isLoading: BehaviorSubject<boolean>  = new BehaviorSubject<boolean>(true);

  constructor() { }


  private spinnerRef: HTMLElement;

  register(spinnerRef: HTMLElement) {
    this.spinnerRef = spinnerRef;
  }

  show() {
    if (this.spinnerRef) {
      console.log('aparecer spinner')
      this.spinnerRef.style.display = 'block';
    }
  }

  hide() {
    if (this.spinnerRef) {
      console.log('fechar spinner')
      this.spinnerRef.style.display = 'none';
    }
  }

}
