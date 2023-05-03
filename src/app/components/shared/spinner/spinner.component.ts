import { Component, ElementRef, OnInit } from '@angular/core';
import { SpinnerService } from 'src/app/services/spinner.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit{

  constructor(private spinnerService: SpinnerService, private elRef: ElementRef) { }


  ngOnInit() {
    this.spinnerService.register(this.elRef.nativeElement.querySelector('.mat-progress-spinner-overlay'));
  }

}
