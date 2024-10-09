import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BascevanCountry } from '../classBascevan';

@Component({
  selector: 'app-bascevan-country',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bascevan-country.component.html',
  styleUrl: './bascevan-country.component.css'
})
export class BascevanCountryComponent {
  @Input() CTRYBascevan!: BascevanCountry;
}
