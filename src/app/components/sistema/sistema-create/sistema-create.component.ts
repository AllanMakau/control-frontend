import { Component } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-sistema-create',
  templateUrl: './sistema-create.component.html',
  styleUrls: ['./sistema-create.component.css']
})
export class SistemaCreateComponent {

  color: ThemePalette = 'accent';
  checked = false;
  disabled = false;
}
